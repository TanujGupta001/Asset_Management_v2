import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/auth-server';
import { getAssets } from '@/lib/services';
import { executeGraphQL } from '@/lib/firebase';

export async function GET() {
  const _s = await requireAuth();
  if (!_s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await getAssets();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const _s = await requireAdmin();
  if (!_s) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const mutation = `mutation CreateAssetApi($assetTag: String!, $type: String, $departmentId: UUID, $employeeId: UUID, $cpuBrand: String, $monitorBrand: String, $keyboardBrand: String, $mouseBrand: String, $cpuSerial: String, $monitorSerial: String, $keyboardSerial: String, $mouseSerial: String, $vendorId: UUID, $invoiceNumber: String, $purchaseDate: Date, $warrantyYears: Int, $warrantyExpiry: Date, $windowsLicense: String, $msLicense: String, $windowsLicensePurchaseDate: Date, $msLicensePurchaseDate: Date, $antivirus: String, $status: String, $notes: String) {
    asset_insert(data: {assetTag: $assetTag, type: $type, departmentId: $departmentId, employeeId: $employeeId, cpuBrand: $cpuBrand, monitorBrand: $monitorBrand, keyboardBrand: $keyboardBrand, mouseBrand: $mouseBrand, cpuSerial: $cpuSerial, monitorSerial: $monitorSerial, keyboardSerial: $keyboardSerial, mouseSerial: $mouseSerial, vendorId: $vendorId, invoiceNumber: $invoiceNumber, purchaseDate: $purchaseDate, warrantyYears: $warrantyYears, warrantyExpiry: $warrantyExpiry, windowsLicense: $windowsLicense, msLicense: $msLicense, windowsLicensePurchaseDate: $windowsLicensePurchaseDate, msLicensePurchaseDate: $msLicensePurchaseDate, antivirus: $antivirus, status: $status, notes: $notes})
  }`;
  const data = await executeGraphQL<{ asset_insert: { id: string } }>(mutation, body);
  return NextResponse.json(data, { status: 201 });
}
