import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/auth-server';
import { getSoftwareLicenses } from '@/lib/services';
import { executeGraphQL } from '@/lib/firebase';

export async function GET() {
  const _s = await requireAuth();
  if (!_s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await getSoftwareLicenses();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const _s = await requireAdmin();
  if (!_s) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const mutation = `mutation CreateLicenseApi($licenseNumber: String!, $type: String!, $edition: String, $productKey: String, $assetId: UUID, $departmentId: UUID, $employeeId: UUID, $vendorId: UUID, $purchaseDate: Date, $expiryDate: Date, $status: String, $notes: String) {
    softwareLicense_insert(data: {licenseNumber: $licenseNumber, type: $type, edition: $edition, productKey: $productKey, assetId: $assetId, departmentId: $departmentId, employeeId: $employeeId, vendorId: $vendorId, purchaseDate: $purchaseDate, expiryDate: $expiryDate, status: $status, notes: $notes})
  }`;
  const data = await executeGraphQL<{ softwareLicense_insert: { id: string } }>(mutation, body);
  return NextResponse.json(data, { status: 201 });
}
