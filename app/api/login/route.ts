import { NextRequest, NextResponse } from 'next/server';
import { signSession, SESSION_KEY } from '@/lib/auth';
import { verifyCredentials } from '@/lib/auth-server';

export const dynamic = 'force-dynamic';

// ---- Simple in-memory login rate limiting (per-instance) ----
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 10;
const attempts = new Map<string, { count: number; first: number }>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const rec = attempts.get(key);
  if (!rec || now - rec.first > WINDOW_MS) {
    attempts.set(key, { count: 1, first: now });
    return false;
  }
  rec.count++;
  return rec.count > MAX_ATTEMPTS;
}

function clientKey(request: NextRequest, username: string): string {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';
  return `${ip}:${username.trim().toLowerCase()}`;
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body.username !== 'string' || typeof body.password !== 'string') {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const key = clientKey(request, body.username);
  if (rateLimited(key)) {
    return NextResponse.json(
      { error: 'Too many login attempts. Please try again later.' },
      { status: 429 },
    );
  }

  const session = await verifyCredentials(body.username, body.password);
  if (!session) {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
  }

  // Successful login clears the attempt counter.
  attempts.delete(key);

  const token = await signSession(session.username, session.role);
  const maxAge = body.remember ? 60 * 60 * 24 * 7 : 60 * 60 * 24;

  const response = NextResponse.json({ success: true, role: session.role, token });
  response.cookies.set(SESSION_KEY, token, {
    path: '/',
    maxAge,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
