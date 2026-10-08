import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface AdminUser_Key {
  id: UUIDString;
  __typename?: 'AdminUser_Key';
}

export interface Asset_Key {
  id: UUIDString;
  __typename?: 'Asset_Key';
}

export interface AuditLog_Key {
  id: UUIDString;
  __typename?: 'AuditLog_Key';
}

export interface CreateAdminUserData {
  adminUser_insert: AdminUser_Key;
}

export interface CreateAdminUserVariables {
  username: string;
  password: string;
  role?: string | null;
}

export interface CreateAssetData {
  asset_insert: Asset_Key;
}

export interface CreateAssetVariables {
  assetTag: string;
  type?: string | null;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
  vendorId?: UUIDString | null;
  cpuBrand?: string | null;
  monitorBrand?: string | null;
  keyboardBrand?: string | null;
  mouseBrand?: string | null;
  cpuSerial?: string | null;
  monitorSerial?: string | null;
  keyboardSerial?: string | null;
  mouseSerial?: string | null;
  macAddress?: string | null;
  invoiceNumber?: string | null;
  purchaseDate?: DateString | null;
  warrantyYears?: number | null;
  warrantyExpiry?: DateString | null;
  windowsLicense?: string | null;
  msLicense?: string | null;
  windowsLicensePurchaseDate?: DateString | null;
  msLicensePurchaseDate?: DateString | null;
  antivirus?: string | null;
  status?: string | null;
  notes?: string | null;
}

export interface CreateAuditLogData {
  auditLog_insert: AuditLog_Key;
}

export interface CreateAuditLogVariables {
  action: string;
  entity: string;
  entityId?: UUIDString | null;
  performedBy?: string | null;
  details?: string | null;
}

export interface CreateDepartmentData {
  department_insert: Department_Key;
}

export interface CreateDepartmentVariables {
  name: string;
  head?: string | null;
  description?: string | null;
}

export interface CreateEmployeeData {
  employee_insert: Employee_Key;
}

export interface CreateEmployeeVariables {
  name: string;
  email?: string | null;
  departmentId?: UUIDString | null;
  role?: string | null;
  phone?: string | null;
  status?: string | null;
}

export interface CreateInventoryItemData {
  inventoryItem_insert: InventoryItem_Key;
}

export interface CreateInventoryItemVariables {
  type: string;
  brand?: string | null;
  serial?: string | null;
  productKey?: string | null;
  condition?: string | null;
  assignedTo?: string | null;
  departmentId?: UUIDString | null;
  notes?: string | null;
}

export interface CreateMovementData {
  movement_insert: Movement_Key;
}

export interface CreateMovementVariables {
  movementType: string;
  movementDate?: TimestampString | null;
  fromLocation?: string | null;
  toLocation?: string | null;
  assetId: UUIDString;
  departmentId?: UUIDString | null;
  notes?: string | null;
}

export interface CreatePrinterData {
  printer_insert: Printer_Key;
}

export interface CreatePrinterVariables {
  serial?: string | null;
  brand?: string | null;
  model?: string | null;
  productNumber?: string | null;
  assignedTo?: string | null;
  status?: string | null;
}

export interface CreateSoftwareLicenseData {
  softwareLicense_insert: SoftwareLicense_Key;
}

export interface CreateSoftwareLicenseVariables {
  licenseNumber: string;
  type: string;
  edition?: string | null;
  productKey?: string | null;
  assetId?: UUIDString | null;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
  vendorId?: UUIDString | null;
  purchaseDate?: DateString | null;
  expiryDate?: DateString | null;
  status?: string | null;
  notes?: string | null;
}

export interface CreateTelephoneData {
  telephone_insert: Telephone_Key;
}

export interface CreateTelephoneVariables {
  extension?: string | null;
  contactNumber?: string | null;
  assignedTo?: string | null;
  organization?: string | null;
  serial?: string | null;
  status?: string | null;
}

export interface CreateTransferData {
  transfer_insert: Transfer_Key;
}

export interface CreateTransferVariables {
  transferDate?: TimestampString | null;
  assetId: UUIDString;
  fromDepartmentId?: UUIDString | null;
  toDepartmentId?: UUIDString | null;
  fromEmployeeId?: UUIDString | null;
  toEmployeeId?: UUIDString | null;
  reason?: string | null;
  approvedBy?: string | null;
  handover?: string | null;
  notes?: string | null;
  status?: string | null;
}

export interface CreateVendorData {
  vendor_insert: Vendor_Key;
}

export interface CreateVendorVariables {
  name: string;
  contactPerson?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
}

export interface DeleteAdminUserData {
  adminUser_delete?: AdminUser_Key | null;
}

export interface DeleteAdminUserVariables {
  id: UUIDString;
}

export interface DeleteAssetData {
  asset_delete?: Asset_Key | null;
}

export interface DeleteAssetVariables {
  id: UUIDString;
}

export interface DeleteDepartmentData {
  department_delete?: Department_Key | null;
}

export interface DeleteDepartmentVariables {
  id: UUIDString;
}

export interface DeleteEmployeeData {
  employee_delete?: Employee_Key | null;
}

export interface DeleteEmployeeVariables {
  id: UUIDString;
}

export interface DeleteInventoryItemData {
  inventoryItem_delete?: InventoryItem_Key | null;
}

export interface DeleteInventoryItemVariables {
  id: UUIDString;
}

export interface DeletePrinterData {
  printer_delete?: Printer_Key | null;
}

export interface DeletePrinterVariables {
  id: UUIDString;
}

export interface DeleteSoftwareLicenseData {
  softwareLicense_delete?: SoftwareLicense_Key | null;
}

export interface DeleteSoftwareLicenseVariables {
  id: UUIDString;
}

export interface DeleteTelephoneData {
  telephone_delete?: Telephone_Key | null;
}

export interface DeleteTelephoneVariables {
  id: UUIDString;
}

export interface DeleteVendorData {
  vendor_delete?: Vendor_Key | null;
}

export interface DeleteVendorVariables {
  id: UUIDString;
}

export interface Department_Key {
  id: UUIDString;
  __typename?: 'Department_Key';
}

export interface Employee_Key {
  id: UUIDString;
  __typename?: 'Employee_Key';
}

export interface GetAdminUserByUsernameData {
  adminUsers: ({
    id: UUIDString;
    username: string;
    role: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & AdminUser_Key)[];
}

export interface GetAdminUserByUsernameVariables {
  username: string;
}

export interface GetAdminUsersData {
  adminUsers: ({
    id: UUIDString;
    username: string;
    role: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & AdminUser_Key)[];
}

export interface GetAssetByIdData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    cpuBrand?: string | null;
    monitorBrand?: string | null;
    keyboardBrand?: string | null;
    mouseBrand?: string | null;
    cpuSerial?: string | null;
    monitorSerial?: string | null;
    keyboardSerial?: string | null;
    mouseSerial?: string | null;
    macAddress?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: DateString | null;
    warrantyYears?: number | null;
    warrantyExpiry?: DateString | null;
    windowsLicense?: string | null;
    msLicense?: string | null;
    windowsLicensePurchaseDate?: DateString | null;
    msLicensePurchaseDate?: DateString | null;
    antivirus?: string | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & Asset_Key)[];
}

export interface GetAssetByIdVariables {
  id: UUIDString;
}

export interface GetAssetsByDepartmentData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    cpuBrand?: string | null;
    monitorBrand?: string | null;
    keyboardBrand?: string | null;
    mouseBrand?: string | null;
    cpuSerial?: string | null;
    monitorSerial?: string | null;
    keyboardSerial?: string | null;
    mouseSerial?: string | null;
    macAddress?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: DateString | null;
    warrantyYears?: number | null;
    warrantyExpiry?: DateString | null;
    windowsLicense?: string | null;
    msLicense?: string | null;
    windowsLicensePurchaseDate?: DateString | null;
    msLicensePurchaseDate?: DateString | null;
    antivirus?: string | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & Asset_Key)[];
}

export interface GetAssetsByDepartmentVariables {
  deptId: UUIDString;
}

export interface GetAssetsByStatusData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    cpuBrand?: string | null;
    monitorBrand?: string | null;
    keyboardBrand?: string | null;
    mouseBrand?: string | null;
    cpuSerial?: string | null;
    monitorSerial?: string | null;
    keyboardSerial?: string | null;
    mouseSerial?: string | null;
    macAddress?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: DateString | null;
    warrantyYears?: number | null;
    warrantyExpiry?: DateString | null;
    windowsLicense?: string | null;
    msLicense?: string | null;
    windowsLicensePurchaseDate?: DateString | null;
    msLicensePurchaseDate?: DateString | null;
    antivirus?: string | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & Asset_Key)[];
}

export interface GetAssetsByStatusVariables {
  status: string;
}

export interface GetAssetsData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    cpuBrand?: string | null;
    monitorBrand?: string | null;
    keyboardBrand?: string | null;
    mouseBrand?: string | null;
    cpuSerial?: string | null;
    monitorSerial?: string | null;
    keyboardSerial?: string | null;
    mouseSerial?: string | null;
    macAddress?: string | null;
    invoiceNumber?: string | null;
    purchaseDate?: DateString | null;
    warrantyYears?: number | null;
    warrantyExpiry?: DateString | null;
    windowsLicense?: string | null;
    msLicense?: string | null;
    windowsLicensePurchaseDate?: DateString | null;
    msLicensePurchaseDate?: DateString | null;
    antivirus?: string | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & Asset_Key)[];
}

export interface GetAuditLogsData {
  auditLogs: ({
    id: UUIDString;
    action: string;
    entity: string;
    entityId?: UUIDString | null;
    performedBy?: string | null;
    details?: string | null;
    createdAt: TimestampString;
  } & AuditLog_Key)[];
}

export interface GetAuditLogsVariables {
  limit: number;
}

export interface GetAvailableEmployeesData {
  employees: ({
    id: UUIDString;
    name: string;
    email?: string | null;
    role?: string | null;
    phone?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
  } & Employee_Key)[];
}

export interface GetAvailableResourcesData {
  assets: ({
    id: UUIDString;
    assetTag: string;
    type: string;
    status: string;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
    } & Employee_Key;
  } & Asset_Key)[];
  inventoryItems: ({
    id: UUIDString;
    type: string;
    brand?: string | null;
    serial?: string | null;
    productKey?: string | null;
    condition: string;
    assignedTo?: string | null;
    notes?: string | null;
  } & InventoryItem_Key)[];
  telephones: ({
    id: UUIDString;
    extension?: string | null;
    contactNumber?: string | null;
    assignedTo?: string | null;
    organization?: string | null;
    serial?: string | null;
    status: string;
  } & Telephone_Key)[];
}

export interface GetDepartmentsData {
  departments: ({
    id: UUIDString;
    name: string;
    head?: string | null;
    description?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Department_Key)[];
}

export interface GetEmployeesData {
  employees: ({
    id: UUIDString;
    name: string;
    email?: string | null;
    role?: string | null;
    phone?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
  } & Employee_Key)[];
}

export interface GetInventoryItemsData {
  inventoryItems: ({
    id: UUIDString;
    type: string;
    brand?: string | null;
    serial?: string | null;
    productKey?: string | null;
    condition: string;
    assignedTo?: string | null;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    department?: {
      id: UUIDString;
      name: string;
    } & Department_Key;
  } & InventoryItem_Key)[];
}

export interface GetMovementsData {
  movements: ({
    id: UUIDString;
    movementType: string;
    movementDate: TimestampString;
    fromLocation?: string | null;
    toLocation?: string | null;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    asset: {
      id: UUIDString;
      assetTag: string;
      type: string;
      status: string;
      department?: {
        id: UUIDString;
        name: string;
      } & Department_Key;
    } & Asset_Key;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
  } & Movement_Key)[];
}

export interface GetPrintersData {
  printers: ({
    id: UUIDString;
    serial?: string | null;
    brand?: string | null;
    model?: string | null;
    productNumber?: string | null;
    assignedTo?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Printer_Key)[];
}

export interface GetRecentMovementsData {
  movements: ({
    id: UUIDString;
    movementType: string;
    movementDate: TimestampString;
    fromLocation?: string | null;
    toLocation?: string | null;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    asset: {
      id: UUIDString;
      assetTag: string;
      type: string;
      status: string;
      department?: {
        id: UUIDString;
        name: string;
      } & Department_Key;
    } & Asset_Key;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
  } & Movement_Key)[];
}

export interface GetRecentMovementsVariables {
  limit: number;
}

export interface GetSoftwareLicensesData {
  softwareLicenses: ({
    id: UUIDString;
    licenseNumber: string;
    type: string;
    edition?: string | null;
    productKey?: string | null;
    purchaseDate?: DateString | null;
    expiryDate?: DateString | null;
    status: string;
    notes?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    asset?: {
      id: UUIDString;
      assetTag: string;
      type: string;
      status: string;
    } & Asset_Key;
    department?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    employee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    vendor?: {
      id: UUIDString;
      name: string;
      contactPerson?: string | null;
      email?: string | null;
      phone?: string | null;
      address?: string | null;
    } & Vendor_Key;
  } & SoftwareLicense_Key)[];
}

export interface GetTelephonesData {
  telephones: ({
    id: UUIDString;
    extension?: string | null;
    contactNumber?: string | null;
    assignedTo?: string | null;
    organization?: string | null;
    serial?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Telephone_Key)[];
}

export interface GetTransfersData {
  transfers: ({
    id: UUIDString;
    transferDate: TimestampString;
    reason?: string | null;
    approvedBy?: string | null;
    handover?: string | null;
    notes?: string | null;
    status: string;
    createdAt: TimestampString;
    updatedAt: TimestampString;
    asset: {
      id: UUIDString;
      assetTag: string;
      type: string;
      status: string;
    } & Asset_Key;
    fromDepartment?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    toDepartment?: {
      id: UUIDString;
      name: string;
      head?: string | null;
      description?: string | null;
    } & Department_Key;
    fromEmployee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
    toEmployee?: {
      id: UUIDString;
      name: string;
      email?: string | null;
      role?: string | null;
      phone?: string | null;
      status: string;
    } & Employee_Key;
  } & Transfer_Key)[];
}

export interface GetVendorsData {
  vendors: ({
    id: UUIDString;
    name: string;
    contactPerson?: string | null;
    email?: string | null;
    phone?: string | null;
    address?: string | null;
    createdAt: TimestampString;
    updatedAt: TimestampString;
  } & Vendor_Key)[];
}

export interface InventoryItem_Key {
  id: UUIDString;
  __typename?: 'InventoryItem_Key';
}

export interface Movement_Key {
  id: UUIDString;
  __typename?: 'Movement_Key';
}

export interface Printer_Key {
  id: UUIDString;
  __typename?: 'Printer_Key';
}

export interface SoftwareLicense_Key {
  id: UUIDString;
  __typename?: 'SoftwareLicense_Key';
}

export interface Telephone_Key {
  id: UUIDString;
  __typename?: 'Telephone_Key';
}

export interface Transfer_Key {
  id: UUIDString;
  __typename?: 'Transfer_Key';
}

export interface UpdateAdminUserPasswordData {
  adminUser_update?: AdminUser_Key | null;
}

export interface UpdateAdminUserPasswordVariables {
  id: UUIDString;
  password: string;
}

export interface UpdateAssetAssignmentData {
  asset_update?: Asset_Key | null;
}

export interface UpdateAssetAssignmentVariables {
  id: UUIDString;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
}

export interface UpdateAssetData {
  asset_update?: Asset_Key | null;
}

export interface UpdateAssetStatusData {
  asset_update?: Asset_Key | null;
}

export interface UpdateAssetStatusVariables {
  id: UUIDString;
  status: string;
}

export interface UpdateAssetVariables {
  id: UUIDString;
  assetTag?: string | null;
  type?: string | null;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
  vendorId?: UUIDString | null;
  cpuBrand?: string | null;
  monitorBrand?: string | null;
  keyboardBrand?: string | null;
  mouseBrand?: string | null;
  cpuSerial?: string | null;
  monitorSerial?: string | null;
  keyboardSerial?: string | null;
  mouseSerial?: string | null;
  macAddress?: string | null;
  invoiceNumber?: string | null;
  purchaseDate?: DateString | null;
  warrantyYears?: number | null;
  warrantyExpiry?: DateString | null;
  windowsLicense?: string | null;
  msLicense?: string | null;
  windowsLicensePurchaseDate?: DateString | null;
  msLicensePurchaseDate?: DateString | null;
  antivirus?: string | null;
  status?: string | null;
  notes?: string | null;
}

export interface UpdateDepartmentData {
  department_update?: Department_Key | null;
}

export interface UpdateDepartmentVariables {
  id: UUIDString;
  name?: string | null;
  head?: string | null;
  description?: string | null;
}

export interface UpdateEmployeeData {
  employee_update?: Employee_Key | null;
}

export interface UpdateEmployeeVariables {
  id: UUIDString;
  name?: string | null;
  email?: string | null;
  departmentId?: UUIDString | null;
  role?: string | null;
  phone?: string | null;
  status?: string | null;
}

export interface UpdateInventoryItemData {
  inventoryItem_update?: InventoryItem_Key | null;
}

export interface UpdateInventoryItemVariables {
  id: UUIDString;
  type?: string | null;
  brand?: string | null;
  serial?: string | null;
  productKey?: string | null;
  condition?: string | null;
  assignedTo?: string | null;
  departmentId?: UUIDString | null;
  notes?: string | null;
}

export interface UpdateSoftwareLicenseData {
  softwareLicense_update?: SoftwareLicense_Key | null;
}

export interface UpdateSoftwareLicenseVariables {
  id: UUIDString;
  licenseNumber?: string | null;
  type?: string | null;
  edition?: string | null;
  productKey?: string | null;
  assetId?: UUIDString | null;
  departmentId?: UUIDString | null;
  employeeId?: UUIDString | null;
  vendorId?: UUIDString | null;
  purchaseDate?: DateString | null;
  expiryDate?: DateString | null;
  status?: string | null;
  notes?: string | null;
}

export interface Vendor_Key {
  id: UUIDString;
  __typename?: 'Vendor_Key';
}

interface CreateDepartmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDepartmentVariables): MutationRef<CreateDepartmentData, CreateDepartmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDepartmentVariables): MutationRef<CreateDepartmentData, CreateDepartmentVariables>;
  operationName: string;
}
export const createDepartmentRef: CreateDepartmentRef;

export function createDepartment(vars: CreateDepartmentVariables): MutationPromise<CreateDepartmentData, CreateDepartmentVariables>;
export function createDepartment(dc: DataConnect, vars: CreateDepartmentVariables): MutationPromise<CreateDepartmentData, CreateDepartmentVariables>;

interface UpdateDepartmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDepartmentVariables): MutationRef<UpdateDepartmentData, UpdateDepartmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDepartmentVariables): MutationRef<UpdateDepartmentData, UpdateDepartmentVariables>;
  operationName: string;
}
export const updateDepartmentRef: UpdateDepartmentRef;

export function updateDepartment(vars: UpdateDepartmentVariables): MutationPromise<UpdateDepartmentData, UpdateDepartmentVariables>;
export function updateDepartment(dc: DataConnect, vars: UpdateDepartmentVariables): MutationPromise<UpdateDepartmentData, UpdateDepartmentVariables>;

interface DeleteDepartmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDepartmentVariables): MutationRef<DeleteDepartmentData, DeleteDepartmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteDepartmentVariables): MutationRef<DeleteDepartmentData, DeleteDepartmentVariables>;
  operationName: string;
}
export const deleteDepartmentRef: DeleteDepartmentRef;

export function deleteDepartment(vars: DeleteDepartmentVariables): MutationPromise<DeleteDepartmentData, DeleteDepartmentVariables>;
export function deleteDepartment(dc: DataConnect, vars: DeleteDepartmentVariables): MutationPromise<DeleteDepartmentData, DeleteDepartmentVariables>;

interface CreateEmployeeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateEmployeeVariables): MutationRef<CreateEmployeeData, CreateEmployeeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateEmployeeVariables): MutationRef<CreateEmployeeData, CreateEmployeeVariables>;
  operationName: string;
}
export const createEmployeeRef: CreateEmployeeRef;

export function createEmployee(vars: CreateEmployeeVariables): MutationPromise<CreateEmployeeData, CreateEmployeeVariables>;
export function createEmployee(dc: DataConnect, vars: CreateEmployeeVariables): MutationPromise<CreateEmployeeData, CreateEmployeeVariables>;

interface UpdateEmployeeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateEmployeeVariables): MutationRef<UpdateEmployeeData, UpdateEmployeeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateEmployeeVariables): MutationRef<UpdateEmployeeData, UpdateEmployeeVariables>;
  operationName: string;
}
export const updateEmployeeRef: UpdateEmployeeRef;

export function updateEmployee(vars: UpdateEmployeeVariables): MutationPromise<UpdateEmployeeData, UpdateEmployeeVariables>;
export function updateEmployee(dc: DataConnect, vars: UpdateEmployeeVariables): MutationPromise<UpdateEmployeeData, UpdateEmployeeVariables>;

interface DeleteEmployeeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteEmployeeVariables): MutationRef<DeleteEmployeeData, DeleteEmployeeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteEmployeeVariables): MutationRef<DeleteEmployeeData, DeleteEmployeeVariables>;
  operationName: string;
}
export const deleteEmployeeRef: DeleteEmployeeRef;

export function deleteEmployee(vars: DeleteEmployeeVariables): MutationPromise<DeleteEmployeeData, DeleteEmployeeVariables>;
export function deleteEmployee(dc: DataConnect, vars: DeleteEmployeeVariables): MutationPromise<DeleteEmployeeData, DeleteEmployeeVariables>;

interface CreateVendorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateVendorVariables): MutationRef<CreateVendorData, CreateVendorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateVendorVariables): MutationRef<CreateVendorData, CreateVendorVariables>;
  operationName: string;
}
export const createVendorRef: CreateVendorRef;

export function createVendor(vars: CreateVendorVariables): MutationPromise<CreateVendorData, CreateVendorVariables>;
export function createVendor(dc: DataConnect, vars: CreateVendorVariables): MutationPromise<CreateVendorData, CreateVendorVariables>;

interface DeleteVendorRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteVendorVariables): MutationRef<DeleteVendorData, DeleteVendorVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteVendorVariables): MutationRef<DeleteVendorData, DeleteVendorVariables>;
  operationName: string;
}
export const deleteVendorRef: DeleteVendorRef;

export function deleteVendor(vars: DeleteVendorVariables): MutationPromise<DeleteVendorData, DeleteVendorVariables>;
export function deleteVendor(dc: DataConnect, vars: DeleteVendorVariables): MutationPromise<DeleteVendorData, DeleteVendorVariables>;

interface CreateAssetRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAssetVariables): MutationRef<CreateAssetData, CreateAssetVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateAssetVariables): MutationRef<CreateAssetData, CreateAssetVariables>;
  operationName: string;
}
export const createAssetRef: CreateAssetRef;

export function createAsset(vars: CreateAssetVariables): MutationPromise<CreateAssetData, CreateAssetVariables>;
export function createAsset(dc: DataConnect, vars: CreateAssetVariables): MutationPromise<CreateAssetData, CreateAssetVariables>;

interface UpdateAssetRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAssetVariables): MutationRef<UpdateAssetData, UpdateAssetVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateAssetVariables): MutationRef<UpdateAssetData, UpdateAssetVariables>;
  operationName: string;
}
export const updateAssetRef: UpdateAssetRef;

export function updateAsset(vars: UpdateAssetVariables): MutationPromise<UpdateAssetData, UpdateAssetVariables>;
export function updateAsset(dc: DataConnect, vars: UpdateAssetVariables): MutationPromise<UpdateAssetData, UpdateAssetVariables>;

interface UpdateAssetStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAssetStatusVariables): MutationRef<UpdateAssetStatusData, UpdateAssetStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateAssetStatusVariables): MutationRef<UpdateAssetStatusData, UpdateAssetStatusVariables>;
  operationName: string;
}
export const updateAssetStatusRef: UpdateAssetStatusRef;

export function updateAssetStatus(vars: UpdateAssetStatusVariables): MutationPromise<UpdateAssetStatusData, UpdateAssetStatusVariables>;
export function updateAssetStatus(dc: DataConnect, vars: UpdateAssetStatusVariables): MutationPromise<UpdateAssetStatusData, UpdateAssetStatusVariables>;

interface UpdateAssetAssignmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAssetAssignmentVariables): MutationRef<UpdateAssetAssignmentData, UpdateAssetAssignmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateAssetAssignmentVariables): MutationRef<UpdateAssetAssignmentData, UpdateAssetAssignmentVariables>;
  operationName: string;
}
export const updateAssetAssignmentRef: UpdateAssetAssignmentRef;

export function updateAssetAssignment(vars: UpdateAssetAssignmentVariables): MutationPromise<UpdateAssetAssignmentData, UpdateAssetAssignmentVariables>;
export function updateAssetAssignment(dc: DataConnect, vars: UpdateAssetAssignmentVariables): MutationPromise<UpdateAssetAssignmentData, UpdateAssetAssignmentVariables>;

interface DeleteAssetRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAssetVariables): MutationRef<DeleteAssetData, DeleteAssetVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteAssetVariables): MutationRef<DeleteAssetData, DeleteAssetVariables>;
  operationName: string;
}
export const deleteAssetRef: DeleteAssetRef;

export function deleteAsset(vars: DeleteAssetVariables): MutationPromise<DeleteAssetData, DeleteAssetVariables>;
export function deleteAsset(dc: DataConnect, vars: DeleteAssetVariables): MutationPromise<DeleteAssetData, DeleteAssetVariables>;

interface CreateMovementRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMovementVariables): MutationRef<CreateMovementData, CreateMovementVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMovementVariables): MutationRef<CreateMovementData, CreateMovementVariables>;
  operationName: string;
}
export const createMovementRef: CreateMovementRef;

export function createMovement(vars: CreateMovementVariables): MutationPromise<CreateMovementData, CreateMovementVariables>;
export function createMovement(dc: DataConnect, vars: CreateMovementVariables): MutationPromise<CreateMovementData, CreateMovementVariables>;

interface CreateTransferRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateTransferVariables): MutationRef<CreateTransferData, CreateTransferVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateTransferVariables): MutationRef<CreateTransferData, CreateTransferVariables>;
  operationName: string;
}
export const createTransferRef: CreateTransferRef;

export function createTransfer(vars: CreateTransferVariables): MutationPromise<CreateTransferData, CreateTransferVariables>;
export function createTransfer(dc: DataConnect, vars: CreateTransferVariables): MutationPromise<CreateTransferData, CreateTransferVariables>;

interface CreateSoftwareLicenseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSoftwareLicenseVariables): MutationRef<CreateSoftwareLicenseData, CreateSoftwareLicenseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSoftwareLicenseVariables): MutationRef<CreateSoftwareLicenseData, CreateSoftwareLicenseVariables>;
  operationName: string;
}
export const createSoftwareLicenseRef: CreateSoftwareLicenseRef;

export function createSoftwareLicense(vars: CreateSoftwareLicenseVariables): MutationPromise<CreateSoftwareLicenseData, CreateSoftwareLicenseVariables>;
export function createSoftwareLicense(dc: DataConnect, vars: CreateSoftwareLicenseVariables): MutationPromise<CreateSoftwareLicenseData, CreateSoftwareLicenseVariables>;

interface UpdateSoftwareLicenseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSoftwareLicenseVariables): MutationRef<UpdateSoftwareLicenseData, UpdateSoftwareLicenseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSoftwareLicenseVariables): MutationRef<UpdateSoftwareLicenseData, UpdateSoftwareLicenseVariables>;
  operationName: string;
}
export const updateSoftwareLicenseRef: UpdateSoftwareLicenseRef;

export function updateSoftwareLicense(vars: UpdateSoftwareLicenseVariables): MutationPromise<UpdateSoftwareLicenseData, UpdateSoftwareLicenseVariables>;
export function updateSoftwareLicense(dc: DataConnect, vars: UpdateSoftwareLicenseVariables): MutationPromise<UpdateSoftwareLicenseData, UpdateSoftwareLicenseVariables>;

interface DeleteSoftwareLicenseRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSoftwareLicenseVariables): MutationRef<DeleteSoftwareLicenseData, DeleteSoftwareLicenseVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSoftwareLicenseVariables): MutationRef<DeleteSoftwareLicenseData, DeleteSoftwareLicenseVariables>;
  operationName: string;
}
export const deleteSoftwareLicenseRef: DeleteSoftwareLicenseRef;

export function deleteSoftwareLicense(vars: DeleteSoftwareLicenseVariables): MutationPromise<DeleteSoftwareLicenseData, DeleteSoftwareLicenseVariables>;
export function deleteSoftwareLicense(dc: DataConnect, vars: DeleteSoftwareLicenseVariables): MutationPromise<DeleteSoftwareLicenseData, DeleteSoftwareLicenseVariables>;

interface CreateInventoryItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateInventoryItemVariables): MutationRef<CreateInventoryItemData, CreateInventoryItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateInventoryItemVariables): MutationRef<CreateInventoryItemData, CreateInventoryItemVariables>;
  operationName: string;
}
export const createInventoryItemRef: CreateInventoryItemRef;

export function createInventoryItem(vars: CreateInventoryItemVariables): MutationPromise<CreateInventoryItemData, CreateInventoryItemVariables>;
export function createInventoryItem(dc: DataConnect, vars: CreateInventoryItemVariables): MutationPromise<CreateInventoryItemData, CreateInventoryItemVariables>;

interface UpdateInventoryItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateInventoryItemVariables): MutationRef<UpdateInventoryItemData, UpdateInventoryItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateInventoryItemVariables): MutationRef<UpdateInventoryItemData, UpdateInventoryItemVariables>;
  operationName: string;
}
export const updateInventoryItemRef: UpdateInventoryItemRef;

export function updateInventoryItem(vars: UpdateInventoryItemVariables): MutationPromise<UpdateInventoryItemData, UpdateInventoryItemVariables>;
export function updateInventoryItem(dc: DataConnect, vars: UpdateInventoryItemVariables): MutationPromise<UpdateInventoryItemData, UpdateInventoryItemVariables>;

interface DeleteInventoryItemRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteInventoryItemVariables): MutationRef<DeleteInventoryItemData, DeleteInventoryItemVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteInventoryItemVariables): MutationRef<DeleteInventoryItemData, DeleteInventoryItemVariables>;
  operationName: string;
}
export const deleteInventoryItemRef: DeleteInventoryItemRef;

export function deleteInventoryItem(vars: DeleteInventoryItemVariables): MutationPromise<DeleteInventoryItemData, DeleteInventoryItemVariables>;
export function deleteInventoryItem(dc: DataConnect, vars: DeleteInventoryItemVariables): MutationPromise<DeleteInventoryItemData, DeleteInventoryItemVariables>;

interface CreateTelephoneRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreateTelephoneVariables): MutationRef<CreateTelephoneData, CreateTelephoneVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: CreateTelephoneVariables): MutationRef<CreateTelephoneData, CreateTelephoneVariables>;
  operationName: string;
}
export const createTelephoneRef: CreateTelephoneRef;

export function createTelephone(vars?: CreateTelephoneVariables): MutationPromise<CreateTelephoneData, CreateTelephoneVariables>;
export function createTelephone(dc: DataConnect, vars?: CreateTelephoneVariables): MutationPromise<CreateTelephoneData, CreateTelephoneVariables>;

interface DeleteTelephoneRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteTelephoneVariables): MutationRef<DeleteTelephoneData, DeleteTelephoneVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteTelephoneVariables): MutationRef<DeleteTelephoneData, DeleteTelephoneVariables>;
  operationName: string;
}
export const deleteTelephoneRef: DeleteTelephoneRef;

export function deleteTelephone(vars: DeleteTelephoneVariables): MutationPromise<DeleteTelephoneData, DeleteTelephoneVariables>;
export function deleteTelephone(dc: DataConnect, vars: DeleteTelephoneVariables): MutationPromise<DeleteTelephoneData, DeleteTelephoneVariables>;

interface CreatePrinterRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: CreatePrinterVariables): MutationRef<CreatePrinterData, CreatePrinterVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: CreatePrinterVariables): MutationRef<CreatePrinterData, CreatePrinterVariables>;
  operationName: string;
}
export const createPrinterRef: CreatePrinterRef;

export function createPrinter(vars?: CreatePrinterVariables): MutationPromise<CreatePrinterData, CreatePrinterVariables>;
export function createPrinter(dc: DataConnect, vars?: CreatePrinterVariables): MutationPromise<CreatePrinterData, CreatePrinterVariables>;

interface DeletePrinterRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePrinterVariables): MutationRef<DeletePrinterData, DeletePrinterVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePrinterVariables): MutationRef<DeletePrinterData, DeletePrinterVariables>;
  operationName: string;
}
export const deletePrinterRef: DeletePrinterRef;

export function deletePrinter(vars: DeletePrinterVariables): MutationPromise<DeletePrinterData, DeletePrinterVariables>;
export function deletePrinter(dc: DataConnect, vars: DeletePrinterVariables): MutationPromise<DeletePrinterData, DeletePrinterVariables>;

interface CreateAuditLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAuditLogVariables): MutationRef<CreateAuditLogData, CreateAuditLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateAuditLogVariables): MutationRef<CreateAuditLogData, CreateAuditLogVariables>;
  operationName: string;
}
export const createAuditLogRef: CreateAuditLogRef;

export function createAuditLog(vars: CreateAuditLogVariables): MutationPromise<CreateAuditLogData, CreateAuditLogVariables>;
export function createAuditLog(dc: DataConnect, vars: CreateAuditLogVariables): MutationPromise<CreateAuditLogData, CreateAuditLogVariables>;

interface CreateAdminUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateAdminUserVariables): MutationRef<CreateAdminUserData, CreateAdminUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateAdminUserVariables): MutationRef<CreateAdminUserData, CreateAdminUserVariables>;
  operationName: string;
}
export const createAdminUserRef: CreateAdminUserRef;

export function createAdminUser(vars: CreateAdminUserVariables): MutationPromise<CreateAdminUserData, CreateAdminUserVariables>;
export function createAdminUser(dc: DataConnect, vars: CreateAdminUserVariables): MutationPromise<CreateAdminUserData, CreateAdminUserVariables>;

interface UpdateAdminUserPasswordRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateAdminUserPasswordVariables): MutationRef<UpdateAdminUserPasswordData, UpdateAdminUserPasswordVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateAdminUserPasswordVariables): MutationRef<UpdateAdminUserPasswordData, UpdateAdminUserPasswordVariables>;
  operationName: string;
}
export const updateAdminUserPasswordRef: UpdateAdminUserPasswordRef;

export function updateAdminUserPassword(vars: UpdateAdminUserPasswordVariables): MutationPromise<UpdateAdminUserPasswordData, UpdateAdminUserPasswordVariables>;
export function updateAdminUserPassword(dc: DataConnect, vars: UpdateAdminUserPasswordVariables): MutationPromise<UpdateAdminUserPasswordData, UpdateAdminUserPasswordVariables>;

interface DeleteAdminUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteAdminUserVariables): MutationRef<DeleteAdminUserData, DeleteAdminUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteAdminUserVariables): MutationRef<DeleteAdminUserData, DeleteAdminUserVariables>;
  operationName: string;
}
export const deleteAdminUserRef: DeleteAdminUserRef;

export function deleteAdminUser(vars: DeleteAdminUserVariables): MutationPromise<DeleteAdminUserData, DeleteAdminUserVariables>;
export function deleteAdminUser(dc: DataConnect, vars: DeleteAdminUserVariables): MutationPromise<DeleteAdminUserData, DeleteAdminUserVariables>;

interface GetDepartmentsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetDepartmentsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetDepartmentsData, undefined>;
  operationName: string;
}
export const getDepartmentsRef: GetDepartmentsRef;

export function getDepartments(options?: ExecuteQueryOptions): QueryPromise<GetDepartmentsData, undefined>;
export function getDepartments(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetDepartmentsData, undefined>;

interface GetEmployeesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetEmployeesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetEmployeesData, undefined>;
  operationName: string;
}
export const getEmployeesRef: GetEmployeesRef;

export function getEmployees(options?: ExecuteQueryOptions): QueryPromise<GetEmployeesData, undefined>;
export function getEmployees(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetEmployeesData, undefined>;

interface GetAvailableEmployeesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAvailableEmployeesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAvailableEmployeesData, undefined>;
  operationName: string;
}
export const getAvailableEmployeesRef: GetAvailableEmployeesRef;

export function getAvailableEmployees(options?: ExecuteQueryOptions): QueryPromise<GetAvailableEmployeesData, undefined>;
export function getAvailableEmployees(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAvailableEmployeesData, undefined>;

interface GetVendorsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetVendorsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetVendorsData, undefined>;
  operationName: string;
}
export const getVendorsRef: GetVendorsRef;

export function getVendors(options?: ExecuteQueryOptions): QueryPromise<GetVendorsData, undefined>;
export function getVendors(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetVendorsData, undefined>;

interface GetAssetsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAssetsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAssetsData, undefined>;
  operationName: string;
}
export const getAssetsRef: GetAssetsRef;

export function getAssets(options?: ExecuteQueryOptions): QueryPromise<GetAssetsData, undefined>;
export function getAssets(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAssetsData, undefined>;

interface GetAssetByIdRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssetByIdVariables): QueryRef<GetAssetByIdData, GetAssetByIdVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAssetByIdVariables): QueryRef<GetAssetByIdData, GetAssetByIdVariables>;
  operationName: string;
}
export const getAssetByIdRef: GetAssetByIdRef;

export function getAssetById(vars: GetAssetByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetByIdData, GetAssetByIdVariables>;
export function getAssetById(dc: DataConnect, vars: GetAssetByIdVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetByIdData, GetAssetByIdVariables>;

interface GetAssetsByStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssetsByStatusVariables): QueryRef<GetAssetsByStatusData, GetAssetsByStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAssetsByStatusVariables): QueryRef<GetAssetsByStatusData, GetAssetsByStatusVariables>;
  operationName: string;
}
export const getAssetsByStatusRef: GetAssetsByStatusRef;

export function getAssetsByStatus(vars: GetAssetsByStatusVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetsByStatusData, GetAssetsByStatusVariables>;
export function getAssetsByStatus(dc: DataConnect, vars: GetAssetsByStatusVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetsByStatusData, GetAssetsByStatusVariables>;

interface GetAssetsByDepartmentRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAssetsByDepartmentVariables): QueryRef<GetAssetsByDepartmentData, GetAssetsByDepartmentVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAssetsByDepartmentVariables): QueryRef<GetAssetsByDepartmentData, GetAssetsByDepartmentVariables>;
  operationName: string;
}
export const getAssetsByDepartmentRef: GetAssetsByDepartmentRef;

export function getAssetsByDepartment(vars: GetAssetsByDepartmentVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetsByDepartmentData, GetAssetsByDepartmentVariables>;
export function getAssetsByDepartment(dc: DataConnect, vars: GetAssetsByDepartmentVariables, options?: ExecuteQueryOptions): QueryPromise<GetAssetsByDepartmentData, GetAssetsByDepartmentVariables>;

interface GetMovementsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMovementsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMovementsData, undefined>;
  operationName: string;
}
export const getMovementsRef: GetMovementsRef;

export function getMovements(options?: ExecuteQueryOptions): QueryPromise<GetMovementsData, undefined>;
export function getMovements(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetMovementsData, undefined>;

interface GetRecentMovementsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetRecentMovementsVariables): QueryRef<GetRecentMovementsData, GetRecentMovementsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetRecentMovementsVariables): QueryRef<GetRecentMovementsData, GetRecentMovementsVariables>;
  operationName: string;
}
export const getRecentMovementsRef: GetRecentMovementsRef;

export function getRecentMovements(vars: GetRecentMovementsVariables, options?: ExecuteQueryOptions): QueryPromise<GetRecentMovementsData, GetRecentMovementsVariables>;
export function getRecentMovements(dc: DataConnect, vars: GetRecentMovementsVariables, options?: ExecuteQueryOptions): QueryPromise<GetRecentMovementsData, GetRecentMovementsVariables>;

interface GetTransfersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTransfersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetTransfersData, undefined>;
  operationName: string;
}
export const getTransfersRef: GetTransfersRef;

export function getTransfers(options?: ExecuteQueryOptions): QueryPromise<GetTransfersData, undefined>;
export function getTransfers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetTransfersData, undefined>;

interface GetSoftwareLicensesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetSoftwareLicensesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetSoftwareLicensesData, undefined>;
  operationName: string;
}
export const getSoftwareLicensesRef: GetSoftwareLicensesRef;

export function getSoftwareLicenses(options?: ExecuteQueryOptions): QueryPromise<GetSoftwareLicensesData, undefined>;
export function getSoftwareLicenses(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetSoftwareLicensesData, undefined>;

interface GetInventoryItemsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetInventoryItemsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetInventoryItemsData, undefined>;
  operationName: string;
}
export const getInventoryItemsRef: GetInventoryItemsRef;

export function getInventoryItems(options?: ExecuteQueryOptions): QueryPromise<GetInventoryItemsData, undefined>;
export function getInventoryItems(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetInventoryItemsData, undefined>;

interface GetTelephonesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTelephonesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetTelephonesData, undefined>;
  operationName: string;
}
export const getTelephonesRef: GetTelephonesRef;

export function getTelephones(options?: ExecuteQueryOptions): QueryPromise<GetTelephonesData, undefined>;
export function getTelephones(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetTelephonesData, undefined>;

interface GetPrintersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPrintersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPrintersData, undefined>;
  operationName: string;
}
export const getPrintersRef: GetPrintersRef;

export function getPrinters(options?: ExecuteQueryOptions): QueryPromise<GetPrintersData, undefined>;
export function getPrinters(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetPrintersData, undefined>;

interface GetAuditLogsRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAuditLogsVariables): QueryRef<GetAuditLogsData, GetAuditLogsVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAuditLogsVariables): QueryRef<GetAuditLogsData, GetAuditLogsVariables>;
  operationName: string;
}
export const getAuditLogsRef: GetAuditLogsRef;

export function getAuditLogs(vars: GetAuditLogsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAuditLogsData, GetAuditLogsVariables>;
export function getAuditLogs(dc: DataConnect, vars: GetAuditLogsVariables, options?: ExecuteQueryOptions): QueryPromise<GetAuditLogsData, GetAuditLogsVariables>;

interface GetAdminUsersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAdminUsersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAdminUsersData, undefined>;
  operationName: string;
}
export const getAdminUsersRef: GetAdminUsersRef;

export function getAdminUsers(options?: ExecuteQueryOptions): QueryPromise<GetAdminUsersData, undefined>;
export function getAdminUsers(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAdminUsersData, undefined>;

interface GetAdminUserByUsernameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetAdminUserByUsernameVariables): QueryRef<GetAdminUserByUsernameData, GetAdminUserByUsernameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetAdminUserByUsernameVariables): QueryRef<GetAdminUserByUsernameData, GetAdminUserByUsernameVariables>;
  operationName: string;
}
export const getAdminUserByUsernameRef: GetAdminUserByUsernameRef;

export function getAdminUserByUsername(vars: GetAdminUserByUsernameVariables, options?: ExecuteQueryOptions): QueryPromise<GetAdminUserByUsernameData, GetAdminUserByUsernameVariables>;
export function getAdminUserByUsername(dc: DataConnect, vars: GetAdminUserByUsernameVariables, options?: ExecuteQueryOptions): QueryPromise<GetAdminUserByUsernameData, GetAdminUserByUsernameVariables>;

interface GetAvailableResourcesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetAvailableResourcesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetAvailableResourcesData, undefined>;
  operationName: string;
}
export const getAvailableResourcesRef: GetAvailableResourcesRef;

export function getAvailableResources(options?: ExecuteQueryOptions): QueryPromise<GetAvailableResourcesData, undefined>;
export function getAvailableResources(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetAvailableResourcesData, undefined>;

