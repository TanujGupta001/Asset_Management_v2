'use server';

import { executeGraphQL } from '@/lib/firebase';
import { createAuditLog } from '@/lib/services';
import { requireAdmin, hashPassword } from '@/lib/auth-server';
import {
  assetSchema, employeeSchema, movementSchema, transferSchema,
  licenseSchema, vendorSchema, inventoryItemSchema, telephoneSchema,
  printerSchema, departmentSchema, adminUserSchema,
} from '@/schemas';
import { revalidatePath } from 'next/cache';

const STATUS_FROM_MOVEMENT: Record<string, string> = {
  Issued: 'Active', Returned: 'Idle', Repair: 'Repair',
  Disposed: 'Disposed', Transfer: 'Active',
};

// ============ Assets ============
export async function createAssetAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = assetSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const checkQuery = `query CheckAssetTag($tag: String!) { assets(where: {assetTag: {eq: $tag}}) { id } }`;
  const existing = await executeGraphQL<{ assets: any[] }>(checkQuery, { tag: parsed.data.assetTag }, true);
  if (existing.assets.length) return { error: 'Asset tag already exists' };

  const d = parsed.data;
  const mutation = `mutation CreateAsset($assetTag: String!, $type: String, $departmentId: UUID, $employeeId: UUID, $cpuBrand: String, $monitorBrand: String, $keyboardBrand: String, $mouseBrand: String, $cpuSerial: String, $monitorSerial: String, $keyboardSerial: String, $mouseSerial: String, $vendorId: UUID, $invoiceNumber: String, $purchaseDate: Date, $warrantyYears: Int, $warrantyExpiry: Date, $windowsLicense: String, $msLicense: String, $windowsLicensePurchaseDate: Date, $msLicensePurchaseDate: Date, $antivirus: String, $status: String, $notes: String) {
    asset_insert(data: {assetTag: $assetTag, type: $type, departmentId: $departmentId, employeeId: $employeeId, cpuBrand: $cpuBrand, monitorBrand: $monitorBrand, keyboardBrand: $keyboardBrand, mouseBrand: $mouseBrand, cpuSerial: $cpuSerial, monitorSerial: $monitorSerial, keyboardSerial: $keyboardSerial, mouseSerial: $mouseSerial, vendorId: $vendorId, invoiceNumber: $invoiceNumber, purchaseDate: $purchaseDate, warrantyYears: $warrantyYears, warrantyExpiry: $warrantyExpiry, windowsLicense: $windowsLicense, msLicense: $msLicense, windowsLicensePurchaseDate: $windowsLicensePurchaseDate, msLicensePurchaseDate: $msLicensePurchaseDate, antivirus: $antivirus, status: $status, notes: $notes})
  }`;

  const data = await executeGraphQL<{ asset_insert: { id: string } }>(mutation, {
    assetTag: d.assetTag, type: d.type, departmentId: d.departmentId, employeeId: d.employeeId,
    cpuBrand: d.cpuBrand, monitorBrand: d.monitorBrand, keyboardBrand: d.keyboardBrand, mouseBrand: d.mouseBrand,
    cpuSerial: d.cpuSerial, monitorSerial: d.monitorSerial, keyboardSerial: d.keyboardSerial, mouseSerial: d.mouseSerial,
    vendorId: d.vendorId, invoiceNumber: d.invoiceNumber, purchaseDate: d.purchaseDate,
    warrantyYears: d.warrantyYears, warrantyExpiry: d.warrantyExpiry,
    windowsLicense: d.windowsLicense, msLicense: d.msLicense,
    windowsLicensePurchaseDate: d.windowsLicensePurchaseDate, msLicensePurchaseDate: d.msLicensePurchaseDate,
    antivirus: d.antivirus, status: d.status, notes: d.notes,
  });

  await createAuditLog({ action: 'CREATE', entity: 'Asset', entityId: data.asset_insert.id, performedBy: _s.username, details: `Created asset ${d.assetTag}` });
  revalidatePath('/assets'); revalidatePath('/dashboard');
  return { success: true, id: data.asset_insert.id };
}

export async function updateAssetAction(id: string, formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = assetSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation UpdateAsset($id: UUID!, $assetTag: String, $type: String, $departmentId: UUID, $employeeId: UUID, $cpuBrand: String, $monitorBrand: String, $keyboardBrand: String, $mouseBrand: String, $cpuSerial: String, $monitorSerial: String, $keyboardSerial: String, $mouseSerial: String, $vendorId: UUID, $invoiceNumber: String, $purchaseDate: Date, $warrantyYears: Int, $warrantyExpiry: Date, $windowsLicense: String, $msLicense: String, $windowsLicensePurchaseDate: Date, $msLicensePurchaseDate: Date, $antivirus: String, $status: String, $notes: String) {
    asset_update(key: {id: $id}, data: {assetTag: $assetTag, type: $type, departmentId: $departmentId, employeeId: $employeeId, cpuBrand: $cpuBrand, monitorBrand: $monitorBrand, keyboardBrand: $keyboardBrand, mouseBrand: $mouseBrand, cpuSerial: $cpuSerial, monitorSerial: $monitorSerial, keyboardSerial: $keyboardSerial, mouseSerial: $mouseSerial, vendorId: $vendorId, invoiceNumber: $invoiceNumber, purchaseDate: $purchaseDate, warrantyYears: $warrantyYears, warrantyExpiry: $warrantyExpiry, windowsLicense: $windowsLicense, msLicense: $msLicense, windowsLicensePurchaseDate: $windowsLicensePurchaseDate, msLicensePurchaseDate: $msLicensePurchaseDate, antivirus: $antivirus, status: $status, notes: $notes})
  }`;

  await executeGraphQL(mutation, {
    id, assetTag: d.assetTag, type: d.type, departmentId: d.departmentId, employeeId: d.employeeId,
    cpuBrand: d.cpuBrand, monitorBrand: d.monitorBrand, keyboardBrand: d.keyboardBrand, mouseBrand: d.mouseBrand,
    cpuSerial: d.cpuSerial, monitorSerial: d.monitorSerial, keyboardSerial: d.keyboardSerial, mouseSerial: d.mouseSerial,
    vendorId: d.vendorId, invoiceNumber: d.invoiceNumber, purchaseDate: d.purchaseDate,
    warrantyYears: d.warrantyYears, warrantyExpiry: d.warrantyExpiry,
    windowsLicense: d.windowsLicense, msLicense: d.msLicense,
    windowsLicensePurchaseDate: d.windowsLicensePurchaseDate, msLicensePurchaseDate: d.msLicensePurchaseDate,
    antivirus: d.antivirus, status: d.status, notes: d.notes,
  });

  await createAuditLog({ action: 'UPDATE', entity: 'Asset', entityId: id, performedBy: _s.username, details: `Updated asset ${d.assetTag}` });
  revalidatePath('/assets'); revalidatePath('/dashboard');
  return { success: true };
}

export async function deleteAssetAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeleteAsset($id: UUID!) { asset_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  await createAuditLog({ action: 'DELETE', entity: 'Asset', entityId: id, performedBy: _s.username, details: `Deleted asset ${id}` });
  revalidatePath('/assets'); revalidatePath('/dashboard');
  return { success: true };
}

export async function bulkDeleteAssetsAction(ids: string[]) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  for (const id of ids) {
    const mutation = `mutation DeleteAsset($id: UUID!) { asset_delete(key: {id: $id}) }`;
    await executeGraphQL(mutation, { id });
  }
  await createAuditLog({ action: 'BULK_DELETE', entity: 'Asset', performedBy: _s.username, details: `Bulk deleted ${ids.length} assets` });
  revalidatePath('/assets'); revalidatePath('/dashboard');
  return { success: true };
}

// ============ Employees ============
export async function createEmployeeAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = employeeSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation CreateEmployee($name: String!, $email: String, $departmentId: UUID, $role: String, $phone: String, $status: String) {
    employee_insert(data: {name: $name, email: $email, departmentId: $departmentId, role: $role, phone: $phone, status: $status})
  }`;

  const data = await executeGraphQL<{ employee_insert: { id: string } }>(mutation, {
    name: d.name, email: d.email, departmentId: d.departmentId, role: d.role, phone: d.phone, status: d.status,
  });

  const employeeId = data.employee_insert.id;
  const assetId = formData.get('assign_asset_id') as string;
  if (assetId) {
    const updateMut = `mutation UpdateAssetAssignment($id: UUID!, $departmentId: UUID, $employeeId: UUID) {
      asset_update(key: {id: $id}, data: {departmentId: $departmentId, employeeId: $employeeId, status: "Active"})
    }`;
    await executeGraphQL(updateMut, { id: assetId, departmentId: d.departmentId, employeeId });

    const moveMut = `mutation CreateMovement($assetId: UUID!, $movementType: String!, $movementDate: Timestamp, $fromLocation: String, $toLocation: String, $departmentId: UUID, $notes: String) {
      movement_insert(data: {assetId: $assetId, movementType: $movementType, movementDate: $movementDate, fromLocation: $fromLocation, toLocation: $toLocation, departmentId: $departmentId, notes: $notes})
    }`;
    await executeGraphQL(moveMut, {
      assetId, movementType: 'Issued', movementDate: new Date().toISOString(),
      fromLocation: 'IT Stockroom', toLocation: d.name, departmentId: d.departmentId,
      notes: `Assigned during onboarding of ${d.name}`,
    });
  }

  const peripheralIds = formData.getAll('assign_peripheral_ids') as string[];
  for (const pid of peripheralIds) {
    const updateInv = `mutation UpdateInventoryItem($id: UUID!, $assignedTo: String) {
      inventoryItem_update(key: {id: $id}, data: {assignedTo: $assignedTo, condition: "Working"})
    }`;
    await executeGraphQL(updateInv, { id: pid, assignedTo: d.name });
  }

  const phoneId = formData.get('assign_phone_id') as string;
  if (phoneId) {
    const updatePhone = `mutation UpdateTelephone($id: UUID!, $assignedTo: String) {
      telephone_update(key: {id: $id}, data: {assignedTo: $assignedTo, status: "Working"})
    }`;
    await executeGraphQL(updatePhone, { id: phoneId, assignedTo: d.name });
  }

  await createAuditLog({ action: 'CREATE', entity: 'Employee', entityId: employeeId, performedBy: _s.username, details: `Onboarded employee ${d.name}` });
  revalidatePath('/assets'); revalidatePath('/dashboard');
  return { success: true, id: employeeId, assignedAsset: !!assetId };
}

export async function deleteEmployeeAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeleteEmployee($id: UUID!) { employee_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  await createAuditLog({ action: 'DELETE', entity: 'Employee', entityId: id, performedBy: _s.username, details: `Deleted employee ${id}` });
  revalidatePath('/assets'); revalidatePath('/dashboard');
  return { success: true };
}

// ============ Movements ============
export async function createMovementAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = movementSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation CreateMovement($assetId: UUID!, $movementType: String!, $movementDate: Timestamp, $fromLocation: String, $toLocation: String, $departmentId: UUID, $notes: String) {
    movement_insert(data: {assetId: $assetId, movementType: $movementType, movementDate: $movementDate, fromLocation: $fromLocation, toLocation: $toLocation, departmentId: $departmentId, notes: $notes})
  }`;

  const data = await executeGraphQL<{ movement_insert: { id: string } }>(mutation, {
    assetId: d.assetId, movementType: d.movementType, movementDate: d.movementDate,
    fromLocation: d.fromLocation, toLocation: d.toLocation, departmentId: d.departmentId, notes: d.notes,
  });

  const newStatus = STATUS_FROM_MOVEMENT[d.movementType];
  if (newStatus) {
    const updateMut = `mutation UpdateAssetStatus($id: UUID!, $status: String!) {
      asset_update(key: {id: $id}, data: {status: $status})
    }`;
    await executeGraphQL(updateMut, { id: d.assetId, status: newStatus });
  }

  await createAuditLog({ action: 'CREATE', entity: 'Movement', entityId: data.movement_insert.id, performedBy: _s.username, details: `Logged ${d.movementType} movement for asset` });
  revalidatePath('/tracking/in-out'); revalidatePath('/assets'); revalidatePath('/dashboard');
  return { success: true };
}

// ============ Transfers ============
export async function createTransferAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = transferSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const assetQuery = `query GetAssetForTransfer($id: UUID!) {
    assets(where: {id: {eq: $id}}) { id department { id name } employee { id name } }
  }`;
  const assetData = await executeGraphQL<{ assets: any[] }>(assetQuery, { id: d.assetId }, true);
  const asset = assetData.assets[0];
  if (!asset) return { error: 'Asset not found' };

  const fromDeptId = asset.department?.id || null;
  const fromEmpId = asset.employee?.id || null;

  const transferMut = `mutation CreateTransfer($assetId: UUID!, $transferDate: Timestamp, $fromDepartmentId: UUID, $toDepartmentId: UUID, $fromEmployeeId: UUID, $toEmployeeId: UUID, $reason: String, $approvedBy: String, $handover: String, $notes: String, $status: String) {
    transfer_insert(data: {assetId: $assetId, transferDate: $transferDate, fromDepartmentId: $fromDepartmentId, toDepartmentId: $toDepartmentId, fromEmployeeId: $fromEmployeeId, toEmployeeId: $toEmployeeId, reason: $reason, approvedBy: $approvedBy, handover: $handover, notes: $notes, status: $status})
  }`;

  const transferData = await executeGraphQL<{ transfer_insert: { id: string } }>(transferMut, {
    assetId: d.assetId, transferDate: d.transferDate,
    fromDepartmentId: fromDeptId, toDepartmentId: d.toDepartmentId,
    fromEmployeeId: fromEmpId, toEmployeeId: d.toEmployeeId || null,
    reason: d.reason, approvedBy: d.approvedBy, handover: d.handover, notes: d.notes, status: 'Completed',
  });

  const updateAssetMut = `mutation UpdateAssetAssignment($id: UUID!, $departmentId: UUID, $employeeId: UUID) {
    asset_update(key: {id: $id}, data: {departmentId: $departmentId, employeeId: $employeeId})
  }`;
  await executeGraphQL(updateAssetMut, {
    id: d.assetId, departmentId: d.toDepartmentId, employeeId: d.toEmployeeId || null,
  });

  const moveMut = `mutation CreateMovement($assetId: UUID!, $movementType: String!, $movementDate: Timestamp, $fromLocation: String, $toLocation: String, $departmentId: UUID, $notes: String) {
    movement_insert(data: {assetId: $assetId, movementType: $movementType, movementDate: $movementDate, fromLocation: $fromLocation, toLocation: $toLocation, departmentId: $departmentId, notes: $notes})
  }`;
  await executeGraphQL(moveMut, {
    assetId: d.assetId, movementType: 'Transfer', movementDate: d.transferDate,
    fromLocation: asset.department?.name || 'Unknown', toLocation: 'New Department',
    departmentId: d.toDepartmentId, notes: `Transferred: ${d.reason}`,
  });

  await createAuditLog({ action: 'CREATE', entity: 'Transfer', entityId: transferData.transfer_insert.id, performedBy: _s.username, details: `Transferred asset to new department` });
  revalidatePath('/tracking/transfers'); revalidatePath('/tracking/in-out'); revalidatePath('/assets'); revalidatePath('/dashboard');
  return { success: true };
}

// ============ Software Licenses ============
export async function createLicenseAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = licenseSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation CreateSoftwareLicense($licenseNumber: String!, $type: String!, $edition: String, $productKey: String, $assetId: UUID, $departmentId: UUID, $employeeId: UUID, $vendorId: UUID, $purchaseDate: Date, $expiryDate: Date, $status: String, $notes: String) {
    softwareLicense_insert(data: {licenseNumber: $licenseNumber, type: $type, edition: $edition, productKey: $productKey, assetId: $assetId, departmentId: $departmentId, employeeId: $employeeId, vendorId: $vendorId, purchaseDate: $purchaseDate, expiryDate: $expiryDate, status: $status, notes: $notes})
  }`;

  const data = await executeGraphQL<{ softwareLicense_insert: { id: string } }>(mutation, {
    licenseNumber: d.licenseNumber, type: d.type, edition: d.edition, productKey: d.productKey,
    assetId: d.assetId, departmentId: d.departmentId, employeeId: d.employeeId, vendorId: d.vendorId,
    purchaseDate: d.purchaseDate, expiryDate: d.expiryDate, status: d.status, notes: d.notes,
  });

  await createAuditLog({ action: 'CREATE', entity: 'License', entityId: data.softwareLicense_insert.id, performedBy: _s.username, details: `Created license ${d.licenseNumber}` });
  revalidatePath('/licenses'); revalidatePath('/dashboard');
  return { success: true };
}

export async function updateLicenseAction(id: string, formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = licenseSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation UpdateSoftwareLicense($id: UUID!, $licenseNumber: String, $type: String, $edition: String, $productKey: String, $assetId: UUID, $departmentId: UUID, $employeeId: UUID, $vendorId: UUID, $purchaseDate: Date, $expiryDate: Date, $status: String, $notes: String) {
    softwareLicense_update(key: {id: $id}, data: {licenseNumber: $licenseNumber, type: $type, edition: $edition, productKey: $productKey, assetId: $assetId, departmentId: $departmentId, employeeId: $employeeId, vendorId: $vendorId, purchaseDate: $purchaseDate, expiryDate: $expiryDate, status: $status, notes: $notes})
  }`;

  await executeGraphQL(mutation, {
    id, licenseNumber: d.licenseNumber, type: d.type, edition: d.edition, productKey: d.productKey,
    assetId: d.assetId, departmentId: d.departmentId, employeeId: d.employeeId, vendorId: d.vendorId,
    purchaseDate: d.purchaseDate, expiryDate: d.expiryDate, status: d.status, notes: d.notes,
  });

  await createAuditLog({ action: 'UPDATE', entity: 'License', entityId: id, performedBy: _s.username, details: `Updated license ${d.licenseNumber}` });
  revalidatePath('/licenses'); revalidatePath('/dashboard');
  return { success: true };
}

export async function deleteLicenseAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeleteSoftwareLicense($id: UUID!) { softwareLicense_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  await createAuditLog({ action: 'DELETE', entity: 'License', entityId: id, performedBy: _s.username, details: `Deleted license ${id}` });
  revalidatePath('/licenses'); revalidatePath('/dashboard');
  return { success: true };
}

// ============ Vendors ============
export async function createVendorAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = vendorSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation CreateVendor($name: String!, $contactPerson: String, $email: String, $phone: String, $address: String) {
    vendor_insert(data: {name: $name, contactPerson: $contactPerson, email: $email, phone: $phone, address: $address})
  }`;

  const data = await executeGraphQL<{ vendor_insert: { id: string } }>(mutation, {
    name: d.name, contactPerson: d.contactPerson, email: d.email, phone: d.phone, address: d.address,
  });

  await createAuditLog({ action: 'CREATE', entity: 'Vendor', entityId: data.vendor_insert.id, performedBy: _s.username, details: `Created vendor ${d.name}` });
  revalidatePath('/settings');
  return { success: true };
}

export async function deleteVendorAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeleteVendor($id: UUID!) { vendor_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  await createAuditLog({ action: 'DELETE', entity: 'Vendor', entityId: id, performedBy: _s.username, details: `Deleted vendor ${id}` });
  revalidatePath('/settings');
  return { success: true };
}

// ============ Inventory ============
export async function createInventoryItemAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = inventoryItemSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation CreateInventoryItem($type: String!, $brand: String, $serial: String, $productKey: String, $condition: String, $assignedTo: String, $notes: String) {
    inventoryItem_insert(data: {type: $type, brand: $brand, serial: $serial, productKey: $productKey, condition: $condition, assignedTo: $assignedTo, notes: $notes})
  }`;

  const data = await executeGraphQL<{ inventoryItem_insert: { id: string } }>(mutation, {
    type: d.type, brand: d.brand, serial: d.serial, productKey: d.productKey,
    condition: d.condition, assignedTo: d.assignedTo, notes: d.notes,
  });

  await createAuditLog({ action: 'CREATE', entity: 'Inventory', entityId: data.inventoryItem_insert.id, performedBy: _s.username, details: `Created inventory item ${d.type}` });
  revalidatePath('/inventory');
  return { success: true };
}

export async function updateInventoryItemAction(id: string, formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = inventoryItemSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation UpdateInventoryItem($id: UUID!, $type: String, $brand: String, $serial: String, $productKey: String, $condition: String, $assignedTo: String, $notes: String) {
    inventoryItem_update(key: {id: $id}, data: {type: $type, brand: $brand, serial: $serial, productKey: $productKey, condition: $condition, assignedTo: $assignedTo, notes: $notes})
  }`;

  await executeGraphQL(mutation, {
    id, type: d.type, brand: d.brand, serial: d.serial, productKey: d.productKey,
    condition: d.condition, assignedTo: d.assignedTo, notes: d.notes,
  });

  revalidatePath('/inventory');
  return { success: true };
}

export async function deleteInventoryItemAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeleteInventoryItem($id: UUID!) { inventoryItem_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  revalidatePath('/inventory');
  return { success: true };
}

// ============ Telephones ============
export async function createTelephoneAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = telephoneSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation CreateTelephone($extension: String, $contactNumber: String, $assignedTo: String, $organization: String, $serial: String, $status: String) {
    telephone_insert(data: {extension: $extension, contactNumber: $contactNumber, assignedTo: $assignedTo, organization: $organization, serial: $serial, status: $status})
  }`;

  const data = await executeGraphQL<{ telephone_insert: { id: string } }>(mutation, {
    extension: d.extension, contactNumber: d.contactNumber, assignedTo: d.assignedTo,
    organization: d.organization, serial: d.serial, status: d.status,
  });

  await createAuditLog({ action: 'CREATE', entity: 'Telephone', entityId: data.telephone_insert.id, performedBy: _s.username, details: `Created telephone entry` });
  revalidatePath('/telephones-printers');
  return { success: true };
}

export async function deleteTelephoneAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeleteTelephone($id: UUID!) { telephone_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  revalidatePath('/telephones-printers');
  return { success: true };
}

// ============ Printers ============
export async function createPrinterAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = printerSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation CreatePrinter($serial: String, $brand: String, $model: String, $productNumber: String, $assignedTo: String, $status: String) {
    printer_insert(data: {serial: $serial, brand: $brand, model: $model, productNumber: $productNumber, assignedTo: $assignedTo, status: $status})
  }`;

  const data = await executeGraphQL<{ printer_insert: { id: string } }>(mutation, {
    serial: d.serial, brand: d.brand, model: d.model, productNumber: d.productNumber,
    assignedTo: d.assignedTo, status: d.status,
  });

  await createAuditLog({ action: 'CREATE', entity: 'Printer', entityId: data.printer_insert.id, performedBy: _s.username, details: `Created printer entry` });
  revalidatePath('/telephones-printers');
  return { success: true };
}

export async function deletePrinterAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeletePrinter($id: UUID!) { printer_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  revalidatePath('/telephones-printers');
  return { success: true };
}

// ============ Departments ============
export async function createDepartmentAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = departmentSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const d = parsed.data;
  const mutation = `mutation CreateDepartment($name: String!, $head: String, $description: String) {
    department_insert(data: {name: $name, head: $head, description: $description})
  }`;

  const data = await executeGraphQL<{ department_insert: { id: string } }>(mutation, {
    name: d.name, head: d.head, description: d.description,
  });

  await createAuditLog({ action: 'CREATE', entity: 'Department', entityId: data.department_insert.id, performedBy: _s.username, details: `Created department ${d.name}` });
  revalidatePath('/settings'); revalidatePath('/assets');
  return { success: true };
}

export async function deleteDepartmentAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeleteDepartment($id: UUID!) { department_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  await createAuditLog({ action: 'DELETE', entity: 'Department', entityId: id, performedBy: _s.username, details: `Deleted department ${id}` });
  revalidatePath('/settings'); revalidatePath('/assets');
  return { success: true };
}

// ============ Admin Users ============
export async function createAdminUserAction(formData: FormData) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const raw = Object.fromEntries(formData.entries());
  const parsed = adminUserSchema.safeParse(raw);
  if (!parsed.success) return { error: parsed.error.issues[0]?.message || 'Invalid data' };

  const { username, password, role } = parsed.data;
  const normalizedUsername = username.trim().toLowerCase();

  const checkQuery = `query CheckUsername($username: String!) { adminUsers(where: {username: {eq: $username}}) { id } }`;
  const existing = await executeGraphQL<{ adminUsers: any[] }>(checkQuery, { username: normalizedUsername }, true);
  if (existing.adminUsers.length) return { error: 'Username already exists' };

  const mutation = `mutation CreateAdminUser($username: String!, $password: String!, $role: String) {
    adminUser_insert(data: {username: $username, password: $password, role: $role})
  }`;
  const data = await executeGraphQL<{ adminUser_insert: { id: string } }>(mutation, {
    username: normalizedUsername, password: hashPassword(password), role,
  });

  await createAuditLog({ action: 'CREATE', entity: 'User', entityId: data.adminUser_insert.id, performedBy: _s.username, details: `Created user ${normalizedUsername} (${role})` });
  revalidatePath('/settings');
  return { success: true, id: data.adminUser_insert.id };
}

export async function deleteAdminUserAction(id: string) {
  const _s = await requireAdmin();
  if (!_s) return { error: 'Unauthorized' };
  const mutation = `mutation DeleteAdminUser($id: UUID!) { adminUser_delete(key: {id: $id}) }`;
  await executeGraphQL(mutation, { id });
  await createAuditLog({ action: 'DELETE', entity: 'User', entityId: id, performedBy: _s.username, details: `Deleted user ${id}` });
  revalidatePath('/settings');
  return { success: true };
}
