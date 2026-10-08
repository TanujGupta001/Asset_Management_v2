'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/components/shared/data-table';
import { StatCard } from '@/components/shared/stat-card';
import { StatusBadge, WarrantyBadge } from '@/components/shared/status-badge';
import { AddAssetModal } from '@/components/modals/add-asset-modal';
import { MovementModal } from '@/components/modals/movement-modal';
import { TransferModal } from '@/components/modals/transfer-modal';
import { AddEmployeeModal } from '@/components/modals/add-employee-modal';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
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
  Plus,
  UserPlus,
  FileSpreadsheet,
  Download,
  MoreHorizontal,
  Pencil,
  ArrowLeftRight,
  ArrowUpDown,
  Trash2,
  Package,
  CheckCircle2,
  Home,
  Wrench,
  Ban,
} from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { toast } from 'sonner';
import type { Asset, Department, Employee, Vendor } from '@/types';
import { bulkDeleteAssetsAction, deleteAssetAction } from '@/actions';
import { useAuth } from '@/components/auth-provider';

interface AssetsClientProps {
  assets: Asset[];
  departments: Department[];
  employees: Employee[];
  vendors: Vendor[];
}

export function AssetsClient({ assets, departments, employees, vendors }: AssetsClientProps) {
  const searchParams = useSearchParams();
  const { isAdmin } = useAuth();
  const [showAddAsset, setShowAddAsset] = useState(false);
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [showMovement, setShowMovement] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [movementAssetId, setMovementAssetId] = useState<string>();
  const [transferAssetId, setTransferAssetId] = useState<string>();
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [editAsset, setEditAsset] = useState<Asset | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [deptFilter, setDeptFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setSearchQuery(q);
    const action = searchParams.get('action');
    if (action === 'add' && isAdmin) setShowAddAsset(true);
    if (action === 'add-employee' && isAdmin) setShowAddEmployee(true);
  }, [searchParams]);

  const filteredAssets = useMemo(() => {
    return assets.filter((a) => {
      if (statusFilter !== 'all' && a.status !== statusFilter) return false;
      if (deptFilter !== 'all' && a.departmentId !== deptFilter) return false;
      if (typeFilter !== 'all' && a.type !== typeFilter) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return (
          a.assetTag.toLowerCase().includes(q) ||
          a.cpuSerial?.toLowerCase().includes(q) ||
          a.monitorSerial?.toLowerCase().includes(q) ||
          a.employee?.name?.toLowerCase().includes(q) ||
          a.department?.name?.toLowerCase().includes(q) ||
          a.vendor?.name?.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [assets, statusFilter, deptFilter, typeFilter, searchQuery]);

  const handleExportExcel = async () => {
    const XLSX = await import('xlsx');
    const data = filteredAssets.map((a) => ({
      'Asset Tag': a.assetTag,
      'Type': a.type,
      'Department': a.department?.name || '',
      'CPU Brand': a.cpuBrand || '',
      'CPU Serial': a.cpuSerial || '',
      'Monitor Brand': a.monitorBrand || '',
      'Monitor Serial': a.monitorSerial || '',
      'Keyboard Brand': a.keyboardBrand || '',
      'Keyboard Serial': a.keyboardSerial || '',
      'Mouse Brand': a.mouseBrand || '',
      'Mouse Serial': a.mouseSerial || '',
      'Vendor': a.vendor?.name || '',
      'Invoice Number': a.invoiceNumber || '',
      'Purchase Date': a.purchaseDate || '',
      'Warranty Years': a.warrantyYears,
      'Warranty Expiry': a.warrantyExpiry || '',
      'Windows License': a.windowsLicense || '',
      'MS License': a.msLicense || '',
      'Antivirus': a.antivirus || '',
      'Status': a.status,
      'Issued To': a.employee?.name || '',
      'Notes': a.notes || '',
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Assets');
    XLSX.writeFile(wb, `assets_export_${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
    toast.success('Export successful', { description: `${filteredAssets.length} assets exported to Excel` });
  };

  const handleExportCSV = () => {
    const headers = ['Asset Tag', 'Type', 'Department', 'CPU Serial', 'Monitor Serial', 'Keyboard', 'Mouse', 'Vendor', 'Purchase Date', 'Warranty Expiry', 'Windows License', 'MS License', 'Antivirus', 'Status', 'Issued To'];
    const rows = filteredAssets.map((a) => [
      a.assetTag, a.type, a.department?.name || '', a.cpuSerial || '', a.monitorSerial || '',
      a.keyboardBrand || '', a.mouseBrand || '', a.vendor?.name || '', a.purchaseDate || '',
      a.warrantyExpiry || '', a.windowsLicense || '', a.msLicense || '', a.antivirus || '',
      a.status, a.employee?.name || '',
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `assets_export_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success('CSV exported', { description: `${filteredAssets.length} assets exported` });
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    const result = await deleteAssetAction(deleteId);
    if (result.error) {
      toast.error('Delete failed', { description: result.error });
    } else {
      toast.success('Asset deleted');
    }
    setDeleteId(null);
  };

  const columns: ColumnDef<Asset>[] = useMemo(() => [
    {
      accessorKey: 'assetTag',
      header: 'Asset Tag',
      cell: ({ row }) => <span className="font-mono font-semibold text-sm">{row.original.assetTag}</span>,
    },
    { accessorKey: 'type', header: 'Type' },
    {
      accessorKey: 'department',
      header: 'Department',
      cell: ({ row }) => row.original.department?.name || '—',
    },
    { accessorKey: 'cpuSerial', header: 'CPU Serial', cell: ({ row }) => row.original.cpuSerial || '—' },
    { accessorKey: 'monitorSerial', header: 'Monitor Serial', cell: ({ row }) => row.original.monitorSerial || '—' },
    { accessorKey: 'keyboardBrand', header: 'Keyboard', cell: ({ row }) => row.original.keyboardBrand || '—' },
    { accessorKey: 'mouseBrand', header: 'Mouse', cell: ({ row }) => row.original.mouseBrand || '—' },
    {
      accessorKey: 'vendor',
      header: 'Vendor',
      cell: ({ row }) => row.original.vendor?.name || '—',
    },
    {
      accessorKey: 'purchaseDate',
      header: 'Purchase Date',
      cell: ({ row }) => row.original.purchaseDate ? format(parseISO(row.original.purchaseDate), 'MMM dd, yyyy') : '—',
    },
    {
      accessorKey: 'warrantyExpiry',
      header: 'Warranty',
      cell: ({ row }) => <WarrantyBadge expiryDate={row.original.warrantyExpiry} />,
    },
    { accessorKey: 'windowsLicense', header: 'Windows', cell: ({ row }) => row.original.windowsLicense || '—' },
    { accessorKey: 'msLicense', header: 'MS Office', cell: ({ row }) => row.original.msLicense || '—' },
    { accessorKey: 'antivirus', header: 'Antivirus', cell: ({ row }) => row.original.antivirus || '—' },
    {
      accessorKey: 'status',
      header: 'Status',
      cell: ({ row }) => <StatusBadge status={row.original.status} />,
    },
    {
      accessorKey: 'employee',
      header: 'Issued To',
      cell: ({ row }) => row.original.employee?.name || '—',
    },
    {
      id: 'actions',
      header: 'Actions',
      cell: ({ row }) => isAdmin ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={(e) => e.stopPropagation()}>
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setEditAsset(row.original)}>
              <Pencil className="w-4 h-4 mr-2" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => { setMovementAssetId(row.original.id); setShowMovement(true); }}>
              <ArrowUpDown className="w-4 h-4 mr-2" /> Move
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => { setTransferAssetId(row.original.id); setShowTransfer(true); }}>
              <ArrowLeftRight className="w-4 h-4 mr-2" /> Transfer
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => setDeleteId(row.original.id)}
            >
              <Trash2 className="w-4 h-4 mr-2" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : null,
    },
  ], [isAdmin]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">All Assets</h1>
          <p className="text-muted-foreground mt-1">Manage and track all IT assets</p>
        </div>
        <div className="flex items-center gap-2">
          {isAdmin && (
            <>
          <Button onClick={() => setShowAddAsset(true)}>
            <Plus className="w-4 h-4 mr-2" /> Add Asset
          </Button>
          <Button variant="outline" onClick={() => setShowAddEmployee(true)}>
            <UserPlus className="w-4 h-4 mr-2" /> Add Employee
          </Button>
            </>
          )}
          <Button variant="outline" onClick={handleExportExcel}>
            <FileSpreadsheet className="w-4 h-4 mr-2" /> Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <StatCard title="Total" value={assets.length} icon={Package} variant="primary" />
        <StatCard title="Active" value={assets.filter((a) => a.status === 'Active').length} icon={CheckCircle2} variant="success" />
        <StatCard title="WFH" value={assets.filter((a) => a.status === 'WFH').length} icon={Home} variant="info" />
        <StatCard title="Repair" value={assets.filter((a) => a.status === 'Repair').length} icon={Wrench} variant="warning" />
        <StatCard title="Idle" value={assets.filter((a) => a.status === 'Idle').length} icon={Ban} variant="default" />
      </div>

      <Card className="p-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Search assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 h-9 px-3 rounded-md border border-input bg-background text-sm"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="Status" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="WFH">WFH</SelectItem>
              <SelectItem value="Repair">Repair</SelectItem>
              <SelectItem value="Idle">Idle</SelectItem>
              <SelectItem value="Disposed">Disposed</SelectItem>
            </SelectContent>
          </Select>
          <Select value={deptFilter} onValueChange={setDeptFilter}>
            <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="Department" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((d) => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full sm:w-40"><SelectValue placeholder="Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Desktop">Desktop</SelectItem>
              <SelectItem value="Laptop">Laptop</SelectItem>
              <SelectItem value="Monitor">Monitor</SelectItem>
              <SelectItem value="Server">Server</SelectItem>
              <SelectItem value="Tablet">Tablet</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={handleExportCSV}>
            <Download className="w-4 h-4 mr-1" /> CSV
          </Button>
        </div>

        <DataTable
          columns={columns}
          data={filteredAssets}
          searchPlaceholder="Search..."
          pageSize={10}
        />
      </Card>

      <AddAssetModal
        open={showAddAsset}
        onClose={() => setShowAddAsset(false)}
        departments={departments}
        employees={employees}
        vendors={vendors}
      />
      <AddAssetModal
        open={!!editAsset}
        onClose={() => setEditAsset(null)}
        departments={departments}
        employees={employees}
        vendors={vendors}
        asset={editAsset}
      />
      <AddEmployeeModal
        open={showAddEmployee}
        onClose={() => setShowAddEmployee(false)}
        departments={departments}
      />
      <MovementModal
        open={showMovement}
        onClose={() => setShowMovement(false)}
        assets={assets}
        departments={departments}
        defaultAssetId={movementAssetId}
      />
      <TransferModal
        open={showTransfer}
        onClose={() => setShowTransfer(false)}
        assets={assets}
        departments={departments}
        employees={employees}
        defaultAssetId={transferAssetId}
      />

      <AlertDialog open={!!deleteId} onOpenChange={(v) => !v && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Asset?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The asset and all its related movements and transfers will be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
