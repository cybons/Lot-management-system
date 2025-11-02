import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { WarehouseAllocationModal } from '@/components/WarehouseAllocationModal';
import {
  Package,
  Building2,
  Calendar,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Edit,
  ChevronRight,
} from 'lucide-react';

interface WarehouseAllocation {
  warehouse_code: string;
  quantity: number;
}

export default function OrderCardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [editingOrderId, setEditingOrderId] = useState<number | null>(null);

  // モックデータ（実際のAPIに置き換え）
  const { data: orders, isLoading } = useQuery({
    queryKey: ['orders-card', { searchQuery, statusFilter }],
    queryFn: async () => {
      // TODO: 実際のAPI呼び出しに置き換え
      return mockOrders;
    },
  });

  const availableWarehouses = [
    { code: 'WH001', name: '第一倉庫' },
    { code: 'WH002', name: '第二倉庫' },
    { code: 'WH003', name: '第三倉庫' },
  ];

  const handleSaveAllocations = (orderId: number, allocations: WarehouseAllocation[]) => {
    console.log('Save allocations for order', orderId, allocations);
    // TODO: API呼び出し
  };

  if (isLoading) {
    return <div className="p-8">読み込み中...</div>;
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">受注管理</h2>
          <p className="text-muted-foreground">カード形式で受注情報を管理できます</p>
        </div>
      </div>

      {/* 検索・フィルター */}
      <div className="flex gap-4">
        <Input
          placeholder="品番・得意先で検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-md"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">すべて</SelectItem>
            <SelectItem value="open">未処理</SelectItem>
            <SelectItem value="allocated">引当済</SelectItem>
            <SelectItem value="shipped">出荷済</SelectItem>
            <SelectItem value="completed">完了</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 受注カード一覧 */}
      <div className="space-y-4">
        {orders?.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onEditWarehouse={(orderId) => setEditingOrderId(orderId)}
            availableWarehouses={availableWarehouses}
          />
        ))}
      </div>

      {/* 倉庫編集モーダル */}
      {editingOrderId && (
        <WarehouseAllocationModal
          isOpen={!!editingOrderId}
          onClose={() => setEditingOrderId(null)}
          onSave={(allocations) => handleSaveAllocations(editingOrderId, allocations)}
          productCode={orders?.find((o) => o.id === editingOrderId)?.product_code || ''}
          totalQuantity={orders?.find((o) => o.id === editingOrderId)?.quantity || 0}
          unit={orders?.find((o) => o.id === editingOrderId)?.unit || 'kg'}
          initialAllocations={
            orders?.find((o) => o.id === editingOrderId)?.warehouse_allocations || []
          }
          availableWarehouses={availableWarehouses}
        />
      )}
    </div>
  );
}

// 受注カードコンポーネント
function OrderCard({ order, onEditWarehouse, availableWarehouses }: any) {
  const statusConfig = {
    open: { color: 'bg-blue-500', label: '未処理', icon: AlertTriangle },
    allocated: { color: 'bg-green-500', label: '引当済', icon: CheckCircle2 },
    shipped: { color: 'bg-yellow-500', label: '出荷済', icon: Package },
    completed: { color: 'bg-gray-500', label: '完了', icon: CheckCircle2 },
  };

  const status = statusConfig[order.status as keyof typeof statusConfig] || statusConfig.open;
  const StatusIcon = status.icon;

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      {/* カードヘッダー */}
      <div className={`flex items-center justify-between border-b p-4 ${status.color} bg-opacity-10`}>
        <div className="flex items-center gap-3">
          <StatusIcon className={`h-5 w-5 ${status.color.replace('bg-', 'text-')}`} />
          <span className="font-semibold">{status.label}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          <Calendar className="inline h-4 w-4 mr-1" />
          受注日: {order.order_date}
        </div>
      </div>

      {/* カードコンテンツ */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* 左側: 受注情報 */}
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">受注情報</h3>
            </div>

            <div className="space-y-3">
              <InfoRow label="品番" value={order.product_code} highlight />
              <InfoRow label="品名" value={order.product_name} />
              <InfoRow label="得意先" value={order.customer_code} />
              <InfoRow label="仕入先" value={order.supplier_code} />
              <InfoRow label="数量" value={`${order.quantity} ${order.unit}`} highlight />
              <InfoRow label="納期" value={order.due_date} />
              <InfoRow label="受注番号" value={order.order_no || '-'} />
            </div>

            {/* Forecast情報 */}
            {order.forecast_matched && (
              <div className="rounded-lg bg-blue-50 p-3 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-900">Forecast マッチ済</span>
                </div>
                <div className="text-sm text-blue-700">
                  予測数量: {order.forecast_qty} {order.unit}
                </div>
              </div>
            )}

            {/* 倉庫配分 */}
            <div className="border-t pt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">出荷倉庫</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onEditWarehouse(order.id)}
                >
                  <Edit className="mr-2 h-3 w-3" />
                  編集
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {order.warehouse_allocations?.map((alloc: any, idx: number) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    {alloc.warehouse_code}: {alloc.quantity} {order.unit}
                  </Badge>
                )) || <span className="text-sm text-muted-foreground">未設定</span>}
              </div>
            </div>
          </div>

          {/* 右側: 関連ロット */}
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                {order.status === 'open' ? '引当可能ロット' : '引当済ロット'}
              </h3>
            </div>

            <div className="space-y-3">
              {order.related_lots?.map((lot: any) => (
                <LotCard key={lot.id} lot={lot} status={order.status} />
              ))}
            </div>
          </div>
        </div>

        {/* カードフッター */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t">
          <div className="flex gap-2">
            <Select defaultValue={order.status}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">未処理</SelectItem>
                <SelectItem value="allocated">引当済</SelectItem>
                <SelectItem value="shipped">出荷済</SelectItem>
                <SelectItem value="completed">完了</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button variant="ghost">
            詳細
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// ロットカード
function LotCard({ lot, status }: any) {
  const isAllocated = status !== 'open';

  return (
    <div
      className={`rounded-lg border p-3 ${
        isAllocated ? 'bg-green-50 border-green-200' : 'bg-gray-50'
      }`}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">{lot.lot_number}</span>
          {isAllocated && <CheckCircle2 className="h-4 w-4 text-green-600" />}
        </div>
        <div className="text-xs text-muted-foreground space-y-1">
          <div>仕入先: {lot.supplier_code}</div>
          <div>有効期限: {lot.expiry_date}</div>
          <div className="font-medium text-foreground">
            {isAllocated ? '引当数量' : '在庫'}: {lot.available_quantity} kg
          </div>
        </div>
        {!isAllocated && (
          <Button variant="outline" size="sm" className="w-full mt-2">
            ドラッグして引当 →
          </Button>
        )}
      </div>
    </div>
  );
}

// 情報行コンポーネント
function InfoRow({ label, value, highlight = false }: any) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-muted-foreground">{label}:</span>
      <span className={`text-sm ${highlight ? 'font-semibold' : ''}`}>{value}</span>
    </div>
  );
}

// モックデータ
const mockOrders = [
  {
    id: 1,
    product_code: 'PRD-0001',
    product_name: 'ウレタン主剤 URIC D-7312 4KG',
    customer_code: 'CUS001',
    supplier_code: 'SUP001',
    quantity: 100,
    unit: 'kg',
    order_date: '2025/11/01',
    due_date: '2025/11/15',
    order_no: null,
    status: 'open',
    forecast_matched: true,
    forecast_qty: 100,
    warehouse_allocations: [
      { warehouse_code: 'WH001', quantity: 50 },
      { warehouse_code: 'WH002', quantity: 30 },
      { warehouse_code: 'WH003', quantity: 20 },
    ],
    related_lots: [
      {
        id: 1,
        lot_number: 'LOT-2024-001',
        supplier_code: 'SUP001',
        expiry_date: '2026/01/09',
        available_quantity: 150,
      },
      {
        id: 2,
        lot_number: 'LOT-2024-002',
        supplier_code: 'SUP001',
        expiry_date: '2026/02/15',
        available_quantity: 200,
      },
    ],
  },
  {
    id: 2,
    product_code: 'PRD-0002',
    product_name: 'ブレーキパッド ASY-F',
    customer_code: 'CUS002',
    supplier_code: 'SUP002',
    quantity: 100,
    unit: 'EA',
    order_date: '2025/11/02',
    due_date: '2025/11/20',
    order_no: 'SAP12345',
    status: 'allocated',
    forecast_matched: false,
    forecast_qty: null,
    warehouse_allocations: [
      { warehouse_code: 'WH001', quantity: 60 },
      { warehouse_code: 'WH002', quantity: 40 },
    ],
    related_lots: [
      {
        id: 3,
        lot_number: 'LOT-2024-003',
        supplier_code: 'SUP002',
        expiry_date: '2026/03/20',
        available_quantity: 80,
      },
      {
        id: 4,
        lot_number: 'LOT-2024-004',
        supplier_code: 'SUP002',
        expiry_date: '2026/04/10',
        available_quantity: 20,
      },
    ],
  },
];
