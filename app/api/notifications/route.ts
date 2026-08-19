import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth-server';
import { getNotifications } from '@/lib/services';

export const dynamic = 'force-dynamic';

export async function GET() {
  const session = await requireAuth();
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const notifications = await getNotifications();
  return NextResponse.json(notifications);
}
