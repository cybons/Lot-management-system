// src/pages/OrderCardPage.tsx - Priority 1 完全実装版
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { WarehouseAllocationModal } from "@/components/WarehouseAllocationModal";
import {
  Package,
  Calendar,
  CheckCircle2,
  AlertTriangle,
  Edit,
  ChevronRight,
  Loader2,
  Trash2,
  AlertCircle,
  Check,
  TrendingUp,
  TrendingDown,
  Minus,
} from "lucide-react";
import type { 
  WarehouseAlloc, 
  Warehouse, 
  LotCandidate, 
  AllocatedLot, 
  LotSelection,
  OrderLineWithAlloc 
} from "@/types";
import { useToast } from "@/hooks/use-toast";

export default function OrderCardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [editingOrderLine, setEditingOrderLine] = useState<any | null>(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // 受注データ取得
  const { data: orderData, isLoading: isLoadingOrders } = useQuery({
    queryKey: ["orders-with-allocations", { searchQuery, statusFilter }],
    queryFn: () => api.getOrdersWithAllocations(),
  });
  const orders = orderData?.items ?? [];

  // 倉庫マスタ取得
  const { data: warehouseData, isLoading: isLoadingWarehouses } = useQuery({
    queryKey: ["warehouse-alloc-list"],
    queryFn: () => api.getWarehouseAllocList(),
  });
  const availableWarehouses: Warehouse[] = warehouseData?.items ?? [];

  // 倉庫配分保存
  const saveAllocMutation = useMutation({
    mutationFn: (data: {
      orderLineId: number;
      allocations: WarehouseAlloc[];
    }) => api.saveWarehouseAllocations(data.orderLineId, data.allocations),
    onSuccess: () => {
      toast({
        title: "保存しました",
        description: "倉庫の配分情報を更新しました。",
      });
      queryClient.invalidateQueries({ queryKey: ["orders-with-allocations"] });
    },
    onError: (error: any) => {
      toast({
        title: "保存失敗",
        description: error.message || "サーバーエラー",
        variant: "destructive",
      });
    },
  });

  const handleSaveAllocations = (allocations: WarehouseAlloc[]) => {
    if (!editingOrderLine) return;
    saveAllocMutation.mutate({
      orderLineId: editingOrderLine.id,
      allocations: allocations,
    });
    setEditingOrderLine(null);
  };

  if (isLoadingOrders || isLoadingWarehouses) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">ロット引当処理</h2>
          <p className="text-muted-foreground">
            受注明細ごとにロットを引き当てます
          </p>
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
      </div>

      {/* 受注カード一覧 */}
      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            onEditWarehouse={() => setEditingOrderLine(order)}
          />
        ))}
        {orders.length === 0 && (
          <div className="rounded-lg border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              対象の受注データがありません
            </p>
          </div>
        )}
      </div>

      {/* 倉庫編集モーダル */}
      {editingOrderLine && (
        <WarehouseAllocationModal
          isOpen={!!editingOrderLine}
          onClose={() => setEditingOrderLine(null)}
          onSave={handleSaveAllocations}
          productCode={editingOrderLine.product_code || ""}
          totalQuantity={editingOrderLine.quantity || 0}
          unit={editingOrderLine.unit || "EA"}
          initialAllocations={editingOrderLine.warehouse_allocations || []}
          availableWarehouses={availableWarehouses.map((wh) => ({
            code: wh.warehouse_code,
            name: wh.warehouse_name,
          }))}
          isSaving={saveAllocMutation.isPending}
        />
      )}
    </div>
  );
}

// ===== Forecastマッチング表示コンポーネント =====
interface ForecastMatchBadgeProps {
  forecastMatched: boolean;
  forecastQty?: number;
  orderQty: number;
  unit: string;
}

function ForecastMatchBadge({
  forecastMatched,
  forecastQty,
  orderQty,
  unit,
}: ForecastMatchBadgeProps) {
  if (!forecastMatched || !forecastQty) {
    return null;
  }

  const diff = orderQty - forecastQty;
  const diffPercent = (diff / forecastQty) * 100;

  // 色分けロジック
  let bgColor = "bg-green-50";
  let borderColor = "border-green-200";
  let textColor = "text-green-900";
  let icon = <Check className="h-4 w-4 text-green-600" />;
  let label = "Forecast 一致";
  let statusIcon = <Minus className="h-4 w-4 text-green-600" />;

  if (Math.abs(diffPercent) < 5) {
    // ±5%以内: 一致
    label = "Forecast 一致";
  } else if (diff < 0) {
    // 受注 < 予測: 過少
    if (Math.abs(diffPercent) >= 10) {
      bgColor = "bg-yellow-50";
      borderColor = "border-yellow-200";
      textColor = "text-yellow-900";
      icon = <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      label = "Forecast 過少";
      statusIcon = <TrendingDown className="h-4 w-4 text-yellow-600" />;
    }
  } else {
    // 受注 > 予測: 過剰
    if (diffPercent >= 10) {
      bgColor = "bg-orange-50";
      borderColor = "border-orange-200";
      textColor = "text-orange-900";
      icon = <AlertTriangle className="h-4 w-4 text-orange-600" />;
      label = "Forecast 過剰";
      statusIcon = <TrendingUp className="h-4 w-4 text-orange-600" />;
    }
  }

  return (
    <div className={`rounded-lg ${bgColor} p-3 border ${borderColor}`}>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <span className={`text-sm font-medium ${textColor}`}>{label}</span>
      </div>
      <div className={`text-sm ${textColor} space-y-1`}>
        <div className="flex items-center justify-between">
          <span>予測数量:</span>
          <span className="font-semibold">
            {forecastQty} {unit}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>受注数量:</span>
          <span className="font-semibold">
            {orderQty} {unit}
          </span>
        </div>
        {Math.abs(diff) > 0 && (
          <div className="flex items-center justify-between pt-1 border-t">
            <span className="flex items-center gap-1">
              {statusIcon}
              差異:
            </span>
            <span className="font-bold">
              {diff > 0 ? "+" : ""}
              {diff} {unit} ({diffPercent.toFixed(1)}%)
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== ロット引当パネル =====
interface LotAllocationPanelProps {
  orderLineId: number;
  productCode: string;
  totalQuantity: number;
  unit: string;
  allocatedLots: AllocatedLot[];
  status?: string;
  onStatusConfirmed?: () => void;
}

function LotAllocationPanel({
  orderLineId,
  productCode,
  totalQuantity,
  unit,
  allocatedLots,
  status,
  onStatusConfirmed,
}: LotAllocationPanelProps) {
  const [selections, setSelections] = useState<LotSelection[]>([]);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // ロット候補を取得
  const {
    data: candidatesData,
    isLoading: isLoadingCandidates,
  } = useQuery({
    queryKey: ["candidate-lots", orderLineId],
    queryFn: () => api.getCandidateLots(orderLineId),
    enabled: !!orderLineId,
  });

  const candidates = candidatesData?.items || [];

  // ===== 🔥 新機能1: ロット1個の場合の自動全量入力 =====
  useEffect(() => {
    if (
      candidates.length === 1 &&
      selections.length === 0 &&
      allocatedLots.length === 0
    ) {
      const singleLot = candidates[0];
      const totalAllocated = allocatedLots.reduce(
        (sum, a) => sum + a.allocated_qty,
        0
      );
      const remaining = totalQuantity - totalAllocated;

      // 在庫が十分にある場合のみ自動選択
      if (singleLot.available_qty >= remaining) {
        setSelections([
          {
            lot_id: singleLot.lot_id,
            lot_code: singleLot.lot_code,
            available_qty: singleLot.available_qty,
            requested_qty: remaining,
            unit: singleLot.unit,
            warehouse_code: singleLot.warehouse_code,
            expiry_date: singleLot.expiry_date,
          },
        ]);

        toast({
          title: "自動選択",
          description: `ロットが1つのため、全量（${remaining} ${unit}）を自動入力しました。`,
        });
      }
    }
  }, [candidates, selections.length, allocatedLots, totalQuantity, unit, toast]);

  // ロット引当実行
  const allocateMutation = useMutation({
    mutationFn: (data: { 
      orderLineId: number; 
      allocations: Array<{ lot_id: number; qty: number }> 
    }) =>
      api.createLotAllocations(data.orderLineId, { 
        allocations: data.allocations 
      }),
    onSuccess: () => {
      toast({
        title: "引当完了",
        description: "ロットの引当が完了しました",
      });
      setSelections([]);
      queryClient.invalidateQueries({ queryKey: ["orders-with-allocations"] });
      queryClient.invalidateQueries({ queryKey: ["candidate-lots", orderLineId] });
    },
    onError: (error: any) => {
      toast({
        title: "引当失敗",
        description: error.message || "エラーが発生しました",
        variant: "destructive",
      });
    },
  });

  // ロット引当取消
  const cancelMutation = useMutation({
    mutationFn: (data: { orderLineId: number; allocationId: number }) =>
      api.cancelLotAllocations(data.orderLineId, { 
        allocation_id: data.allocationId 
      }),
    onSuccess: () => {
      toast({
        title: "取消完了",
        description: "引当を取消しました",
      });
      queryClient.invalidateQueries({ queryKey: ["orders-with-allocations"] });
      queryClient.invalidateQueries({ queryKey: ["candidate-lots", orderLineId] });
    },
    onError: (error: any) => {
      toast({
        title: "取消失敗",
        description: error.message || "エラーが発生しました",
        variant: "destructive",
      });
    },
  });

  // ===== 🔥 新機能2: ステータス確定 =====
  const confirmStatusMutation = useMutation({
    mutationFn: (orderLineId: number) =>
      fetch(`http://localhost:8000/api/orders/${orderLineId}/status`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ new_status: "allocated" }),
      }).then((res) => {
        if (!res.ok) throw new Error("ステータス更新失敗");
        return res.json();
      }),
    onSuccess: () => {
      toast({
        title: "確定完了",
        description: "引当が確定されました",
      });
      queryClient.invalidateQueries({ queryKey: ["orders-with-allocations"] });
      onStatusConfirmed?.();
    },
    onError: (error: any) => {
      toast({
        title: "確定失敗",
        description: error.message || "エラーが発生しました",
        variant: "destructive",
      });
    },
  });

  // ロット選択
  const handleSelectLot = (lot: LotCandidate) => {
    const alreadySelected = selections.find((s) => s.lot_id === lot.lot_id);
    if (alreadySelected) {
      toast({
        title: "既に選択済み",
        description: "このロットは既に選択されています",
        variant: "destructive",
      });
      return;
    }

    const totalAllocated = allocatedLots.reduce(
      (sum, a) => sum + a.allocated_qty,
      0
    );
    const totalSelected = selections.reduce((sum, s) => sum + s.requested_qty, 0);
    const remaining = totalQuantity - totalAllocated - totalSelected;

    // 残りの数量を自動入力（ただし在庫数を超えない）
    const suggestedQty = Math.min(remaining, lot.available_qty);

    setSelections([
      ...selections,
      {
        lot_id: lot.lot_id,
        lot_code: lot.lot_code,
        available_qty: lot.available_qty,
        requested_qty: suggestedQty,
        unit: lot.unit,
        warehouse_code: lot.warehouse_code,
        expiry_date: lot.expiry_date,
      },
    ]);
  };

  // 数量変更
  const handleQuantityChange = (lotId: number, qty: number) => {
    setSelections(
      selections.map((s) =>
        s.lot_id === lotId ? { ...s, requested_qty: qty } : s
      )
    );
  };

  // ロット削除
  const handleRemoveSelection = (lotId: number) => {
    setSelections(selections.filter((s) => s.lot_id !== lotId));
  };

  // 引当実行
  const handleAllocate = () => {
    // バリデーション
    const hasInvalidQty = selections.some((s) => s.requested_qty <= 0);
    if (hasInvalidQty) {
      toast({
        title: "入力エラー",
        description: "数量は0より大きい値を入力してください",
        variant: "destructive",
      });
      return;
    }

    const hasExceeded = selections.some((s) => s.requested_qty > s.available_qty);
    if (hasExceeded) {
      toast({
        title: "在庫エラー",
        description: "利用可能数量を超えています",
        variant: "destructive",
      });
      return;
    }

    // 引当実行
    allocateMutation.mutate({
      orderLineId,
      allocations: selections.map((s) => ({
        lot_id: s.lot_id,
        qty: s.requested_qty,
      })),
    });
  };

  // 引当取消
  const handleCancelAllocation = (allocationId: number) => {
    if (confirm("この引当を取消しますか?")) {
      cancelMutation.mutate({ orderLineId, allocationId });
    }
  };

  // ===== 🔥 新機能3: 確定ボタンの表示判定 =====
  const totalSelected = selections.reduce((sum, s) => sum + s.requested_qty, 0);
  const totalAllocated = allocatedLots.reduce((sum, a) => sum + a.allocated_qty, 0);
  const remaining = totalQuantity - totalAllocated - totalSelected;
  const isFullyAllocated = remaining === 0 && totalAllocated > 0;
  const isAlreadyConfirmed = status === "allocated";

  return (
    <div className="space-y-4">
      {/* 引当済みロット */}
      {allocatedLots.length > 0 && (
        <div className="border rounded-lg p-4 bg-green-50">
          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            引当済みロット
          </h4>
          <div className="space-y-2">
            {allocatedLots.map((alloc) => (
              <div
                key={alloc.allocation_id}
                className="flex items-center justify-between p-2 bg-white rounded border"
              >
                <div className="flex-1">
                  <div className="text-sm font-medium">{alloc.lot_code}</div>
                  <div className="text-xs text-muted-foreground">
                    {alloc.allocated_qty} {unit} / {alloc.warehouse_code}
                    {alloc.expiry_date && ` / 期限: ${alloc.expiry_date}`}
                  </div>
                </div>
                {!isAlreadyConfirmed && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCancelAllocation(alloc.allocation_id)}
                    disabled={cancelMutation.isPending}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 進捗バー */}
      <div className="border rounded-lg p-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-medium">引当進捗</span>
          <span className={remaining < 0 ? "text-destructive font-semibold" : "font-semibold"}>
            {totalAllocated + totalSelected} / {totalQuantity} {unit}
          </span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all ${
              remaining < 0
                ? "bg-red-500"
                : remaining === 0
                ? "bg-green-500"
                : totalAllocated + totalSelected > totalQuantity * 0.5
                ? "bg-yellow-500"
                : "bg-blue-500"
            }`}
            style={{
              width: `${Math.min(
                100,
                ((totalAllocated + totalSelected) / totalQuantity) * 100
              )}%`,
            }}
          />
        </div>
        <div className="text-xs text-muted-foreground mt-1 flex justify-between">
          <span>
            残り: {remaining} {unit}
          </span>
          {isFullyAllocated && !isAlreadyConfirmed && (
            <span className="text-green-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" />
              引当完了
            </span>
          )}
        </div>
      </div>

      {/* ===== 🔥 新機能: 確定ボタン ===== */}
      {isFullyAllocated && !isAlreadyConfirmed && (
        <div className="border-2 border-green-500 rounded-lg p-4 bg-green-50">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle2 className="h-6 w-6 text-green-600" />
            <div>
              <div className="font-semibold text-green-900">
                引当が完了しました
              </div>
              <div className="text-sm text-green-700">
                確定ボタンを押すと、ステータスが「引当済み」になります
              </div>
            </div>
          </div>
          <Button
            className="w-full bg-green-600 hover:bg-green-700"
            size="lg"
            onClick={() => confirmStatusMutation.mutate(orderLineId)}
            disabled={confirmStatusMutation.isPending}
          >
            {confirmStatusMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                確定中...
              </>
            ) : (
              <>
                <Check className="mr-2 h-4 w-4" />
                確定して次へ
              </>
            )}
          </Button>
        </div>
      )}

      {isAlreadyConfirmed && (
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 text-gray-600" />
            <div>
              <div className="font-semibold text-gray-900">確定済み</div>
              <div className="text-sm text-gray-600">
                この受注明細は既に確定されています
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 選択中のロット */}
      {selections.length > 0 && (
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-semibold mb-2">選択中のロット</h4>
          <div className="space-y-2">
            {selections.map((selection) => (
              <div
                key={selection.lot_id}
                className="flex items-center gap-2 p-2 bg-blue-50 rounded border"
              >
                <div className="flex-1">
                  <div className="text-sm font-medium">{selection.lot_code}</div>
                  <div className="text-xs text-muted-foreground">
                    在庫: {selection.available_qty} {unit} / {selection.warehouse_code}
                  </div>
                </div>
                <Input
                  type="number"
                  min="0"
                  max={selection.available_qty}
                  value={selection.requested_qty || ""}
                  onChange={(e) =>
                    handleQuantityChange(
                      selection.lot_id,
                      parseFloat(e.target.value) || 0
                    )
                  }
                  className="w-24"
                  placeholder="数量"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveSelection(selection.lot_id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <Button
            className="w-full mt-2"
            onClick={handleAllocate}
            disabled={allocateMutation.isPending || selections.length === 0}
          >
            {allocateMutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                処理中...
              </>
            ) : (
              "割当実行"
            )}
          </Button>
        </div>
      )}

      {/* 引当可能ロット一覧 */}
      {!isAlreadyConfirmed && (
        <div className="border rounded-lg p-4">
          <h4 className="text-sm font-semibold mb-2">引当可能ロット</h4>
          {isLoadingCandidates ? (
            <div className="flex justify-center p-4">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : candidates.length === 0 ? (
            <div className="text-center p-4 text-muted-foreground text-sm">
              <AlertCircle className="h-8 w-8 mx-auto mb-2" />
              引当可能なロットがありません
            </div>
          ) : (
            <div className="space-y-2">
              {candidates.map((lot, index) => (
                <div
                  key={lot.lot_id}
                  className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer"
                  onClick={() => handleSelectLot(lot)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">{lot.lot_code}</div>
                      {index === 0 && (
                        <Badge variant="outline" className="text-xs">
                          推奨（FIFO）
                        </Badge>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      在庫: {lot.available_qty} {lot.unit} / {lot.warehouse_code}
                    </div>
                    {lot.expiry_date && (
                      <div className="text-xs text-muted-foreground">
                        期限: {lot.expiry_date}
                      </div>
                    )}
                  </div>
                  <Package className="h-5 w-5 text-muted-foreground" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ===== 受注カードコンポーネント =====
function OrderCard({
  order,
  onEditWarehouse,
}: {
  order: OrderLineWithAlloc;
  onEditWarehouse: () => void;
}) {
  const statusConfig = {
    open: { color: "bg-blue-500", label: "未処理", icon: AlertTriangle },
    allocated: { color: "bg-green-500", label: "引当済", icon: CheckCircle2 },
    shipped: { color: "bg-yellow-500", label: "出荷済", icon: Package },
    completed: { color: "bg-gray-500", label: "完了", icon: CheckCircle2 },
  };
  const statusKey = (order.status || "open") as keyof typeof statusConfig;
  const status = statusConfig[statusKey] || statusConfig.open;
  const StatusIcon = status.icon;

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      {/* カードヘッダー */}
      <div
        className={`flex items-center justify-between border-b p-4 ${status.color} bg-opacity-10`}
      >
        <div className="flex items-center gap-3">
          <StatusIcon
            className={`h-5 w-5 ${status.color.replace("bg-", "text-")}`}
          />
          <span className="font-semibold">{status.label}</span>
        </div>
        <div className="text-sm text-muted-foreground">
          <Calendar className="inline h-4 w-4 mr-1" />
          受注日: {order.order_date || "2025-11-01"}
        </div>
      </div>

      {/* カードコンテンツ */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* 左側: 受注情報 */}
          <div className="space-y-4">
            <div className="border-b pb-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                受注情報
              </h3>
            </div>

            <div className="space-y-3">
              <InfoRow label="品番" value={order.product_code} highlight />
              <InfoRow label="品名" value={order.product_name} />
              <InfoRow label="得意先" value={order.customer_code} />
              <InfoRow label="仕入先" value={order.supplier_code || "N/A"} />
              <InfoRow
                label="数量"
                value={`${order.quantity} ${order.unit}`}
                highlight
              />
              <InfoRow label="納期" value={order.due_date || "2025-11-15"} />
              <InfoRow label="受注番号" value={order.order_no || "-"} />
            </div>

            {/* ===== 🔥 新機能: Forecast情報の強化 ===== */}
            {order.forecast_matched && (
              <ForecastMatchBadge
                forecastMatched={order.forecast_matched}
                forecastQty={order.forecast_qty}
                orderQty={order.quantity}
                unit={order.unit}
              />
            )}

            {/* 倉庫配分 */}
            <div className="border-t pt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">出荷倉庫</span>
                <Button variant="outline" size="sm" onClick={onEditWarehouse}>
                  <Edit className="mr-2 h-3 w-3" />
                  編集
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {order.warehouse_allocations?.length > 0 ? (
                  order.warehouse_allocations.map(
                    (alloc: WarehouseAlloc, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {alloc.warehouse_code}: {alloc.quantity} {order.unit}
                      </Badge>
                    )
                  )
                ) : (
                  <span className="text-sm text-muted-foreground">未設定</span>
                )}
              </div>
            </div>
          </div>

          {/* 右側: ロット引当パネル */}
          <div>
            <div className="border-b pb-3 mb-4">
              <h3 className="text-sm font-medium text-muted-foreground">
                ロット引当処理
              </h3>
            </div>
            <LotAllocationPanel
              orderLineId={order.id}
              productCode={order.product_code}
              totalQuantity={order.quantity}
              unit={order.unit}
              allocatedLots={order.allocated_lots || []}
              status={order.status}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== InfoRowコンポーネント =====
function InfoRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-muted-foreground">{label}:</span>
      <span className={`text-sm ${highlight ? "font-semibold" : ""}`}>
        {value}
      </span>
    </div>
  );
}
