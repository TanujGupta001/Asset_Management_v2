import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/auth-server';
import { getInventoryItems } from '@/lib/services';
import { executeGraphQL } from '@/lib/firebase';

export async function GET() {
  const _s = await requireAuth();
  if (!_s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await getInventoryItems();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const _s = await requireAdmin();
  if (!_s) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const mutation = `mutation CreateInventoryApi($type: String!, $brand: String, $serial: String, $productKey: String, $condition: String, $assignedTo: String, $departmentId: UUID, $notes: String) {
    inventoryItem_insert(data: {type: $type, brand: $brand, serial: $serial, productKey: $productKey, condition: $condition, assignedTo: $assignedTo, departmentId: $departmentId, notes: $notes})
  }`;
  const data = await executeGraphQL<{ inventoryItem_insert: { id: string } }>(mutation, body);
  return NextResponse.json(data, { status: 201 });
}
