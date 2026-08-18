import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/auth-server';
import { getTransfers } from '@/lib/services';
import { executeGraphQL } from '@/lib/firebase';

export async function GET() {
  const _s = await requireAuth();
  if (!_s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await getTransfers();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const _s = await requireAdmin();
  if (!_s) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const mutation = `mutation CreateTransferApi($assetId: UUID!, $transferDate: Timestamp, $fromDepartmentId: UUID, $toDepartmentId: UUID, $fromEmployeeId: UUID, $toEmployeeId: UUID, $reason: String, $approvedBy: String, $handover: String, $notes: String, $status: String) {
    transfer_insert(data: {assetId: $assetId, transferDate: $transferDate, fromDepartmentId: $fromDepartmentId, toDepartmentId: $toDepartmentId, fromEmployeeId: $fromEmployeeId, toEmployeeId: $toEmployeeId, reason: $reason, approvedBy: $approvedBy, handover: $handover, notes: $notes, status: $status})
  }`;
  const data = await executeGraphQL<{ transfer_insert: { id: string } }>(mutation, body);
  return NextResponse.json(data, { status: 201 });
}
