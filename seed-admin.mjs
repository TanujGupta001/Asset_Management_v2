
import { scryptSync, randomBytes } from 'node:crypto';
import { initializeApp, cert } from 'firebase-admin/app';
import { getDataConnect } from 'firebase-admin/data-connect';

// ============================================================
// CONFIGURATION
// ============================================================

const PROJECT_ID = 'asset-management-gs';
const SERVICE_ID = 'asset-management-gs-service';
const LOCATION = 'asia-south1';

// Change these if you want different login credentials.
const USERNAME = 'tanujG';
const PASSWORD = 'Tanuj130728@rsd';
const ROLE = 'admin';

// ============================================================
// PASSWORD HASHING
// Must exactly match lib/auth-server.ts
// Format: scrypt$<saltHex>$<hashHex>
// ============================================================

function hashPassword(plain) {
  const salt = randomBytes(16);
  const hash = scryptSync(plain, salt, 64);

  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

// ============================================================
// FIREBASE ADMIN INITIALIZATION
// ============================================================

const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!serviceAccountKey) {
  throw new Error(
    'FIREBASE_SERVICE_ACCOUNT_KEY environment variable is missing.'
  );
}

let serviceAccount;

try {
  serviceAccount = JSON.parse(serviceAccountKey);
} catch (error) {
  throw new Error(
    'FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON.'
  );
}

const app = initializeApp({
  credential: cert(serviceAccount),
  projectId: PROJECT_ID,
});

const dataConnect = getDataConnect({
  serviceId: SERVICE_ID,
  location: LOCATION,
});

// ============================================================
// GRAPHQL HELPER
// ============================================================

async function executeGraphQL(query, variables = {}) {
  const response = await dataConnect.executeGraphql(query, {
    variables,
  });

  return response.data;
}

// ============================================================
// CHECK IF USER ALREADY EXISTS
// ============================================================

const checkQuery = `
  query GetAdminUserByUsername($username: String!) {
    adminUsers(where: { username: { eq: $username } }) {
      id
      username
      role
      password
    }
  }
`;

const existing = await executeGraphQL(checkQuery, {
  username: USERNAME,
});

if (existing.adminUsers && existing.adminUsers.length > 0) {
  console.log('⚠️ Admin user already exists.');
  console.log(`Username: ${USERNAME}`);
  console.log(`Role: ${existing.adminUsers[0].role}`);

  const storedPassword = existing.adminUsers[0].password;

  if (storedPassword?.startsWith('scrypt$')) {
    console.log('Password format: ✅ scrypt');
  } else {
    console.log('Password format: ❌ NOT scrypt');
    console.log(
      'Delete this user and run the seed script again.'
    );
  }

  process.exit(0);
}

// ============================================================
// HASH PASSWORD
// ============================================================

const hashedPassword = hashPassword(PASSWORD);

// ============================================================
// CREATE ADMIN USER
// ============================================================

const mutation = `
  mutation CreateAdminUser(
    $username: String!
    $password: String!
    $role: String!
  ) {
    adminUser_insert(
      data: {
        username: $username
        password: $password
        role: $role
      }
    )
  }
`;

await executeGraphQL(mutation, {
  username: USERNAME,
  password: hashedPassword,
  role: ROLE,
});

// ============================================================
// SUCCESS
// ============================================================

console.log('');
console.log('==========================================');
console.log('✅ Admin user created successfully');
console.log('==========================================');
console.log(`Username: ${USERNAME}`);
console.log(`Password: ${PASSWORD}`);
console.log(`Role:     ${ROLE}`);
console.log('');
console.log('Password hashing: scrypt ✅');
console.log(`Project:  ${PROJECT_ID}`);
console.log(`Service:  ${SERVICE_ID}`);
console.log(`Location: ${LOCATION}`);
console.log('==========================================');
