import { NextResponse } from 'next/server';
import { SESSION_KEY } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST() {
  const response = NextResponse.json({ success: true });
  // Clear the httpOnly session cookie server-side (JS cannot delete httpOnly cookies).
  response.cookies.set(SESSION_KEY, '', { path: '/', maxAge: 0, httpOnly: true, sameSite: 'lax' });
  return response;
}
