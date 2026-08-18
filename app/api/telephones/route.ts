import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/auth-server';
import { getTelephones } from '@/lib/services';
import { executeGraphQL } from '@/lib/firebase';

export async function GET() {
  const _s = await requireAuth();
  if (!_s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await getTelephones();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const _s = await requireAdmin();
  if (!_s) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const mutation = `mutation CreateTelephoneApi($extension: String, $contactNumber: String, $assignedTo: String, $organization: String, $serial: String, $status: String) {
    telephone_insert(data: {extension: $extension, contactNumber: $contactNumber, assignedTo: $assignedTo, organization: $organization, serial: $serial, status: $status})
  }`;
  const data = await executeGraphQL<{ telephone_insert: { id: string } }>(mutation, body);
  return NextResponse.json(data, { status: 201 });
}
