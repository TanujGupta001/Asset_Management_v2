export type AssetStatus = 'Active' | 'WFH' | 'Repair' | 'Idle' | 'Disposed';
export type AssetType = 'Desktop' | 'Laptop' | 'Monitor' | 'Server' | 'Tablet' | 'Other';
export type MovementType = 'Issued' | 'Returned' | 'Repair' | 'Disposed' | 'Transfer';
export type LicenseStatus = 'Active' | 'Expiring' | 'Expired' | 'Unassigned';
export type InventoryCondition = 'Working' | 'Broken' | 'Disposed';
export type PhonePrinterStatus = 'Working' | 'Not Working' | 'Spare';
export type EmployeeStatus = 'Active' | 'Inactive' | 'On Leave';
export type TransferStatus = 'Pending' | 'Completed' | 'Rejected';

export interface Department {
  id: string;
  name: string;
  head: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string | null;
  departmentId: string | null;
  role: string | null;
  phone: string | null;
  status: EmployeeStatus;
  createdAt: string;
  updatedAt: string;
  department?: Department | null;
}

export interface Vendor {
  id: string;
  name: string;
  contactPerson: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Asset {
  id: string;
  assetTag: string;
  type: AssetType;
  departmentId: string | null;
  employeeId: string | null;
  cpuBrand: string | null;
  monitorBrand: string | null;
  keyboardBrand: string | null;
  mouseBrand: string | null;
  cpuSerial: string | null;
  monitorSerial: string | null;
  keyboardSerial: string | null;
  mouseSerial: string | null;
  vendorId: string | null;
  invoiceNumber: string | null;
  purchaseDate: string | null;
  warrantyYears: number;
  warrantyExpiry: string | null;
  windowsLicense: string | null;
  msLicense: string | null;
  windowsLicensePurchaseDate: string | null;
  msLicensePurchaseDate: string | null;
  antivirus: string | null;
  status: AssetStatus;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  department?: Department | null;
  employee?: Employee | null;
  vendor?: Vendor | null;
}

export interface Movement {
  id: string;
  assetId: string;
  movementType: MovementType;
  movementDate: string;
  fromLocation: string | null;
  toLocation: string | null;
  departmentId: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  asset?: Asset | null;
  department?: Department | null;
}

export interface Transfer {
  id: string;
  assetId: string;
  transferDate: string;
  fromDepartmentId: string | null;
  toDepartmentId: string | null;
  fromEmployeeId: string | null;
  toEmployeeId: string | null;
  reason: string | null;
  approvedBy: string | null;
  handover: string | null;
  notes: string | null;
  status: TransferStatus;
  createdAt: string;
  updatedAt: string;
  asset?: Asset | null;
  fromDepartment?: Department | null;
  toDepartment?: Department | null;
  fromEmployee?: Employee | null;
  toEmployee?: Employee | null;
}

export interface SoftwareLicense {
  id: string;
  licenseNumber: string;
  type: string;
  edition: string | null;
  productKey: string | null;
  assetId: string | null;
  departmentId: string | null;
  employeeId: string | null;
  vendorId: string | null;
  purchaseDate: string | null;
  expiryDate: string | null;
  status: LicenseStatus;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  asset?: Asset | null;
  department?: Department | null;
  employee?: Employee | null;
  vendor?: Vendor | null;
}

export interface InventoryItem {
  id: string;
  type: string;
  brand: string | null;
  serial: string | null;
  productKey: string | null;
  condition: InventoryCondition;
  assignedTo: string | null;
  departmentId: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  department?: Department | null;
}

export interface Telephone {
  id: string;
  extension: string | null;
  contactNumber: string | null;
  assignedTo: string | null;
  organization: string | null;
  serial: string | null;
  status: PhonePrinterStatus;
  createdAt: string;
  updatedAt: string;
}

export interface Printer {
  id: string;
  serial: string | null;
  brand: string | null;
  model: string | null;
  productNumber: string | null;
  assignedTo: string | null;
  status: PhonePrinterStatus;
  createdAt: string;
  updatedAt: string;
}

export interface AuditLog {
  id: string;
  action: string;
  entity: string;
  entityId: string | null;
  performedBy: string | null;
  details: string | null;
  createdAt: string;
}

export interface AdminUser {
  id: string;
  username: string;
  role: 'admin' | 'viewer';
  createdAt: string;
  updatedAt: string;
}

export interface AppNotification {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface DashboardStats {
  totalAssets: number;
  activeAssets: number;
  wfhAssets: number;
  repairAssets: number;
  idleAssets: number;
  disposedAssets: number;
  totalEmployees: number;
  totalDepartments: number;
  totalLicenses: number;
  activeLicenses: number;
  expiringLicenses: number;
  expiredLicenses: number;
  upcomingWarrantyExpiry: Asset[];
  recentMovements: (Movement & { asset?: Asset | null })[];
  recentTransfers: (Transfer & { asset?: Asset | null; fromDepartment?: Department | null; toDepartment?: Department | null })[];
  todayMovements: (Movement & { asset?: Asset | null })[];
  departmentDistribution: { name: string; count: number }[];
  statusDistribution: { name: string; count: number }[];
  typeDistribution: { name: string; count: number }[];
}
