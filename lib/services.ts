import { executeGraphQL } from './firebase';
import type {
  Asset, Department, Employee, Vendor, Movement, Transfer,
  SoftwareLicense, InventoryItem, Telephone, Printer, AuditLog, AdminUser,
  AppNotification, DashboardStats,
} from '@/types';

// ============ Departments ============
export async function getDepartments(): Promise<Department[]> {
  const query = `query { departments(orderBy: [{name: ASC}]) { id name head description createdAt updatedAt } }`;
  const data = await executeGraphQL<{ departments: Department[] }>(query, {}, true);
  return data.departments;
}

// ============ Employees ============
export async function getEmployees(): Promise<Employee[]> {
  const query = `query {
    employees(orderBy: [{name: ASC}]) {
      id name email role phone status createdAt updatedAt
      department { id name head description }
    }
  }`;
  const data = await executeGraphQL<{ employees: any[] }>(query, {}, true);
  return data.employees.map(mapEmployee);
}

export async function getAvailableEmployees(): Promise<Employee[]> {
  const query = `query {
    employees(where: {status: {eq: "Active"}}, orderBy: [{name: ASC}]) {
      id name email role phone status createdAt updatedAt
      department { id name head description }
    }
  }`;
  const data = await executeGraphQL<{ employees: any[] }>(query, {}, true);
  return data.employees.map(mapEmployee);
}

// ============ Vendors ============
export async function getVendors(): Promise<Vendor[]> {
  const query = `query { vendors(orderBy: [{name: ASC}]) { id name contactPerson email phone address createdAt updatedAt } }`;
  const data = await executeGraphQL<{ vendors: Vendor[] }>(query, {}, true);
  return data.vendors;
}

// ============ Assets ============
export async function getAssets(): Promise<Asset[]> {
  const query = `query {
    assets(orderBy: [{assetTag: ASC}]) {
      id assetTag type
      cpuBrand monitorBrand keyboardBrand mouseBrand
      cpuSerial monitorSerial keyboardSerial mouseSerial
      invoiceNumber purchaseDate warrantyYears warrantyExpiry
      windowsLicense msLicense windowsLicensePurchaseDate msLicensePurchaseDate
      antivirus status notes createdAt updatedAt
      department { id name head description }
      employee { id name email role phone status }
      vendor { id name contactPerson email phone address }
    }
  }`;
  const data = await executeGraphQL<{ assets: any[] }>(query, {}, true);
  return data.assets.map(mapAsset);
}

export async function getAssetById(id: string): Promise<Asset | null> {
  const query = `query GetAssetById($id: UUID!) {
    assets(where: {id: {eq: $id}}) {
      id assetTag type
      cpuBrand monitorBrand keyboardBrand mouseBrand
      cpuSerial monitorSerial keyboardSerial mouseSerial
      invoiceNumber purchaseDate warrantyYears warrantyExpiry
      windowsLicense msLicense windowsLicensePurchaseDate msLicensePurchaseDate
      antivirus status notes createdAt updatedAt
      department { id name head description }
      employee { id name email role phone status }
      vendor { id name contactPerson email phone address }
    }
  }`;
  const data = await executeGraphQL<{ assets: any[] }>(query, { id }, true);
  return data.assets.length ? mapAsset(data.assets[0]) : null;
}

export async function getAssetsByStatus(status: string): Promise<Asset[]> {
  const query = `query GetAssetsByStatus($status: String!) {
    assets(where: {status: {eq: $status}}, orderBy: [{assetTag: ASC}]) {
      id assetTag type
      cpuBrand monitorBrand keyboardBrand mouseBrand
      cpuSerial monitorSerial keyboardSerial mouseSerial
      invoiceNumber purchaseDate warrantyYears warrantyExpiry
      windowsLicense msLicense windowsLicensePurchaseDate msLicensePurchaseDate
      antivirus status notes createdAt updatedAt
      department { id name head description }
      employee { id name email role phone status }
      vendor { id name contactPerson email phone address }
    }
  }`;
  const data = await executeGraphQL<{ assets: any[] }>(query, { status }, true);
  return data.assets.map(mapAsset);
}

export async function getAssetsByDepartment(deptId: string): Promise<Asset[]> {
  const query = `query GetAssetsByDepartment($deptId: UUID!) {
    assets(where: {department: {id: {eq: $deptId}}}, orderBy: [{assetTag: ASC}]) {
      id assetTag type
      cpuBrand monitorBrand keyboardBrand mouseBrand
      cpuSerial monitorSerial keyboardSerial mouseSerial
      invoiceNumber purchaseDate warrantyYears warrantyExpiry
      windowsLicense msLicense windowsLicensePurchaseDate msLicensePurchaseDate
      antivirus status notes createdAt updatedAt
      department { id name head description }
      employee { id name email role phone status }
      vendor { id name contactPerson email phone address }
    }
  }`;
  const data = await executeGraphQL<{ assets: any[] }>(query, { deptId }, true);
  return data.assets.map(mapAsset);
}

// ============ Movements ============
export async function getMovements(): Promise<Movement[]> {
  const query = `query {
    movements(orderBy: [{movementDate: DESC}]) {
      id movementType movementDate fromLocation toLocation notes createdAt updatedAt
      asset { id assetTag type status department { id name } }
      department { id name head description }
    }
  }`;
  const data = await executeGraphQL<{ movements: any[] }>(query, {}, true);
  return data.movements.map(mapMovement);
}

export async function getRecentMovements(limit = 5): Promise<Movement[]> {
  const query = `query GetRecentMovements($limit: Int!) {
    movements(orderBy: [{movementDate: DESC}], limit: $limit) {
      id movementType movementDate fromLocation toLocation notes createdAt updatedAt
      asset { id assetTag type status department { id name } }
      department { id name head description }
    }
  }`;
  const data = await executeGraphQL<{ movements: any[] }>(query, { limit }, true);
  return data.movements.map(mapMovement);
}

// ============ Transfers ============
export async function getTransfers(): Promise<Transfer[]> {
  const query = `query {
    transfers(orderBy: [{transferDate: DESC}]) {
      id transferDate reason approvedBy handover notes status createdAt updatedAt
      asset { id assetTag type status }
      fromDepartment { id name head description }
      toDepartment { id name head description }
      fromEmployee { id name email role phone status }
      toEmployee { id name email role phone status }
    }
  }`;
  const data = await executeGraphQL<{ transfers: any[] }>(query, {}, true);
  return data.transfers.map(mapTransfer);
}

// ============ Software Licenses ============
export async function getSoftwareLicenses(): Promise<SoftwareLicense[]> {
  const query = `query {
    softwareLicenses(orderBy: [{licenseNumber: ASC}]) {
      id licenseNumber type edition productKey
      purchaseDate expiryDate status notes createdAt updatedAt
      asset { id assetTag type status }
      department { id name head description }
      employee { id name email role phone status }
      vendor { id name contactPerson email phone address }
    }
  }`;
  const data = await executeGraphQL<{ softwareLicenses: any[] }>(query, {}, true);
  return data.softwareLicenses.map(mapLicense);
}

// ============ Inventory ============
export async function getInventoryItems(): Promise<InventoryItem[]> {
  const query = `query {
    inventoryItems(orderBy: [{type: ASC}]) {
      id type brand serial productKey condition assignedTo notes createdAt updatedAt
      department { id name }
    }
  }`;
  const data = await executeGraphQL<{ inventoryItems: any[] }>(query, {}, true);
  return data.inventoryItems.map(mapInventoryItem);
}

// ============ Telephones ============
export async function getTelephones(): Promise<Telephone[]> {
  const query = `query { telephones(orderBy: [{organization: ASC}]) { id extension contactNumber assignedTo organization serial status createdAt updatedAt } }`;
  const data = await executeGraphQL<{ telephones: Telephone[] }>(query, {}, true);
  return data.telephones;
}

// ============ Printers ============
export async function getPrinters(): Promise<Printer[]> {
  const query = `query { printers(orderBy: [{brand: ASC}]) { id serial brand model productNumber assignedTo status createdAt updatedAt } }`;
  const data = await executeGraphQL<{ printers: Printer[] }>(query, {}, true);
  return data.printers;
}

// ============ Audit Logs ============
export async function getAuditLogs(limit = 20): Promise<AuditLog[]> {
  const query = `query GetAuditLogs($limit: Int!) {
    auditLogs(orderBy: [{createdAt: DESC}], limit: $limit) { id action entity entityId performedBy details createdAt }
  }`;
  const data = await executeGraphQL<{ auditLogs: AuditLog[] }>(query, { limit }, true);
  return data.auditLogs;
}

// ============ Admin Users ============
export async function getAdminUsers(): Promise<AdminUser[]> {
  const query = `query {
    adminUsers(orderBy: [{username: ASC}]) { id username role createdAt updatedAt }
  }`;
  const data = await executeGraphQL<{ adminUsers: any[] }>(query, {}, true);
  return data.adminUsers.map((u: any) => ({
    id: u.id, username: u.username, role: u.role as 'admin' | 'viewer',
    createdAt: u.createdAt, updatedAt: u.updatedAt,
  }));
}

export async function getAdminUserByUsername(username: string): Promise<{ id: string; username: string; password: string; role: 'admin' | 'viewer' } | null> {
  const query = `query GetAdminUserByUsername($username: String!) {
    adminUsers(where: {username: {eq: $username}}) { id username password role }
  }`;
  const data = await executeGraphQL<{ adminUsers: any[] }>(query, { username }, true);
  if (!data.adminUsers.length) return null;
  const u = data.adminUsers[0];
  return { id: u.id, username: u.username, password: u.password, role: u.role as 'admin' | 'viewer' };
}

export async function createAuditLog(log: Omit<AuditLog, 'id' | 'createdAt'>): Promise<void> {
  const mutation = `mutation CreateAuditLog($action: String!, $entity: String!, $entityId: UUID, $performedBy: String, $details: String) {
    auditLog_insert(data: {action: $action, entity: $entity, entityId: $entityId, performedBy: $performedBy, details: $details})
  }`;
  await executeGraphQL(mutation, {
    action: log.action, entity: log.entity, entityId: log.entityId,
    performedBy: log.performedBy, details: log.details,
  });
}

// ============ Dashboard Stats ============
export async function getDashboardStats(): Promise<DashboardStats> {
  const [assets, employees, departments, licenses, movements, transfers] = await Promise.all([
    getAssets(), getEmployees(), getDepartments(), getSoftwareLicenses(),
    getRecentMovements(10), getTransfers(),
  ]);

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  const statusCount = (s: string) => assets.filter((a) => a.status === s).length;
  const licenseStatusCount = (s: string) => licenses.filter((l) => l.status === s).length;

  const upcomingWarrantyExpiry = assets
    .filter((a) => {
      if (!a.warrantyExpiry || a.status === 'Disposed') return false;
      const days = Math.ceil((new Date(a.warrantyExpiry).getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      return days >= 0 && days <= 90;
    })
    .sort((a, b) => new Date(a.warrantyExpiry!).getTime() - new Date(b.warrantyExpiry!).getTime())
    .slice(0, 5);

  const repairAssets = assets.filter((a) => a.status === 'Repair');
  const todayMovements = movements.filter((m) => {
    const mDate = new Date(m.movementDate);
    return mDate.toISOString().split('T')[0] === todayStr;
  });

  const departmentDistribution = departments.map((d) => ({
    name: d.name,
    count: assets.filter((a) => a.departmentId === d.id).length,
  }));

  const statusDistribution = (['Active', 'WFH', 'Repair', 'Idle', 'Disposed'] as const).map((s) => ({
    name: s, count: statusCount(s),
  }));

  const typeDistribution = (['Desktop', 'Laptop', 'Monitor', 'Server', 'Tablet', 'Other'] as const).map((t) => ({
    name: t, count: assets.filter((a) => a.type === t).length,
  }));

  return {
    totalAssets: assets.length, activeAssets: statusCount('Active'), wfhAssets: statusCount('WFH'),
    repairAssets: repairAssets as Asset[], idleAssets: statusCount('Idle'),
    disposedAssets: statusCount('Disposed'), totalEmployees: employees.length,
    totalDepartments: departments.length, totalLicenses: licenses.length,
    activeLicenses: licenseStatusCount('Active'), expiringLicenses: licenseStatusCount('Expiring'),
    expiredLicenses: licenseStatusCount('Expired'), upcomingWarrantyExpiry,
    recentMovements: movements.slice(0, 5), recentTransfers: transfers.slice(0, 5),
    todayMovements, departmentDistribution, statusDistribution, typeDistribution,
  };
}

// ============ Notifications ============
export async function getNotifications(): Promise<AppNotification[]> {
  const [assets, licenses] = await Promise.all([getAssets(), getSoftwareLicenses()]);
  const now = Date.now();
  const DAY = 1000 * 60 * 60 * 24;
  const notifications: AppNotification[] = [];

  const warrantySoon = assets.filter((a) => {
    if (!a.warrantyExpiry || a.status === 'Disposed') return false;
    const days = Math.ceil((new Date(a.warrantyExpiry).getTime() - now) / DAY);
    return days >= 0 && days <= 90;
  }).length;
  if (warrantySoon > 0) {
    notifications.push({
      id: 'warranty',
      title: 'Warranty Expiring',
      description: `${warrantySoon} asset${warrantySoon > 1 ? 's have' : ' has'} warranty expiring within 90 days`,
      href: '/warranty',
    });
  }

  const licenseSoon = licenses.filter((l) => {
    if (l.status === 'Expiring') return true;
    if (!l.expiryDate) return false;
    const days = Math.ceil((new Date(l.expiryDate).getTime() - now) / DAY);
    return days >= 0 && days <= 30;
  }).length;
  if (licenseSoon > 0) {
    notifications.push({
      id: 'license',
      title: 'License Expiring',
      description: `${licenseSoon} software license${licenseSoon > 1 ? 's expire' : ' expires'} within 30 days`,
      href: '/licenses',
    });
  }

  const inRepair = assets.filter((a) => a.status === 'Repair').length;
  if (inRepair > 0) {
    notifications.push({
      id: 'repair',
      title: 'Asset in Repair',
      description: `${inRepair} asset${inRepair > 1 ? 's are' : ' is'} currently in repair`,
      href: '/assets/by-status',
    });
  }

  return notifications;
}

// ============ Mappers ============

function mapEmployee(r: any): Employee {
  return {
    id: r.id, name: r.name, email: r.email, departmentId: r.departmentId,
    role: r.role, phone: r.phone, status: r.status,
    createdAt: r.createdAt, updatedAt: r.updatedAt,
    department: r.department || null,
  };
}

function mapAsset(r: any): Asset {
  return {
    id: r.id, assetTag: r.assetTag, type: r.type,
    departmentId: r.departmentId, employeeId: r.employeeId,
    cpuBrand: r.cpuBrand, monitorBrand: r.monitorBrand,
    keyboardBrand: r.keyboardBrand, mouseBrand: r.mouseBrand,
    cpuSerial: r.cpuSerial, monitorSerial: r.monitorSerial,
    keyboardSerial: r.keyboardSerial, mouseSerial: r.mouseSerial,
    vendorId: r.vendorId, invoiceNumber: r.invoiceNumber,
    purchaseDate: r.purchaseDate, warrantyYears: r.warrantyYears ?? 0,
    warrantyExpiry: r.warrantyExpiry, windowsLicense: r.windowsLicense,
    msLicense: r.msLicense,
    windowsLicensePurchaseDate: r.windowsLicensePurchaseDate,
    msLicensePurchaseDate: r.msLicensePurchaseDate,
    antivirus: r.antivirus, status: r.status, notes: r.notes,
    createdAt: r.createdAt, updatedAt: r.updatedAt,
    department: r.department || null, employee: r.employee || null, vendor: r.vendor || null,
  };
}

function mapMovement(r: any): Movement {
  return {
    id: r.id, assetId: r.assetId, movementType: r.movementType,
    movementDate: r.movementDate, fromLocation: r.fromLocation,
    toLocation: r.toLocation, departmentId: r.departmentId, notes: r.notes,
    createdAt: r.createdAt, updatedAt: r.updatedAt,
    asset: r.asset || null, department: r.department || null,
  };
}

function mapTransfer(r: any): Transfer {
  return {
    id: r.id, assetId: r.assetId, transferDate: r.transferDate,
    fromDepartmentId: r.fromDepartmentId, toDepartmentId: r.toDepartmentId,
    fromEmployeeId: r.fromEmployeeId, toEmployeeId: r.toEmployeeId,
    reason: r.reason, approvedBy: r.approvedBy, handover: r.handover,
    notes: r.notes, status: r.status,
    createdAt: r.createdAt, updatedAt: r.updatedAt,
    asset: r.asset || null,
    fromDepartment: r.fromDepartment || null, toDepartment: r.toDepartment || null,
    fromEmployee: r.fromEmployee || null, toEmployee: r.toEmployee || null,
  };
}

function mapLicense(r: any): SoftwareLicense {
  return {
    id: r.id, licenseNumber: r.licenseNumber, type: r.type, edition: r.edition,
    productKey: r.productKey, assetId: r.assetId, departmentId: r.departmentId,
    employeeId: r.employeeId, vendorId: r.vendorId,
    purchaseDate: r.purchaseDate, expiryDate: r.expiryDate,
    status: r.status, notes: r.notes,
    createdAt: r.createdAt, updatedAt: r.updatedAt,
    asset: r.asset || null, department: r.department || null,
    employee: r.employee || null, vendor: r.vendor || null,
  };
}

function mapInventoryItem(r: any): InventoryItem {
  return {
    id: r.id, type: r.type, brand: r.brand, serial: r.serial,
    productKey: r.productKey, condition: r.condition,
    assignedTo: r.assignedTo, departmentId: r.departmentId, notes: r.notes,
    createdAt: r.createdAt, updatedAt: r.updatedAt,
    department: r.department || null,
  };
}
