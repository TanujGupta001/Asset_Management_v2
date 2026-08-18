'use server';

import { executeGraphQL } from '@/lib/firebase';
import { getAssets, getDepartments, getMovements, getTransfers, getSoftwareLicenses, getInventoryItems, getTelephones, getPrinters } from '@/lib/services';
import { revalidatePath } from 'next/cache';

export async function getExportData() {
  const [assets, departments, movements, transfers, licenses, inventory, telephones, printers] = await Promise.all([
    getAssets(), getDepartments(), getMovements(), getTransfers(),
    getSoftwareLicenses(), getInventoryItems(), getTelephones(), getPrinters(),
  ]);
  return { assets, departments, movements, transfers, licenses, inventory, telephones, printers };
}

export interface ImportPayload {
  assets: any[];
  licenses: any[];
  movements: any[];
  transfers: any[];
  inventory: any[];
  telephones: any[];
  printers: any[];
}

export async function getAvailableResources() {
  const query = `query GetAvailableResources {
    assets(where: {status: {in: ["Idle", "Active"]}}, orderBy: [{assetTag: ASC}]) {
      id assetTag type status
      department { id name head description }
      employee { id name }
    }
    inventoryItems(where: {condition: {eq: "Working"}}, orderBy: [{type: ASC}]) {
      id type brand serial productKey condition assignedTo notes
    }
    telephones(where: {status: {eq: "Spare"}}, orderBy: [{extension: ASC}]) {
      id extension contactNumber assignedTo organization serial status
    }
  }`;
  const data = await executeGraphQL<{
    assets: any[], inventoryItems: any[], telephones: any[]
  }>(query, {}, true);

  const unassignedAssets = data.assets.filter((a) => !a.employee);
  return { assets: unassignedAssets, inventory: data.inventoryItems, phones: data.telephones };
}

export async function processImport(payload: ImportPayload) {
  const result = {
    assetsAdded: 0, assetsUpdated: 0, licensesImported: 0,
    movementsAdded: 0, transfersAdded: 0, inventoryImported: 0,
    telephonesImported: 0, printersImported: 0, errors: [] as string[],
  };

  // Assets
  for (const row of payload.assets) {
    try {
      const assetTag = row.asset_tag || row.assetTag;
      if (!assetTag) continue;
      const checkQuery = `query CheckAsset($tag: String!) { assets(where: {assetTag: {eq: $tag}}) { id } }`;
      const existing = await executeGraphQL<{ assets: any[] }>(checkQuery, { tag: assetTag }, true);

      if (existing.assets.length) {
        const mutation = `mutation UpdateAssetImport($id: UUID!, $assetTag: String!, $type: String, $cpuBrand: String, $monitorBrand: String, $keyboardBrand: String, $mouseBrand: String, $cpuSerial: String, $monitorSerial: String, $keyboardSerial: String, $mouseSerial: String, $invoiceNumber: String, $purchaseDate: Date, $warrantyYears: Int, $warrantyExpiry: Date, $windowsLicense: String, $msLicense: String, $antivirus: String, $status: String, $notes: String) {
          asset_update(key: {id: $id}, data: {assetTag: $assetTag, type: $type, cpuBrand: $cpuBrand, monitorBrand: $monitorBrand, keyboardBrand: $keyboardBrand, mouseBrand: $mouseBrand, cpuSerial: $cpuSerial, monitorSerial: $monitorSerial, keyboardSerial: $keyboardSerial, mouseSerial: $mouseSerial, invoiceNumber: $invoiceNumber, purchaseDate: $purchaseDate, warrantyYears: $warrantyYears, warrantyExpiry: $warrantyExpiry, windowsLicense: $windowsLicense, msLicense: $msLicense, antivirus: $antivirus, status: $status, notes: $notes})
        }`;
        await executeGraphQL(mutation, {
          id: existing.assets[0].id, assetTag,
          type: row.type || 'Desktop',
          cpuBrand: row.cpu_brand || row.cpuBrand || null,
          monitorBrand: row.monitor_brand || row.monitorBrand || null,
          keyboardBrand: row.keyboard_brand || row.keyboardBrand || null,
          mouseBrand: row.mouse_brand || row.mouseBrand || null,
          cpuSerial: row.cpu_serial || row.cpuSerial || null,
          monitorSerial: row.monitor_serial || row.monitorSerial || null,
          keyboardSerial: row.keyboard_serial || row.keyboardSerial || null,
          mouseSerial: row.mouse_serial || row.mouseSerial || null,
          invoiceNumber: row.invoice_number || row.invoiceNumber || null,
          purchaseDate: row.purchase_date || row.purchaseDate || null,
          warrantyYears: Number(row.warranty_years || row.warrantyYears) || 3,
          warrantyExpiry: row.warranty_expiry || row.warrantyExpiry || null,
          windowsLicense: row.windows_license || row.windowsLicense || null,
          msLicense: row.ms_license || row.msLicense || null,
          antivirus: row.antivirus || null,
          status: row.status || 'Active',
          notes: row.notes || null,
        });
        result.assetsUpdated++;
      } else {
        const mutation = `mutation CreateAssetImport($assetTag: String!, $type: String, $cpuBrand: String, $monitorBrand: String, $keyboardBrand: String, $mouseBrand: String, $cpuSerial: String, $monitorSerial: String, $keyboardSerial: String, $mouseSerial: String, $invoiceNumber: String, $purchaseDate: Date, $warrantyYears: Int, $warrantyExpiry: Date, $windowsLicense: String, $msLicense: String, $antivirus: String, $status: String, $notes: String) {
          asset_insert(data: {assetTag: $assetTag, type: $type, cpuBrand: $cpuBrand, monitorBrand: $monitorBrand, keyboardBrand: $keyboardBrand, mouseBrand: $mouseBrand, cpuSerial: $cpuSerial, monitorSerial: $monitorSerial, keyboardSerial: $keyboardSerial, mouseSerial: $mouseSerial, invoiceNumber: $invoiceNumber, purchaseDate: $purchaseDate, warrantyYears: $warrantyYears, warrantyExpiry: $warrantyExpiry, windowsLicense: $windowsLicense, msLicense: $msLicense, antivirus: $antivirus, status: $status, notes: $notes})
        }`;
        await executeGraphQL(mutation, {
          assetTag,
          type: row.type || 'Desktop',
          cpuBrand: row.cpu_brand || row.cpuBrand || null,
          monitorBrand: row.monitor_brand || row.monitorBrand || null,
          keyboardBrand: row.keyboard_brand || row.keyboardBrand || null,
          mouseBrand: row.mouse_brand || row.mouseBrand || null,
          cpuSerial: row.cpu_serial || row.cpuSerial || null,
          monitorSerial: row.monitor_serial || row.monitorSerial || null,
          keyboardSerial: row.keyboard_serial || row.keyboardSerial || null,
          mouseSerial: row.mouse_serial || row.mouseSerial || null,
          invoiceNumber: row.invoice_number || row.invoiceNumber || null,
          purchaseDate: row.purchase_date || row.purchaseDate || null,
          warrantyYears: Number(row.warranty_years || row.warrantyYears) || 3,
          warrantyExpiry: row.warranty_expiry || row.warrantyExpiry || null,
          windowsLicense: row.windows_license || row.windowsLicense || null,
          msLicense: row.ms_license || row.msLicense || null,
          antivirus: row.antivirus || null,
          status: row.status || 'Active',
          notes: row.notes || null,
        });
        result.assetsAdded++;
      }
    } catch (e) {
      result.errors.push(`Asset: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  }

  // Licenses
  for (const row of payload.licenses) {
    try {
      const productKey = row.product_key || row.productKey;
      if (productKey) {
        const checkQuery = `query CheckLicense($key: String!) { softwareLicenses(where: {productKey: {eq: $key}}) { id } }`;
        const existing = await executeGraphQL<{ softwareLicenses: any[] }>(checkQuery, { key: productKey }, true);
        if (existing.softwareLicenses.length) {
          const mutation = `mutation UpdateLicenseImport($id: UUID!, $licenseNumber: String!, $type: String!, $edition: String, $productKey: String, $purchaseDate: Date, $expiryDate: Date, $status: String, $notes: String) {
            softwareLicense_update(key: {id: $id}, data: {licenseNumber: $licenseNumber, type: $type, edition: $edition, productKey: $productKey, purchaseDate: $purchaseDate, expiryDate: $expiryDate, status: $status, notes: $notes})
          }`;
          await executeGraphQL(mutation, {
            id: existing.softwareLicenses[0].id,
            licenseNumber: row.license_number || row.licenseNumber || `LIC-${Date.now()}`,
            type: row.type || 'Unknown',
            edition: row.edition || null,
            productKey,
            purchaseDate: row.purchase_date || row.purchaseDate || null,
            expiryDate: row.expiry_date || row.expiryDate || null,
            status: row.status || 'Active',
            notes: row.notes || null,
          });
          continue;
        }
      }
      const mutation = `mutation CreateLicenseImport($licenseNumber: String!, $type: String!, $edition: String, $productKey: String, $purchaseDate: Date, $expiryDate: Date, $status: String, $notes: String) {
        softwareLicense_insert(data: {licenseNumber: $licenseNumber, type: $type, edition: $edition, productKey: $productKey, purchaseDate: $purchaseDate, expiryDate: $expiryDate, status: $status, notes: $notes})
      }`;
      await executeGraphQL(mutation, {
        licenseNumber: row.license_number || row.licenseNumber || `LIC-${Date.now()}`,
        type: row.type || 'Unknown',
        edition: row.edition || null,
        productKey: productKey || null,
        purchaseDate: row.purchase_date || row.purchaseDate || null,
        expiryDate: row.expiry_date || row.expiryDate || null,
        status: row.status || 'Active',
        notes: row.notes || null,
      });
      result.licensesImported++;
    } catch (e) {
      result.errors.push(`License: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  }

  // Movements
  for (const row of payload.movements) {
    try {
      const assetTag = row.asset_tag || row.assetTag;
      if (!assetTag) continue;
      const assetQuery = `query GetAssetByTag($tag: String!) { assets(where: {assetTag: {eq: $tag}}) { id } }`;
      const assetData = await executeGraphQL<{ assets: any[] }>(assetQuery, { tag: assetTag }, true);
      if (!assetData.assets.length) continue;
      const mutation = `mutation CreateMovementImport($assetId: UUID!, $movementType: String!, $movementDate: Timestamp, $fromLocation: String, $toLocation: String, $notes: String) {
        movement_insert(data: {assetId: $assetId, movementType: $movementType, movementDate: $movementDate, fromLocation: $fromLocation, toLocation: $toLocation, notes: $notes})
      }`;
      await executeGraphQL(mutation, {
        assetId: assetData.assets[0].id,
        movementType: row.movement_type || row.movementType || 'Issued',
        movementDate: row.movement_date || row.movementDate || new Date().toISOString(),
        fromLocation: row.from_location || row.fromLocation || null,
        toLocation: row.to_location || row.toLocation || null,
        notes: row.notes || null,
      });
      result.movementsAdded++;
    } catch (e) {
      result.errors.push(`Movement: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  }

  // Transfers
  for (const row of payload.transfers) {
    try {
      const assetTag = row.asset_tag || row.assetTag;
      if (!assetTag) continue;
      const assetQuery = `query GetAssetByTag($tag: String!) { assets(where: {assetTag: {eq: $tag}}) { id } }`;
      const assetData = await executeGraphQL<{ assets: any[] }>(assetQuery, { tag: assetTag }, true);
      if (!assetData.assets.length) continue;
      const mutation = `mutation CreateTransferImport($assetId: UUID!, $transferDate: Timestamp, $reason: String, $approvedBy: String, $handover: String, $notes: String, $status: String) {
        transfer_insert(data: {assetId: $assetId, transferDate: $transferDate, reason: $reason, approvedBy: $approvedBy, handover: $handover, notes: $notes, status: $status})
      }`;
      await executeGraphQL(mutation, {
        assetId: assetData.assets[0].id,
        transferDate: row.transfer_date || row.transferDate || new Date().toISOString(),
        reason: row.reason || null,
        approvedBy: row.approved_by || row.approvedBy || null,
        handover: row.handover || null,
        notes: row.notes || null,
        status: row.status || 'Completed',
      });
      result.transfersAdded++;
    } catch (e) {
      result.errors.push(`Transfer: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  }

  // Inventory
  for (const row of payload.inventory) {
    try {
      const mutation = `mutation CreateInventoryImport($type: String!, $brand: String, $serial: String, $productKey: String, $condition: String, $assignedTo: String, $notes: String) {
        inventoryItem_insert(data: {type: $type, brand: $brand, serial: $serial, productKey: $productKey, condition: $condition, assignedTo: $assignedTo, notes: $notes})
      }`;
      await executeGraphQL(mutation, {
        type: row.type || 'Unknown',
        brand: row.brand || null,
        serial: row.serial || null,
        productKey: row.product_key || row.productKey || null,
        condition: row.condition || 'Working',
        assignedTo: row.assigned_to || row.assignedTo || null,
        notes: row.notes || null,
      });
      result.inventoryImported++;
    } catch (e) {
      result.errors.push(`Inventory: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  }

  // Telephones
  for (const row of payload.telephones) {
    try {
      const mutation = `mutation CreateTelephoneImport($extension: String, $contactNumber: String, $assignedTo: String, $organization: String, $serial: String, $status: String) {
        telephone_insert(data: {extension: $extension, contactNumber: $contactNumber, assignedTo: $assignedTo, organization: $organization, serial: $serial, status: $status})
      }`;
      await executeGraphQL(mutation, {
        extension: row.extension || null,
        contactNumber: row.contact_number || row.contactNumber || null,
        assignedTo: row.assigned_to || row.assignedTo || null,
        organization: row.organization || null,
        serial: row.serial || null,
        status: row.status || 'Working',
      });
      result.telephonesImported++;
    } catch (e) {
      result.errors.push(`Telephone: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  }

  // Printers
  for (const row of payload.printers) {
    try {
      const mutation = `mutation CreatePrinterImport($serial: String, $brand: String, $model: String, $productNumber: String, $assignedTo: String, $status: String) {
        printer_insert(data: {serial: $serial, brand: $brand, model: $model, productNumber: $productNumber, assignedTo: $assignedTo, status: $status})
      }`;
      await executeGraphQL(mutation, {
        serial: row.serial || null,
        brand: row.brand || null,
        model: row.model || null,
        productNumber: row.product_number || row.productNumber || null,
        assignedTo: row.assigned_to || row.assignedTo || null,
        status: row.status || 'Working',
      });
      result.printersImported++;
    } catch (e) {
      result.errors.push(`Printer: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  }

  revalidatePath('/assets'); revalidatePath('/dashboard'); revalidatePath('/licenses');
  revalidatePath('/inventory'); revalidatePath('/telephones-printers');
  revalidatePath('/tracking/in-out'); revalidatePath('/tracking/transfers');

  return result;
}
