'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { licenseSchema, type LicenseFormValues } from '@/schemas';
import { createLicenseAction, updateLicenseAction } from '@/actions';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import type { Asset, Department, Employee, Vendor, SoftwareLicense, LicenseStatus } from '@/types';

interface AddLicenseModalProps {
  open: boolean;
  onClose: () => void;
  assets: Asset[];
  departments: Department[];
  employees: Employee[];
  vendors: Vendor[];
  /** When provided, the modal edits this license instead of creating one. */
  license?: SoftwareLicense | null;
}

const LICENSE_STATUSES: LicenseStatus[] = ['Active', 'Expiring', 'Expired', 'Unassigned'];

export function AddLicenseModal({ open, onClose, assets, departments, employees, vendors, license }: AddLicenseModalProps) {
  const isEdit = !!license;
  const [loading, setLoading] = useState(false);

  const form = useForm<LicenseFormValues>({
    resolver: zodResolver(licenseSchema),
    defaultValues: { licenseNumber: '', type: '', status: 'Active' },
  });

  useEffect(() => {
    if (!open) return;
    if (license) {
      form.reset({
        licenseNumber: license.licenseNumber,
        type: license.type,
        status: license.status,
        edition: license.edition ?? '',
        productKey: license.productKey ?? '',
        assetId: license.assetId ?? undefined,
        departmentId: license.departmentId ?? undefined,
        employeeId: license.employeeId ?? undefined,
        vendorId: license.vendorId ?? undefined,
        purchaseDate: license.purchaseDate ?? '',
        expiryDate: license.expiryDate ?? '',
        notes: license.notes ?? '',
      });
    } else {
      form.reset({ licenseNumber: '', type: '', status: 'Active' });
    }
  }, [open, license]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmit = async (data: LicenseFormValues) => {
    setLoading(true);
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && value !== undefined) formData.append(key, String(value));
    });
    const result = isEdit
      ? await updateLicenseAction(license!.id, formData)
      : await createLicenseAction(formData);
    setLoading(false);

    if (result.error) {
      toast.error(isEdit ? 'Failed to update license' : 'Failed to create license', { description: result.error });
    } else {
      toast.success(isEdit ? 'License updated' : 'License created', {
        description: `${data.licenseNumber} has been ${isEdit ? 'updated' : 'added'}`,
      });
      form.reset();
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] p-0 flex flex-col">
        <DialogHeader className="px-6 pt-6 pb-4 border-b shrink-0">
          <DialogTitle>{isEdit ? 'Edit Software License' : 'Add Software License'}</DialogTitle>
          <DialogDescription className="sr-only">
            {isEdit ? 'Update this software license.' : 'Register a new software license and its assignment.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col flex-1 min-h-0">
          <div className="overflow-y-auto px-6 py-4 flex-1 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label>License Number *</Label>
              <Input {...form.register('licenseNumber')} placeholder="LIC-001" />
              {form.formState.errors.licenseNumber && (
                <p className="text-xs text-destructive">{form.formState.errors.licenseNumber.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Type *</Label>
              <Input {...form.register('type')} placeholder="Windows 11 Pro" />
              {form.formState.errors.type && (
                <p className="text-xs text-destructive">{form.formState.errors.type.message}</p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label>Edition</Label>
              <Input {...form.register('edition')} placeholder="Professional" />
            </div>
            <div className="space-y-1.5">
              <Label>Product Key</Label>
              <Input {...form.register('productKey')} placeholder="XXXXX-XXXXX-XXXXX-XXXXX-XXXXX" />
            </div>
            <div className="space-y-1.5">
              <Label>Linked Asset</Label>
              <Select value={form.watch('assetId') ?? undefined} onValueChange={(v) => form.setValue('assetId', v)}>
                <SelectTrigger><SelectValue placeholder="Select asset" /></SelectTrigger>
                <SelectContent>
                  {assets.map((a) => <SelectItem key={a.id} value={a.id}>{a.assetTag}</SelectItem>)}
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
              <Label>Purchase Date</Label>
              <Input type="date" {...form.register('purchaseDate')} />
            </div>
            <div className="space-y-1.5">
              <Label>Expiry Date</Label>
              <Input type="date" {...form.register('expiryDate')} />
            </div>
            <div className="space-y-1.5">
              <Label>Status</Label>
              <Select value={form.watch('status')} onValueChange={(v) => form.setValue('status', v as LicenseStatus)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {LICENSE_STATUSES.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Notes</Label>
            <Textarea {...form.register('notes')} placeholder="Additional notes..." rows={2} />
          </div>

          </div>

          <DialogFooter className="px-6 py-4 border-t shrink-0">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={loading}>
              {loading ? (isEdit ? 'Saving...' : 'Creating...') : isEdit ? 'Save Changes' : 'Create License'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
