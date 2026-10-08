import { z } from 'zod';

// Indian phone number: 10 digits starting 6-9, optional +91 / 0 / 91 prefix and
// spaces or hyphens. Empty is allowed (field stays optional).
const indianPhone = z
  .string()
  .trim()
  .refine(
    (v) => v === '' || /^(?:(?:\+?91|0)[-\s]?)?[6-9]\d{9}$/.test(v.replace(/[-\s]/g, '')),
    'Enter a valid 10-digit Indian phone number (e.g. 9876543210)',
  )
  .optional()
  .nullable();

// Data Connect returns UUIDs as 32 hex chars WITHOUT hyphens (e.g. 83f49b31...),
// which zod's .uuid() rejects. Accept both hyphenated and non-hyphenated forms.
const isId = (v: string) => /^[0-9a-f]{32}$/i.test(v.replace(/-/g, ''));
const optionalId = z.string().refine(isId, 'Invalid selection').optional().nullable();
const requiredId = (message: string) => z.string().refine(isId, message);

export const assetSchema = z.object({
  assetTag: z.string().min(1, 'Asset tag is required'),
  type: z.enum(['Desktop', 'Laptop', 'Monitor', 'Server', 'Tablet', 'Other']),
  departmentId: optionalId,
  employeeId: optionalId,
  cpuBrand: z.string().optional().nullable(),
  monitorBrand: z.string().optional().nullable(),
  keyboardBrand: z.string().optional().nullable(),
  mouseBrand: z.string().optional().nullable(),
  cpuSerial: z.string().optional().nullable(),
  monitorSerial: z.string().optional().nullable(),
  keyboardSerial: z.string().optional().nullable(),
  mouseSerial: z.string().optional().nullable(),
  macAddress: z
    .string()
    .trim()
    .refine(
      (v) => v === '' || /^([0-9a-fA-F]{2}[:-]){5}[0-9a-fA-F]{2}$/.test(v),
      'Enter a valid MAC address (e.g. 00:1A:2B:3C:4D:5E)',
    )
    .optional()
    .nullable(),
  vendorId: optionalId,
  invoiceNumber: z.string().optional().nullable(),
  purchaseDate: z.string().optional().nullable(),
  warrantyYears: z.coerce.number().min(0).max(20).default(0),
  warrantyExpiry: z.string().optional().nullable(),
  windowsLicense: z.string().optional().nullable(),
  msLicense: z.string().optional().nullable(),
  windowsLicensePurchaseDate: z.string().optional().nullable(),
  msLicensePurchaseDate: z.string().optional().nullable(),
  antivirus: z.string().optional().nullable(),
  status: z.enum(['Active', 'WFH', 'Repair', 'Idle', 'Disposed']).default('Active'),
  notes: z.string().optional().nullable(),
});

export const employeeSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  departmentId: optionalId,
  role: z.string().optional().nullable(),
  phone: indianPhone,
  status: z.enum(['Active', 'Inactive', 'On Leave']).default('Active'),
});

export const movementSchema = z.object({
  assetId: requiredId('Asset is required'),
  movementType: z.enum(['Issued', 'Returned', 'Repair', 'Disposed', 'Transfer']),
  movementDate: z.string().min(1, 'Date is required'),
  fromLocation: z.string().optional().nullable(),
  toLocation: z.string().optional().nullable(),
  departmentId: optionalId,
  notes: z.string().optional().nullable(),
});

export const transferSchema = z.object({
  assetId: requiredId('Asset is required'),
  transferDate: z.string().min(1, 'Date is required'),
  toDepartmentId: requiredId('Target department is required'),
  toEmployeeId: optionalId,
  reason: z.string().min(1, 'Reason is required'),
  approvedBy: z.string().min(1, 'Approver is required'),
  handover: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
});

export const licenseSchema = z.object({
  licenseNumber: z.string().min(1, 'License number is required'),
  type: z.string().min(1, 'Type is required'),
  edition: z.string().optional().nullable(),
  productKey: z.string().optional().nullable(),
  assetId: optionalId,
  departmentId: optionalId,
  employeeId: optionalId,
  vendorId: optionalId,
  purchaseDate: z.string().optional().nullable(),
  expiryDate: z.string().optional().nullable(),
  status: z.enum(['Active', 'Expiring', 'Expired', 'Unassigned']).default('Active'),
  notes: z.string().optional().nullable(),
});

export const vendorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  contactPerson: z.string().optional().nullable(),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
  phone: indianPhone,
  address: z.string().optional().nullable(),
});

export const inventoryItemSchema = z.object({
  type: z.string().min(1, 'Type is required'),
  brand: z.string().optional().nullable(),
  serial: z.string().optional().nullable(),
  productKey: z.string().optional().nullable(),
  condition: z.enum(['Working', 'Broken', 'Disposed']).default('Working'),
  assignedTo: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
});

export const telephoneSchema = z.object({
  extension: z.string().optional().nullable(),
  contactNumber: z.string().optional().nullable(),
  assignedTo: z.string().optional().nullable(),
  organization: z.string().optional().nullable(),
  serial: z.string().optional().nullable(),
  status: z.enum(['Working', 'Not Working', 'Spare']).default('Working'),
});

export const printerSchema = z.object({
  serial: z.string().optional().nullable(),
  brand: z.string().optional().nullable(),
  model: z.string().optional().nullable(),
  productNumber: z.string().optional().nullable(),
  assignedTo: z.string().optional().nullable(),
  status: z.enum(['Working', 'Not Working', 'Spare']).default('Working'),
});

export const departmentSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  head: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

export const adminUserSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters').max(30),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['admin', 'viewer']).default('viewer'),
});

export type AdminUserFormValues = z.infer<typeof adminUserSchema>;

export type AssetFormValues = z.infer<typeof assetSchema>;
export type EmployeeFormValues = z.infer<typeof employeeSchema>;
export type MovementFormValues = z.infer<typeof movementSchema>;
export type TransferFormValues = z.infer<typeof transferSchema>;
export type LicenseFormValues = z.infer<typeof licenseSchema>;
export type VendorFormValues = z.infer<typeof vendorSchema>;
export type InventoryItemFormValues = z.infer<typeof inventoryItemSchema>;
export type TelephoneFormValues = z.infer<typeof telephoneSchema>;
export type PrinterFormValues = z.infer<typeof printerSchema>;
export type DepartmentFormValues = z.infer<typeof departmentSchema>;
