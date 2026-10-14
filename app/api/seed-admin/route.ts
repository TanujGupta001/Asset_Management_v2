import { NextResponse } from 'next/server';
import { executeGraphQL } from '@/lib/firebase';
import { hashPassword } from '@/lib/auth-server';

export const dynamic = 'force-dynamic';

// One-time bootstrap of the initial admin. No-ops once an admin exists, and is
// disabled entirely in production to avoid an open account-creation endpoint.
// export async function GET() {
//   if (process.env.NODE_ENV === 'production') {
//     return NextResponse.json({ error: 'Not available' }, { status: 404 });
//   }

  const checkQuery = `query { adminUsers(where: {username: {eq: "admin"}}) { id } }`;
  const existing = await executeGraphQL<{ adminUsers: any[] }>(checkQuery, {}, true);

  if (existing.adminUsers.length > 0) {
    return NextResponse.json({ message: 'Admin user already exists', seeded: false });
  }

  const mutation = `mutation CreateAdminUser($username: String!, $password: String!, $role: String) {
    adminUser_insert(data: {username: $username, password: $password, role: $role})
  }`;

  await executeGraphQL(mutation, {
    username: 'TanujG',
    password: hashPassword('Tanuj130728@'),
    role: 'admin',
  });

  return NextResponse.json({ message: 'Admin user seeded successfully', seeded: true });
}
