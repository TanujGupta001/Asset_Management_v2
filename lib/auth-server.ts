import { cookies } from 'next/headers';
import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';
import { getAdminUserByUsername } from './services';
import { SESSION_KEY, verifySession, type AuthSession } from './auth';

// ---- Password hashing (scrypt) ----
// Stored format: scrypt$<saltHex>$<hashHex>
export function hashPassword(plain: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(plain, salt, 64);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

export function verifyPassword(plain: string, stored: string): boolean {
  if (stored.startsWith('scrypt$')) {
    const [, saltHex, hashHex] = stored.split('$');
    if (!saltHex || !hashHex) return false;
    const expected = Buffer.from(hashHex, 'hex');
    const actual = scryptSync(plain, Buffer.from(saltHex, 'hex'), expected.length);
    return expected.length === actual.length && timingSafeEqual(expected, actual);
  }
  // Legacy plaintext fallback (pre-hashing records). Constant-time compare.
  const a = Buffer.from(plain);
  const b = Buffer.from(stored);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function isLegacyPlaintext(stored: string): boolean {
  return !stored.startsWith('scrypt$');
}

// ---- Credential verification ----
export async function verifyCredentials(username: string, password: string): Promise<AuthSession | null> {
  const normalizedUsername = username.trim().toLowerCase();
  const user = await getAdminUserByUsername(normalizedUsername);
  if (!user) return null;
  if (!verifyPassword(password, user.password)) return null;

  return {
    username: normalizedUsername,
    role: user.role,
    loggedInAt: Date.now(),
  };
}

// ---- Server-side session access & authorization guards ----
export async function getServerSession(): Promise<AuthSession | null> {
  const token = cookies().get(SESSION_KEY)?.value;
  return verifySession(token);
}

/** Returns the session only if the caller is an authenticated admin, else null. */
export async function requireAdmin(): Promise<AuthSession | null> {
  const session = await getServerSession();
  return session && session.role === 'admin' ? session : null;
}

/** Returns the session for any authenticated user, else null. */
export async function requireAuth(): Promise<AuthSession | null> {
  return getServerSession();
}
