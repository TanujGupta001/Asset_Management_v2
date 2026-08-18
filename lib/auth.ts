// Session token utilities.
//
// Tokens are HMAC-SHA256 signed: `base64url(payload).base64url(signature)`.
// - signSession / verifySession use the secret and run server-side (login route,
//   server actions) or in the edge middleware. The client never calls them.
// - readSessionUnsafe only base64-decodes the payload for display; it does NOT
//   verify the signature and must never be trusted for authorization. All real
//   access control happens server-side via verifySession + requireAdmin.

export type UserRole = 'admin' | 'viewer';

export interface AuthSession {
  username: string;
  role: UserRole;
  loggedInAt: number;
}

export const SESSION_KEY = 'itam-session';

const SESSION_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7; // 7 days

// Server-only secret. In the browser bundle this resolves to undefined and the
// fallback is used, but the client never signs/verifies, so the real secret set
// via SESSION_SECRET in the environment stays server-side only.
const SECRET =
  process.env.SESSION_SECRET || 'insecure-dev-secret-set-SESSION_SECRET-in-env';

// ---- base64url helpers (UTF-8 safe, work in node/edge/browser) ----
function bytesToB64url(bytes: Uint8Array): string {
  let bin = '';
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlToBytes(s: string): Uint8Array {
  const b64 = s.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(s.length / 4) * 4, '=');
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
function encodePayload(payload: AuthSession): string {
  return bytesToB64url(new TextEncoder().encode(JSON.stringify(payload)));
}
function decodePayload(msg: string): AuthSession {
  return JSON.parse(new TextDecoder().decode(b64urlToBytes(msg)));
}

async function hmacKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  );
}

export async function signSession(username: string, role: UserRole): Promise<string> {
  const payload: AuthSession = { username, role, loggedInAt: Date.now() };
  const msg = encodePayload(payload);
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(), new TextEncoder().encode(msg));
  return `${msg}.${bytesToB64url(new Uint8Array(sig))}`;
}

export async function verifySession(token: string | null | undefined): Promise<AuthSession | null> {
  if (!token) return null;
  const dot = token.indexOf('.');
  if (dot < 0) return null;
  const msg = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  try {
    const ok = await crypto.subtle.verify(
      'HMAC',
      await hmacKey(),
      b64urlToBytes(sig),
      new TextEncoder().encode(msg),
    );
    if (!ok) return null;
    const payload = decodePayload(msg);
    if (
      typeof payload.username !== 'string' ||
      (payload.role !== 'admin' && payload.role !== 'viewer') ||
      typeof payload.loggedInAt !== 'number'
    ) return null;
    if (Date.now() - payload.loggedInAt > SESSION_MAX_AGE_MS) return null;
    return payload;
  } catch {
    return null;
  }
}

// Display-only decode. NOT verified — never use for access control.
export function readSessionUnsafe(token: string | null | undefined): AuthSession | null {
  if (!token) return null;
  const dot = token.indexOf('.');
  const msg = dot < 0 ? token : token.slice(0, dot);
  try {
    const payload = decodePayload(msg);
    if (typeof payload.username !== 'string') return null;
    if (payload.role !== 'admin' && payload.role !== 'viewer') return null;
    if (Date.now() - payload.loggedInAt > SESSION_MAX_AGE_MS) return null;
    return payload;
  } catch {
    return null;
  }
}
