'use client';

import { useState, useMemo } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/shared/data-table';
import { StatCard } from '@/components/shared/stat-card';
import { StatusBadge } from '@/components/shared/status-badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Phone,
  Printer,
  CheckCircle2,
  XCircle,
  PackageOpen,
  Plus,
  Trash2,
  Pencil,
  MoreHorizontal,
} from 'lucide-react';
import { toast } from 'sonner';
import type { Telephone, Printer as PrinterType } from '@/types';
import {
  deleteTelephoneAction, deletePrinterAction, createTelephoneAction, createPrinterAction,
  updateTelephoneAction, updatePrinterAction,
} from '@/actions';
import { useAuth } from '@/components/auth-provider';

interface TelephonesPrintersClientProps {
  telephones: Telephone[];
  printers: PrinterType[];
}

export function TelephonesPrintersClient({
  telephones,
  printers,
}: TelephonesPrintersClientProps) {
  const { isAdmin } = useAuth();
  const [deleteTelephoneId, setDeleteTelephoneId] = useState<string | null>(null);
  const [deletePrinterId, setDeletePrinterId] = useState<string | null>(null);
  const [showAddTelephone, setShowAddTelephone] = useState(false);
  const [showAddPrinter, setShowAddPrinter] = useState(false);
  const [editTelephone, setEditTelephone] = useState<Telephone | null>(null);
  const [editPrinter, setEditPrinter] = useState<PrinterType | null>(null);

  const telephonesByOrg = useMemo(() => {
    const groups: Record<string, Telephone[]> = {};
    for (const t of telephones) {
      const key = t.organization || 'Unassigned';
      if (!groups[key]) groups[key] = [];
      groups[key].push(t);
    }
    return groups;
  }, [telephones]);

  const telephoneStats = useMemo(
    () => ({
      working: telephones.filter((t) => t.status === 'Working').length,
      notWorking: telephones.filter((t) => t.status === 'Not Working').length,
      spare: telephones.filter((t) => t.status === 'Spare').length,
    }),
    [telephones],
  );

  const printerStats = useMemo(
    () => ({
      working: printers.filter((p) => p.status === 'Working').length,
      notWorking: printers.filter((p) => p.status === 'Not Working').length,
      spare: printers.filter((p) => p.status === 'Spare').length,
    }),
    [printers],
  );

  const handleDeleteTelephone = async () => {
    if (!deleteTelephoneId) return;
    const result = await deleteTelephoneAction(deleteTelephoneId);
    if (result.error) {
      toast.error('Delete failed', { description: result.error });
    } else {
      toast.success('Telephone deleted');
    }
    setDeleteTelephoneId(null);
  };

  const handleDeletePrinter = async () => {
    if (!deletePrinterId) return;
    const result = await deletePrinterAction(deletePrinterId);
    if (result.error) {
      toast.error('Delete failed', { description: result.error });
    } else {
      toast.success('Printer deleted');
    }
    setDeletePrinterId(null);
  };

  const telephoneColumns: ColumnDef<Telephone>[] = useMemo(
    () => [
      {
        accessorKey: 'extension',
        header: 'Extension',
        cell: ({ row }) => <span className="font-mono font-semibold text-sm">{row.original.extension || '—'}</span>,
      },
      { accessorKey: 'contactNumber', header: 'Contact', cell: ({ row }) => row.original.contactNumber || '—' },
      { accessorKey: 'assignedTo', header: 'Assigned', cell: ({ row }) => row.original.assignedTo || '—' },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      ...(isAdmin ? [{
        id: 'actions',
        header: 'Actions',
        cell: ({ row }: { row: any }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setEditTelephone(row.original)}>
                <Pencil className="w-4 h-4 mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => setDeleteTelephoneId(row.original.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      }] : []),
    ],
    [isAdmin],
  );

  const printerColumns: ColumnDef<PrinterType>[] = useMemo(
    () => [
      {
        accessorKey: 'serial',
        header: 'Serial',
        cell: ({ row }) => <span className="font-mono text-xs">{row.original.serial || '—'}</span>,
      },
      { accessorKey: 'brand', header: 'Brand', cell: ({ row }) => row.original.brand || '—' },
      { accessorKey: 'model', header: 'Model', cell: ({ row }) => row.original.model || '—' },
      {
        accessorKey: 'productNumber',
        header: 'Product Number',
        cell: ({ row }) => <span className="font-mono text-xs">{row.original.productNumber || '—'}</span>,
      },
      { accessorKey: 'assignedTo', header: 'Assigned', cell: ({ row }) => row.original.assignedTo || '—' },
      {
        accessorKey: 'status',
        header: 'Status',
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      ...(isAdmin ? [{
        id: 'actions',
        header: 'Actions',
        cell: ({ row }: { row: any }) => (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setEditPrinter(row.original)}>
                <Pencil className="w-4 h-4 mr-2" /> Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-destructive"
                onClick={() => setDeletePrinterId(row.original.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ),
      }] : []),
    ],
    [isAdmin],
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Telephones &amp; Printers</h1>
        <p className="text-muted-foreground mt-1">
          Manage telephone extensions and printer inventory
        </p>
      </div>

      <Tabs defaultValue="telephones" className="w-full">
        <TabsList>
          <TabsTrigger value="telephones">Telephones</TabsTrigger>
          <TabsTrigger value="printers">Printers</TabsTrigger>
        </TabsList>

        <TabsContent value="telephones" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              <StatCard title="Working" value={telephoneStats.working} icon={CheckCircle2} variant="success" />
              <StatCard title="Not Working" value={telephoneStats.notWorking} icon={XCircle} variant="error" />
              <StatCard title="Spare" value={telephoneStats.spare} icon={PackageOpen} variant="default" />
            </div>
            {isAdmin && (
            <Button onClick={() => setShowAddTelephone(true)}>
              <Plus className="w-4 h-4 mr-2" /> Add Telephone
            </Button>
            )}
          </div>

          {Object.entries(telephonesByOrg).map(([org, items]) => (
            <Card key={org} className="p-4">
              <div className="mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">{org}</h3>
                <span className="text-sm text-muted-foreground">({items.length})</span>
              </div>
              <DataTable
                columns={telephoneColumns}
                data={items}
                searchPlaceholder="Search telephones..."
                pageSize={10}
              />
            </Card>
          ))}

          {telephones.length === 0 && (
            <Card className="p-8">
              <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                <Phone className="w-10 h-10 mb-3 opacity-40" />
                <p>No telephones found.</p>
              </div>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="printers" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
              <StatCard title="Working" value={printerStats.working} icon={CheckCircle2} variant="success" />
              <StatCard title="Not Working" value={printerStats.notWorking} icon={XCircle} variant="error" />
              <StatCard title="Spare" value={printerStats.spare} icon={PackageOpen} variant="default" />
            </div>
            {isAdmin && (
            <Button onClick={() => setShowAddPrinter(true)}>
              <Plus className="w-4 h-4 mr-2" /> Add Printer
            </Button>
            )}
          </div>

          <Card className="p-4">
            <DataTable
              columns={printerColumns}
              data={printers}
              searchPlaceholder="Search printers..."
              pageSize={10}
            />
          </Card>

          {printers.length === 0 && (
            <Card className="p-8">
              <div className="flex flex-col items-center justify-center text-center text-muted-foreground">
                <Printer className="w-10 h-10 mb-3 opacity-40" />
                <p>No printers found.</p>
              </div>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      <AddTelephoneDialog open={showAddTelephone} onClose={() => setShowAddTelephone(false)} />
      <AddPrinterDialog open={showAddPrinter} onClose={() => setShowAddPrinter(false)} />

      <AddTelephoneDialog
        key={editTelephone?.id ?? 'edit-telephone'}
        open={!!editTelephone}
        onClose={() => setEditTelephone(null)}
        telephone={editTelephone}
      />
      <AddPrinterDialog
        key={editPrinter?.id ?? 'edit-printer'}
        open={!!editPrinter}
        onClose={() => setEditPrinter(null)}
        printer={editPrinter}
      />

      <AlertDialog open={!!deleteTelephoneId} onOpenChange={(v) => !v && setDeleteTelephoneId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Telephone?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The telephone entry will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteTelephone}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={!!deletePrinterId} onOpenChange={(v) => !v && setDeletePrinterId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Printer?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The printer entry will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeletePrinter}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

function AddTelephoneDialog({ open, onClose, telephone }: { open: boolean; onClose: () => void; telephone?: Telephone | null }) {
  const [loading, setLoading] = useState(false);
  const isEdit = !!telephone;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setLoading(true);
    const formData = new FormData(formEl);
    const result = isEdit
      ? await updateTelephoneAction(telephone!.id, formData)
      : await createTelephoneAction(formData);
    setLoading(false);
    if (result.error) {
      toast.error(isEdit ? 'Failed to update telephone' : 'Failed to add telephone', { description: result.error });
    } else {
      toast.success(isEdit ? 'Telephone updated' : 'Telephone added');
      if (!isEdit) formEl.reset();
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Edit Telephone' : 'Add Telephone'}</DialogTitle>
          <DialogDescription>
            {isEdit ? 'Update this telephone extension.' : 'Register a new telephone extension.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="extension">Extension</Label>
            <Input id="extension" name="extension" placeholder="e.g. 101" defaultValue={telephone?.extension ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactNumber">Contact Number</Label>
            <Input id="contactNumber" name="contactNumber" placeholder="e.g. +1 555-0100" defaultValue={telephone?.contactNumber ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="assignedTo">Assigned To</Label>
            <Input id="assignedTo" name="assignedTo" placeholder="Person or department" defaultValue={telephone?.assignedTo ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">Organization</Label>
            <Input id="organization" name="organization" placeholder="Organization / group" defaultValue={telephone?.organization ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="serial">Serial</Label>
            <Input id="serial" name="serial" placeholder="Serial number" defaultValue={telephone?.serial ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              defaultValue={telephone?.status ?? 'Working'}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="Working">Working</option>
              <option value="Not Working">Not Working</option>
              <option value="Spare">Spare</option>
            </select>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? (isEdit ? 'Saving...' : 'Adding...') : isEdit ? 'Save Changes' : 'Add Telephone'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

function AddPrinterDialog({ open, onClose, printer }: { open: boolean; onClose: () => void; printer?: PrinterType | null }) {
  const [loading, setLoading] = useState(false);
  const isEdit = !!printer;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    setLoading(true);
    const formData = new FormData(formEl);
    const result = isEdit
      ? await updatePrinterAction(printer!.id, formData)
      : await createPrinterAction(formData);
    setLoading(false);
    if (result.error) {
      toast.error(isEdit ? 'Failed to update printer' : 'Failed to add printer', { description: result.error });
    } else {
      toast.success(isEdit ? 'Printer updated' : 'Printer added');
      if (!isEdit) formEl.reset();
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{isEdit ? 'Edit Printer' : 'Add Printer'}</DialogTitle>
          <DialogDescription>
            {isEdit ? 'Update this printer device.' : 'Register a new printer device.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="serial">Serial</Label>
            <Input id="serial" name="serial" placeholder="Serial number" defaultValue={printer?.serial ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand">Brand</Label>
            <Input id="brand" name="brand" placeholder="e.g. HP, Canon" defaultValue={printer?.brand ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="model">Model</Label>
            <Input id="model" name="model" placeholder="Model name" defaultValue={printer?.model ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="productNumber">Product Number</Label>
            <Input id="productNumber" name="productNumber" placeholder="Product number" defaultValue={printer?.productNumber ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="assignedTo">Assigned To</Label>
            <Input id="assignedTo" name="assignedTo" placeholder="Person or department" defaultValue={printer?.assignedTo ?? ''} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              defaultValue={printer?.status ?? 'Working'}
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <option value="Working">Working</option>
              <option value="Not Working">Not Working</option>
              <option value="Spare">Spare</option>
            </select>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? (isEdit ? 'Saving...' : 'Adding...') : isEdit ? 'Save Changes' : 'Add Printer'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
