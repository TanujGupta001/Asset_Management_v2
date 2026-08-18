export const dynamic = 'force-dynamic';
import { getDepartments, getVendors, getEmployees, getAuditLogs, getAdminUsers } from '@/lib/services';
import { SettingsClient } from '@/components/shared/settings-client';

export default async function SettingsPage() {
  const [departments, vendors, employees, auditLogs, adminUsers] = await Promise.all([
    getDepartments(),
    getVendors(),
    getEmployees(),
    getAuditLogs(20),
    getAdminUsers(),
  ]);

  return (
    <SettingsClient
      departments={departments}
      vendors={vendors}
      employees={employees}
      auditLogs={auditLogs}
      adminUsers={adminUsers}
    />
  );
}
