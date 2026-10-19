
import { scryptSync, randomBytes } from 'node:crypto';
import { initializeApp, cert } from 'firebase-admin/app';
import { getDataConnect } from 'firebase-admin/data-connect';

const PROJECT_ID = 'asset-management-gs';
const SERVICE_ID = 'asset-management-gs-service';
const LOCATION = 'asia-south1';

const USERNAME = 'tg131124';
const PASSWORD = process.env.ADMIN_INITIAL_PASSWORD;
const ROLE = 'admin';

// Same algorithm and storage format as lib/auth-server.ts
function hashPassword(plain) {
  const salt = randomBytes(16);
  const hash = scryptSync(plain, salt, 64);
  return `scrypt$${salt.toString('hex')}$${hash.toString('hex')}`;
}

if (!PASSWORD) {
  throw new Error(
    'Set ADMIN_INITIAL_PASSWORD in PowerShell before running this script.'
  );
}

const key = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

if (!key) {
  throw new Error(
    'FIREBASE_SERVICE_ACCOUNT_KEY environment variable is missing.'
  );
}

let serviceAccount;

try {
  serviceAccount = JSON.parse(key);
} catch {
  throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY is not valid JSON.');
}

initializeApp({
  credential: cert(serviceAccount),
  projectId: PROJECT_ID,
});

const dc = getDataConnect({
  serviceId: SERVICE_ID,
  location: LOCATION,
});

async function executeGraphQL(query, variables = {}, readOnly = false) {
  const result = readOnly
    ? await dc.executeGraphqlRead(query, { variables })
    : await dc.executeGraphql(query, { variables });

  return result.data;
}

const checkQuery = `
  query CheckAdmin($username: String!) {
    adminUsers(where: { username: { eq: $username } }) {
      id
      username
      role
    }
  }
`;

const existing = await executeGraphQL(
  checkQuery,
  { username: USERNAME },
  true
);

if (existing.adminUsers?.length) {
  throw new Error(
    `User "${USERNAME}" already exists. No changes were made. Use a dedicated password-reset operation instead.`
  );
}

const mutation = `
  mutation CreateAdminUser(
    $username: String!
    $password: String!
    $role: String
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
  password: hashPassword(PASSWORD),
  role: ROLE,
});

console.log('Admin user created successfully.');
console.log(`Username: ${USERNAME}`);
console.log(`Role: ${ROLE}`);
console.log('Password format: scrypt');
console.log('The password itself was not printed.');

