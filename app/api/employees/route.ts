import { NextRequest, NextResponse } from 'next/server';
import { requireAdmin, requireAuth } from '@/lib/auth-server';
import { getEmployees } from '@/lib/services';
import { executeGraphQL } from '@/lib/firebase';

export async function GET() {
  const _s = await requireAuth();
  if (!_s) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const data = await getEmployees();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const _s = await requireAdmin();
  if (!_s) return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  const body = await req.json();
  const mutation = `mutation CreateEmployeeApi($name: String!, $email: String, $departmentId: UUID, $role: String, $phone: String, $status: String) {
    employee_insert(data: {name: $name, email: $email, departmentId: $departmentId, role: $role, phone: $phone, status: $status})
  }`;
  const data = await executeGraphQL<{ employee_insert: { id: string } }>(mutation, body);
  return NextResponse.json(data, { status: 201 });
}
