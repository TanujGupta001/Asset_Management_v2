import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/auth-server';
import { getMovements } from '@/lib/services';
import { executeGraphQL } from '@/lib/firebase';

export async function GET() {
  const _s = await requireAuth();
  if (!_s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await getMovements();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const _s = await requireAdmin();
  if (!_s) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const mutation = `mutation CreateMovementApi($assetId: UUID!, $movementType: String!, $movementDate: Timestamp, $fromLocation: String, $toLocation: String, $departmentId: UUID, $notes: String) {
    movement_insert(data: {assetId: $assetId, movementType: $movementType, movementDate: $movementDate, fromLocation: $fromLocation, toLocation: $toLocation, departmentId: $departmentId, notes: $notes})
  }`;
  const data = await executeGraphQL<{ movement_insert: { id: string } }>(mutation, body);
  return NextResponse.json(data, { status: 201 });
}
