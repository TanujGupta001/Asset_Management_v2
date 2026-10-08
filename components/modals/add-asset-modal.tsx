'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { assetSchema, type AssetFormValues } from '@/schemas';
import { createAssetAction, updateAssetAction } from '@/actions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import type { Asset, Department, Employee, Vendor, AssetType, AssetStatus } from '@/types';

interface AddAssetModalProps {
  open: boolean;
  onClose: () => void;
  departments: Department[];
  employees: Employee[];
  vendors: Vendor[];
  /** When provided, the modal edits this asset instead of creating a new one. */
  asset?: Asset | null;
}

const ASSET_TYPES: AssetType[] = ['Desktop', 'Laptop', 'Monitor', 'Server', 'Tablet', 'Other'];
const ASSET_STATUSES: AssetStatus[] = ['Active', 'WFH', 'Repair', 'Idle', 'Disposed'];

export function AddAssetModal({ open, onClose, departments, employees, vendors, asset }: AddAssetModalProps) {
  const isEdit = !!asset;
  const [loading, setLoading] = useState(false);
  const [purchaseDate, setPurchaseDate] = useState('');
  const [warrantyYears, setWarrantyYears] = useState('3');

  const form = useForm<AssetFormValues>({
    resolver: zodResolver(assetSchema),
    defaultValues: {
      assetTag: '',
      type: 'Desktop',
      status: 'Active',
      warrantyYears: 3,
    },
  });

  // Prefill when editing, or reset to blank when adding. Runs whenever the modal
  // opens or the target asset changes.
  useEffect(() => {
    if (!open) return;
    if (asset) {
      form.reset({
        assetTag: asset.assetTag,
        type: asset.type,
        status: asset.status,
        departmentId: asset.departmentId ?? undefined,
        employeeId: asset.employeeId ?? undefined,
        vendorId: asset.vendorId ?? undefined,
        cpuBrand: asset.cpuBrand ?? '',
        monitorBrand: asset.monitorBrand ?? '',
        keyboardBrand: asset.keyboardBrand ?? '',
        mouseBrand: asset.mouseBrand ?? '',
        cpuSerial: asset.cpuSerial ?? '',
        monitorSerial: asset.monitorSerial ?? '',
        keyboardSerial: asset.keyboardSerial ?? '',
        mouseSerial: asset.mouseSerial ?? '',
        macAddress: asset.macAddress ?? '',
        invoiceNumber: asset.invoiceNumber ?? '',
        purchaseDate: asset.purchaseDate ?? '',
        warrantyYears: asset.warrantyYears ?? 0,
        warrantyExpiry: asset.warrantyExpiry ?? '',
        windowsLicense: asset.windowsLicense ?? '',
        msLicense: asset.msLicense ?? '',
        windowsLicensePurchaseDate: asset.windowsLicensePurchaseDate ?? '',
        msLicensePurchaseDate: asset.msLicensePurchaseDate ?? '',
        antivirus: asset.antivirus ?? '',
        notes: asset.notes ?? '',
      });
      setPurchaseDate(asset.purchaseDate ?? '');
      setWarrantyYears(String(asset.warrantyYears ?? 3));
    } else {
      form.reset({ assetTag: '', type: 'Desktop', status: 'Active', warrantyYears: 3 });
      setPurchaseDate('');
      setWarrantyYears('3');
    }
  }, [open, asset]); // eslint-disable-line react-hooks/exhaustive-deps

  const calculateWarrantyExpiry = (pDate: string, years: string) => {
    if (!pDate || !years) return '';
    const d = new Date(pDate);
    d.setFullYear(d.getFullYear() + parseInt(years, 10));
    return d.toISOString().split('T')[0];
  };

  const onInvalid = (errs: Record<string, { message?: string }>) => {
    const first = Object.values(errs)[0];
    toast.error('Please fix the form', { description: first?.message || 'Some fields are invalid' });
  };

  const onSubmit = async (data: AssetFormValues) => {
    setLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, String(value));
      }
    });

    // Auto-calculate warranty expiry
    if (data.purchaseDate && data.warrantyYears) {
      const expiry = calculateWarrantyExpiry(data.purchaseDate, String(data.warrantyYears));
      formData.set('warrantyExpiry', expiry);
    }

    // Auto-fill license purchase dates from asset purchase date
    if (data.purchaseDate) {
      if (!data.windowsLicensePurchaseDate) {
        formData.set('windowsLicensePurchaseDate', data.purchaseDate);
      }
      if (!data.msLicensePurchaseDate) {
        formData.set('msLicensePurchaseDate', data.purchaseDate);
      }
    }

    const result = isEdit
      ? await updateAssetAction(asset!.id, formData)
      : await createAssetAction(formData);
    setLoading(false);

    if (result.error) {
      toast.error(isEdit ? 'Failed to update asset' : 'Failed to create asset', { description: result.error });
    } else {
      toast.success(isEdit ? 'Asset updated' : 'Asset created', {
        description: `${data.assetTag} has been ${isEdit ? 'updated' : 'added'} successfully`,
      });
      form.reset();
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b shrink-0">
          <DialogTitle>{isEdit ? 'Edit Asset' : 'Add New Asset'}</DialogTitle>
          <DialogDescription className="sr-only">
            {isEdit ? 'Update this IT asset record.' : 'Create a new IT asset record with its details.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="flex flex-col flex-1 min-h-0">
          <div className="overflow-y-auto px-6 py-4 flex-1">
            <div className="space-y-6">
              {/* Basic Section */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-primary">Basic Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Asset Tag *</Label>
                    <Input {...form.register('assetTag')} placeholder="AST-0001" />
                    {form.formState.errors.assetTag && (
                      <p className="text-xs text-destructive">{form.formState.errors.assetTag.message}</p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <Label>Type *</Label>
                    <Select value={form.watch('type')} onValueChange={(v) => form.setValue('type', v as AssetType)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {ASSET_TYPES.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Department</Label>
                    <Select value={form.watch('departmentId') ?? undefined} onValueChange={(v) => form.setValue('departmentId', v)}>
                      <SelectTrigger><SelectValue placeholder="Select department" /></SelectTrigger>
                      <SelectContent>
                        {departments.map((d) => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Assigned To</Label>
                    <Select value={form.watch('employeeId') ?? undefined} onValueChange={(v) => form.setValue('employeeId', v)}>
                      <SelectTrigger><SelectValue placeholder="Select employee" /></SelectTrigger>
                      <SelectContent>
                        {employees.map((e) => <SelectItem key={e.id} value={e.id}>{e.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Serial Numbers Section */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-primary">Serial Numbers & Brands</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>CPU Brand</Label>
                    <Input {...form.register('cpuBrand')} placeholder="Dell OptiPlex 7090" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>CPU Serial</Label>
                    <Input {...form.register('cpuSerial')} placeholder="Serial number" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Monitor Brand</Label>
                    <Input {...form.register('monitorBrand')} placeholder="Dell P2419H" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Monitor Serial</Label>
                    <Input {...form.register('monitorSerial')} placeholder="Serial number" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Keyboard Brand</Label>
                    <Input {...form.register('keyboardBrand')} placeholder="Dell KM5221W" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Keyboard Serial</Label>
                    <Input {...form.register('keyboardSerial')} placeholder="Serial number" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Mouse Brand</Label>
                    <Input {...form.register('mouseBrand')} placeholder="Dell MS116" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Mouse Serial</Label>
                    <Input {...form.register('mouseSerial')} placeholder="Serial number" />
                  </div>
                  <div className="space-y-1.5 col-span-2">
                    <Label>MAC Address</Label>
                    <Input {...form.register('macAddress')} placeholder="00:1A:2B:3C:4D:5E" />
                    {form.formState.errors.macAddress && (
                      <p className="text-xs text-destructive">{form.formState.errors.macAddress.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Purchase Section */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-primary">Purchase & Warranty</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Vendor</Label>
                    <Select value={form.watch('vendorId') ?? undefined} onValueChange={(v) => form.setValue('vendorId', v)}>
                      <SelectTrigger><SelectValue placeholder="Select vendor" /></SelectTrigger>
                      <SelectContent>
                        {vendors.map((v) => <SelectItem key={v.id} value={v.id}>{v.name}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Invoice Number</Label>
                    <Input {...form.register('invoiceNumber')} placeholder="INV-2024-001" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Purchase Date</Label>
                    <Input
                      type="date"
                      {...form.register('purchaseDate')}
                      onChange={(e) => {
                        setPurchaseDate(e.target.value);
                        form.setValue('purchaseDate', e.target.value);
                        const expiry = calculateWarrantyExpiry(e.target.value, warrantyYears);
                        form.setValue('warrantyExpiry', expiry);
                      }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Warranty Years</Label>
                    <Input
                      type="number"
                      min="0"
                      max="20"
                      defaultValue="3"
                      {...form.register('warrantyYears')}
                      onChange={(e) => {
                        setWarrantyYears(e.target.value);
                        form.setValue('warrantyYears', parseInt(e.target.value, 10) || 0);
                        const expiry = calculateWarrantyExpiry(purchaseDate, e.target.value);
                        form.setValue('warrantyExpiry', expiry);
                      }}
                    />
                  </div>
                  <div className="space-y-1.5 col-span-2">
                    <Label>Warranty Expiry (auto-calculated)</Label>
                    <Input
                      type="date"
                      {...form.register('warrantyExpiry')}
                      readOnly
                      className="bg-muted/50"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Software Section */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-primary">Software & Licenses</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label>Windows License</Label>
                    <Input {...form.register('windowsLicense')} placeholder="WPRO-11-XXXXX" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>MS Office License</Label>
                    <Input {...form.register('msLicense')} placeholder="OFC2023-XXXXX" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Antivirus</Label>
                    <Input {...form.register('antivirus')} placeholder="Quick Heal Total Security" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Status</Label>
                    <Select value={form.watch('status')} onValueChange={(v) => form.setValue('status', v as AssetStatus)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {ASSET_STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Notes */}
              <div>
                <h3 className="text-sm font-semibold mb-3 text-primary">Notes</h3>
                <Textarea {...form.register('notes')} placeholder="Additional notes about this asset..." rows={3} />
              </div>
            </div>
          </div>

          <DialogFooter className="px-6 py-4 border-t shrink-0">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading ? (isEdit ? 'Saving...' : 'Creating...') : isEdit ? 'Save Changes' : 'Create Asset'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
