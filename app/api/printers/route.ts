import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/auth-server';
import { getPrinters } from '@/lib/services';
import { executeGraphQL } from '@/lib/firebase';

export async function GET() {
  const _s = await requireAuth();
  if (!_s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await getPrinters();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const _s = await requireAdmin();
  if (!_s) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const mutation = `mutation CreatePrinterApi($serial: String, $brand: String, $model: String, $productNumber: String, $assignedTo: String, $status: String) {
    printer_insert(data: {serial: $serial, brand: $brand, model: $model, productNumber: $productNumber, assignedTo: $assignedTo, status: $status})
  }`;
  const data = await executeGraphQL<{ printer_insert: { id: string } }>(mutation, body);
  return NextResponse.json(data, { status: 201 });
}
