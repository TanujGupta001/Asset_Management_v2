import { ConnectorConfig, DataConnect, OperationOptions, ExecuteOperationResponse } from 'firebase-admin/data-connect';

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

/** Generated Node Admin SDK operation action function for the 'CreateDepartment' Mutation. Allow users to execute without passing in DataConnect. */
export function createDepartment(dc: DataConnect, vars: CreateDepartmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateDepartmentData>>;
/** Generated Node Admin SDK operation action function for the 'CreateDepartment' Mutation. Allow users to pass in custom DataConnect instances. */
export function createDepartment(vars: CreateDepartmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateDepartmentData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateDepartment' Mutation. Allow users to execute without passing in DataConnect. */
export function updateDepartment(dc: DataConnect, vars: UpdateDepartmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateDepartmentData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateDepartment' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateDepartment(vars: UpdateDepartmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateDepartmentData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteDepartment' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteDepartment(dc: DataConnect, vars: DeleteDepartmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteDepartmentData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteDepartment' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteDepartment(vars: DeleteDepartmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteDepartmentData>>;

/** Generated Node Admin SDK operation action function for the 'CreateEmployee' Mutation. Allow users to execute without passing in DataConnect. */
export function createEmployee(dc: DataConnect, vars: CreateEmployeeVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateEmployeeData>>;
/** Generated Node Admin SDK operation action function for the 'CreateEmployee' Mutation. Allow users to pass in custom DataConnect instances. */
export function createEmployee(vars: CreateEmployeeVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateEmployeeData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateEmployee' Mutation. Allow users to execute without passing in DataConnect. */
export function updateEmployee(dc: DataConnect, vars: UpdateEmployeeVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateEmployeeData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateEmployee' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateEmployee(vars: UpdateEmployeeVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateEmployeeData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteEmployee' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteEmployee(dc: DataConnect, vars: DeleteEmployeeVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteEmployeeData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteEmployee' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteEmployee(vars: DeleteEmployeeVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteEmployeeData>>;

/** Generated Node Admin SDK operation action function for the 'CreateVendor' Mutation. Allow users to execute without passing in DataConnect. */
export function createVendor(dc: DataConnect, vars: CreateVendorVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateVendorData>>;
/** Generated Node Admin SDK operation action function for the 'CreateVendor' Mutation. Allow users to pass in custom DataConnect instances. */
export function createVendor(vars: CreateVendorVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateVendorData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteVendor' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteVendor(dc: DataConnect, vars: DeleteVendorVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteVendorData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteVendor' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteVendor(vars: DeleteVendorVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteVendorData>>;

/** Generated Node Admin SDK operation action function for the 'CreateAsset' Mutation. Allow users to execute without passing in DataConnect. */
export function createAsset(dc: DataConnect, vars: CreateAssetVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateAssetData>>;
/** Generated Node Admin SDK operation action function for the 'CreateAsset' Mutation. Allow users to pass in custom DataConnect instances. */
export function createAsset(vars: CreateAssetVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateAssetData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateAsset' Mutation. Allow users to execute without passing in DataConnect. */
export function updateAsset(dc: DataConnect, vars: UpdateAssetVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAssetData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateAsset' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateAsset(vars: UpdateAssetVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAssetData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateAssetStatus' Mutation. Allow users to execute without passing in DataConnect. */
export function updateAssetStatus(dc: DataConnect, vars: UpdateAssetStatusVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAssetStatusData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateAssetStatus' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateAssetStatus(vars: UpdateAssetStatusVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAssetStatusData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateAssetAssignment' Mutation. Allow users to execute without passing in DataConnect. */
export function updateAssetAssignment(dc: DataConnect, vars: UpdateAssetAssignmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAssetAssignmentData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateAssetAssignment' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateAssetAssignment(vars: UpdateAssetAssignmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAssetAssignmentData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteAsset' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteAsset(dc: DataConnect, vars: DeleteAssetVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteAssetData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteAsset' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteAsset(vars: DeleteAssetVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteAssetData>>;

/** Generated Node Admin SDK operation action function for the 'CreateMovement' Mutation. Allow users to execute without passing in DataConnect. */
export function createMovement(dc: DataConnect, vars: CreateMovementVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateMovementData>>;
/** Generated Node Admin SDK operation action function for the 'CreateMovement' Mutation. Allow users to pass in custom DataConnect instances. */
export function createMovement(vars: CreateMovementVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateMovementData>>;

/** Generated Node Admin SDK operation action function for the 'CreateTransfer' Mutation. Allow users to execute without passing in DataConnect. */
export function createTransfer(dc: DataConnect, vars: CreateTransferVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateTransferData>>;
/** Generated Node Admin SDK operation action function for the 'CreateTransfer' Mutation. Allow users to pass in custom DataConnect instances. */
export function createTransfer(vars: CreateTransferVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateTransferData>>;

/** Generated Node Admin SDK operation action function for the 'CreateSoftwareLicense' Mutation. Allow users to execute without passing in DataConnect. */
export function createSoftwareLicense(dc: DataConnect, vars: CreateSoftwareLicenseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateSoftwareLicenseData>>;
/** Generated Node Admin SDK operation action function for the 'CreateSoftwareLicense' Mutation. Allow users to pass in custom DataConnect instances. */
export function createSoftwareLicense(vars: CreateSoftwareLicenseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateSoftwareLicenseData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateSoftwareLicense' Mutation. Allow users to execute without passing in DataConnect. */
export function updateSoftwareLicense(dc: DataConnect, vars: UpdateSoftwareLicenseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateSoftwareLicenseData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateSoftwareLicense' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateSoftwareLicense(vars: UpdateSoftwareLicenseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateSoftwareLicenseData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteSoftwareLicense' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteSoftwareLicense(dc: DataConnect, vars: DeleteSoftwareLicenseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteSoftwareLicenseData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteSoftwareLicense' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteSoftwareLicense(vars: DeleteSoftwareLicenseVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteSoftwareLicenseData>>;

/** Generated Node Admin SDK operation action function for the 'CreateInventoryItem' Mutation. Allow users to execute without passing in DataConnect. */
export function createInventoryItem(dc: DataConnect, vars: CreateInventoryItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateInventoryItemData>>;
/** Generated Node Admin SDK operation action function for the 'CreateInventoryItem' Mutation. Allow users to pass in custom DataConnect instances. */
export function createInventoryItem(vars: CreateInventoryItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateInventoryItemData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateInventoryItem' Mutation. Allow users to execute without passing in DataConnect. */
export function updateInventoryItem(dc: DataConnect, vars: UpdateInventoryItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateInventoryItemData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateInventoryItem' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateInventoryItem(vars: UpdateInventoryItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateInventoryItemData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteInventoryItem' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteInventoryItem(dc: DataConnect, vars: DeleteInventoryItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteInventoryItemData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteInventoryItem' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteInventoryItem(vars: DeleteInventoryItemVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteInventoryItemData>>;

/** Generated Node Admin SDK operation action function for the 'CreateTelephone' Mutation. Allow users to execute without passing in DataConnect. */
export function createTelephone(dc: DataConnect, vars?: CreateTelephoneVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateTelephoneData>>;
/** Generated Node Admin SDK operation action function for the 'CreateTelephone' Mutation. Allow users to pass in custom DataConnect instances. */
export function createTelephone(vars?: CreateTelephoneVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateTelephoneData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteTelephone' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteTelephone(dc: DataConnect, vars: DeleteTelephoneVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteTelephoneData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteTelephone' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteTelephone(vars: DeleteTelephoneVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteTelephoneData>>;

/** Generated Node Admin SDK operation action function for the 'CreatePrinter' Mutation. Allow users to execute without passing in DataConnect. */
export function createPrinter(dc: DataConnect, vars?: CreatePrinterVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePrinterData>>;
/** Generated Node Admin SDK operation action function for the 'CreatePrinter' Mutation. Allow users to pass in custom DataConnect instances. */
export function createPrinter(vars?: CreatePrinterVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreatePrinterData>>;

/** Generated Node Admin SDK operation action function for the 'DeletePrinter' Mutation. Allow users to execute without passing in DataConnect. */
export function deletePrinter(dc: DataConnect, vars: DeletePrinterVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletePrinterData>>;
/** Generated Node Admin SDK operation action function for the 'DeletePrinter' Mutation. Allow users to pass in custom DataConnect instances. */
export function deletePrinter(vars: DeletePrinterVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeletePrinterData>>;

/** Generated Node Admin SDK operation action function for the 'CreateAuditLog' Mutation. Allow users to execute without passing in DataConnect. */
export function createAuditLog(dc: DataConnect, vars: CreateAuditLogVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateAuditLogData>>;
/** Generated Node Admin SDK operation action function for the 'CreateAuditLog' Mutation. Allow users to pass in custom DataConnect instances. */
export function createAuditLog(vars: CreateAuditLogVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateAuditLogData>>;

/** Generated Node Admin SDK operation action function for the 'CreateAdminUser' Mutation. Allow users to execute without passing in DataConnect. */
export function createAdminUser(dc: DataConnect, vars: CreateAdminUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateAdminUserData>>;
/** Generated Node Admin SDK operation action function for the 'CreateAdminUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function createAdminUser(vars: CreateAdminUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<CreateAdminUserData>>;

/** Generated Node Admin SDK operation action function for the 'UpdateAdminUserPassword' Mutation. Allow users to execute without passing in DataConnect. */
export function updateAdminUserPassword(dc: DataConnect, vars: UpdateAdminUserPasswordVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAdminUserPasswordData>>;
/** Generated Node Admin SDK operation action function for the 'UpdateAdminUserPassword' Mutation. Allow users to pass in custom DataConnect instances. */
export function updateAdminUserPassword(vars: UpdateAdminUserPasswordVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<UpdateAdminUserPasswordData>>;

/** Generated Node Admin SDK operation action function for the 'DeleteAdminUser' Mutation. Allow users to execute without passing in DataConnect. */
export function deleteAdminUser(dc: DataConnect, vars: DeleteAdminUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteAdminUserData>>;
/** Generated Node Admin SDK operation action function for the 'DeleteAdminUser' Mutation. Allow users to pass in custom DataConnect instances. */
export function deleteAdminUser(vars: DeleteAdminUserVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<DeleteAdminUserData>>;

/** Generated Node Admin SDK operation action function for the 'GetDepartments' Query. Allow users to execute without passing in DataConnect. */
export function getDepartments(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetDepartmentsData>>;
/** Generated Node Admin SDK operation action function for the 'GetDepartments' Query. Allow users to pass in custom DataConnect instances. */
export function getDepartments(options?: OperationOptions): Promise<ExecuteOperationResponse<GetDepartmentsData>>;

/** Generated Node Admin SDK operation action function for the 'GetEmployees' Query. Allow users to execute without passing in DataConnect. */
export function getEmployees(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetEmployeesData>>;
/** Generated Node Admin SDK operation action function for the 'GetEmployees' Query. Allow users to pass in custom DataConnect instances. */
export function getEmployees(options?: OperationOptions): Promise<ExecuteOperationResponse<GetEmployeesData>>;

/** Generated Node Admin SDK operation action function for the 'GetAvailableEmployees' Query. Allow users to execute without passing in DataConnect. */
export function getAvailableEmployees(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAvailableEmployeesData>>;
/** Generated Node Admin SDK operation action function for the 'GetAvailableEmployees' Query. Allow users to pass in custom DataConnect instances. */
export function getAvailableEmployees(options?: OperationOptions): Promise<ExecuteOperationResponse<GetAvailableEmployeesData>>;

/** Generated Node Admin SDK operation action function for the 'GetVendors' Query. Allow users to execute without passing in DataConnect. */
export function getVendors(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetVendorsData>>;
/** Generated Node Admin SDK operation action function for the 'GetVendors' Query. Allow users to pass in custom DataConnect instances. */
export function getVendors(options?: OperationOptions): Promise<ExecuteOperationResponse<GetVendorsData>>;

/** Generated Node Admin SDK operation action function for the 'GetAssets' Query. Allow users to execute without passing in DataConnect. */
export function getAssets(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssetsData>>;
/** Generated Node Admin SDK operation action function for the 'GetAssets' Query. Allow users to pass in custom DataConnect instances. */
export function getAssets(options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssetsData>>;

/** Generated Node Admin SDK operation action function for the 'GetAssetById' Query. Allow users to execute without passing in DataConnect. */
export function getAssetById(dc: DataConnect, vars: GetAssetByIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssetByIdData>>;
/** Generated Node Admin SDK operation action function for the 'GetAssetById' Query. Allow users to pass in custom DataConnect instances. */
export function getAssetById(vars: GetAssetByIdVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssetByIdData>>;

/** Generated Node Admin SDK operation action function for the 'GetAssetsByStatus' Query. Allow users to execute without passing in DataConnect. */
export function getAssetsByStatus(dc: DataConnect, vars: GetAssetsByStatusVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssetsByStatusData>>;
/** Generated Node Admin SDK operation action function for the 'GetAssetsByStatus' Query. Allow users to pass in custom DataConnect instances. */
export function getAssetsByStatus(vars: GetAssetsByStatusVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssetsByStatusData>>;

/** Generated Node Admin SDK operation action function for the 'GetAssetsByDepartment' Query. Allow users to execute without passing in DataConnect. */
export function getAssetsByDepartment(dc: DataConnect, vars: GetAssetsByDepartmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssetsByDepartmentData>>;
/** Generated Node Admin SDK operation action function for the 'GetAssetsByDepartment' Query. Allow users to pass in custom DataConnect instances. */
export function getAssetsByDepartment(vars: GetAssetsByDepartmentVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAssetsByDepartmentData>>;

/** Generated Node Admin SDK operation action function for the 'GetMovements' Query. Allow users to execute without passing in DataConnect. */
export function getMovements(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetMovementsData>>;
/** Generated Node Admin SDK operation action function for the 'GetMovements' Query. Allow users to pass in custom DataConnect instances. */
export function getMovements(options?: OperationOptions): Promise<ExecuteOperationResponse<GetMovementsData>>;

/** Generated Node Admin SDK operation action function for the 'GetRecentMovements' Query. Allow users to execute without passing in DataConnect. */
export function getRecentMovements(dc: DataConnect, vars: GetRecentMovementsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetRecentMovementsData>>;
/** Generated Node Admin SDK operation action function for the 'GetRecentMovements' Query. Allow users to pass in custom DataConnect instances. */
export function getRecentMovements(vars: GetRecentMovementsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetRecentMovementsData>>;

/** Generated Node Admin SDK operation action function for the 'GetTransfers' Query. Allow users to execute without passing in DataConnect. */
export function getTransfers(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetTransfersData>>;
/** Generated Node Admin SDK operation action function for the 'GetTransfers' Query. Allow users to pass in custom DataConnect instances. */
export function getTransfers(options?: OperationOptions): Promise<ExecuteOperationResponse<GetTransfersData>>;

/** Generated Node Admin SDK operation action function for the 'GetSoftwareLicenses' Query. Allow users to execute without passing in DataConnect. */
export function getSoftwareLicenses(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetSoftwareLicensesData>>;
/** Generated Node Admin SDK operation action function for the 'GetSoftwareLicenses' Query. Allow users to pass in custom DataConnect instances. */
export function getSoftwareLicenses(options?: OperationOptions): Promise<ExecuteOperationResponse<GetSoftwareLicensesData>>;

/** Generated Node Admin SDK operation action function for the 'GetInventoryItems' Query. Allow users to execute without passing in DataConnect. */
export function getInventoryItems(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetInventoryItemsData>>;
/** Generated Node Admin SDK operation action function for the 'GetInventoryItems' Query. Allow users to pass in custom DataConnect instances. */
export function getInventoryItems(options?: OperationOptions): Promise<ExecuteOperationResponse<GetInventoryItemsData>>;

/** Generated Node Admin SDK operation action function for the 'GetTelephones' Query. Allow users to execute without passing in DataConnect. */
export function getTelephones(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetTelephonesData>>;
/** Generated Node Admin SDK operation action function for the 'GetTelephones' Query. Allow users to pass in custom DataConnect instances. */
export function getTelephones(options?: OperationOptions): Promise<ExecuteOperationResponse<GetTelephonesData>>;

/** Generated Node Admin SDK operation action function for the 'GetPrinters' Query. Allow users to execute without passing in DataConnect. */
export function getPrinters(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetPrintersData>>;
/** Generated Node Admin SDK operation action function for the 'GetPrinters' Query. Allow users to pass in custom DataConnect instances. */
export function getPrinters(options?: OperationOptions): Promise<ExecuteOperationResponse<GetPrintersData>>;

/** Generated Node Admin SDK operation action function for the 'GetAuditLogs' Query. Allow users to execute without passing in DataConnect. */
export function getAuditLogs(dc: DataConnect, vars: GetAuditLogsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAuditLogsData>>;
/** Generated Node Admin SDK operation action function for the 'GetAuditLogs' Query. Allow users to pass in custom DataConnect instances. */
export function getAuditLogs(vars: GetAuditLogsVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAuditLogsData>>;

/** Generated Node Admin SDK operation action function for the 'GetAdminUsers' Query. Allow users to execute without passing in DataConnect. */
export function getAdminUsers(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAdminUsersData>>;
/** Generated Node Admin SDK operation action function for the 'GetAdminUsers' Query. Allow users to pass in custom DataConnect instances. */
export function getAdminUsers(options?: OperationOptions): Promise<ExecuteOperationResponse<GetAdminUsersData>>;

/** Generated Node Admin SDK operation action function for the 'GetAdminUserByUsername' Query. Allow users to execute without passing in DataConnect. */
export function getAdminUserByUsername(dc: DataConnect, vars: GetAdminUserByUsernameVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAdminUserByUsernameData>>;
/** Generated Node Admin SDK operation action function for the 'GetAdminUserByUsername' Query. Allow users to pass in custom DataConnect instances. */
export function getAdminUserByUsername(vars: GetAdminUserByUsernameVariables, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAdminUserByUsernameData>>;

/** Generated Node Admin SDK operation action function for the 'GetAvailableResources' Query. Allow users to execute without passing in DataConnect. */
export function getAvailableResources(dc: DataConnect, options?: OperationOptions): Promise<ExecuteOperationResponse<GetAvailableResourcesData>>;
/** Generated Node Admin SDK operation action function for the 'GetAvailableResources' Query. Allow users to pass in custom DataConnect instances. */
export function getAvailableResources(options?: OperationOptions): Promise<ExecuteOperationResponse<GetAvailableResourcesData>>;

