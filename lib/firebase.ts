import { initializeApp, getApps, cert, App } from 'firebase-admin/app';
import { getDataConnect, DataConnect } from 'firebase-admin/data-connect';

let app: App;
let dataConnectInstance: DataConnect | null = null;

function getApp(): App {
  if (app) return app;

  if (getApps().length) {
    app = getApps()[0]!;
    return app;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;

  if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
    const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
    app = initializeApp({ credential: cert(serviceAccount), projectId });
  } else if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    app = initializeApp({ projectId });
  } else {
    app = initializeApp({ projectId: projectId || 'demo-project' });
  }

  return app;
}

export function getDataConnectClient(): DataConnect {
  if (dataConnectInstance) return dataConnectInstance;

  getApp();

  const serviceId = process.env.FIREBASE_DATA_CONNECT_SERVICE_ID || 'itam-dataconnect';
  const location = process.env.FIREBASE_DATA_CONNECT_LOCATION || 'us-central1';

  dataConnectInstance = getDataConnect({ serviceId, location });
  return dataConnectInstance;
}

export async function executeGraphQL<T = any>(
  query: string,
  variables: Record<string, any> = {},
  readOnly = false,
): Promise<T> {
  const dc = getDataConnectClient();
  const response = readOnly
    ? await dc.executeGraphqlRead(query, { variables })
    : await dc.executeGraphql(query, { variables });
  return response.data as T;
}
