/**
 * ロット引当ページ（詳細版）
 *
 * レイアウト:
 * - ヘッダー: 製品名(品番) | ステータス | 受注日
 * - 左カラム: 引当進捗、倉庫別ロット候補一覧（引当済み含む）
 * - 右カラム: 受注情報詳細
 * - 下部: フォーキャスト情報（全幅）
 */

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type DragAssignRequest } from "@/services/api";
import { http } from "@/services/http";

// ===== 型定義 =====
interface AllocatedLot {
  allocation_id: number;
  lot_id: number;
  lot_code: string;
  allocated_qty: number;
  warehouse_code: string;
  expiry_date: string | null;
}

interface LotsByWarehouse {
  [warehouseCode: string]: any[];
}

export default function OrderCardPage() {
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const [selectedLineId, setSelectedLineId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  // 受注一覧を取得
  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: () => api.getOrders({ status: "open" }),
  });

  // 選択された受注の詳細を取得
  const orderDetailQuery = useQuery({
    queryKey: ["order", selectedOrderId],
    queryFn: () => api.getOrderDetail(selectedOrderId!),
    enabled: !!selectedOrderId,
  });

  // 選択された明細行の情報
  const selectedLine = orderDetailQuery.data?.lines?.find(
    (line: any) => line.id === selectedLineId,
  );

  // ロット候補を取得
  const lotsQuery = useQuery({
    queryKey: ["lots", selectedLine?.product_code],
    queryFn: () =>
      api.listLots({
        product_id: selectedLine?.product_code,
        with_stock: true,
      }),
    enabled: !!selectedLine?.product_code,
  });

  // FEFO順にソート & 倉庫別にグループ化
  const lotsByWarehouse: LotsByWarehouse = {};
  const sortedLots = (lotsQuery.data ?? []).slice().sort((a: any, b: any) => {
    if (!a.expiry_date && !b.expiry_date) return 0;
    if (!a.expiry_date) return 1;
    if (!b.expiry_date) return -1;
    return new Date(a.expiry_date).getTime() - new Date(b.expiry_date).getTime();
  });

  sortedLots.forEach((lot: any) => {
    const wh = lot.warehouse_code || "未設定";
    if (!lotsByWarehouse[wh]) lotsByWarehouse[wh] = [];
    lotsByWarehouse[wh].push(lot);
  });

  // 引当実行ミューテーション
  const allocateMutation = useMutation({
    mutationFn: (request: DragAssignRequest) => api.dragAssignAllocation(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order", selectedOrderId] });
      queryClient.invalidateQueries({ queryKey: ["lots"] });
    },
    onError: (error: any) => {
      alert(`引当に失敗しました: ${error?.response?.data?.detail || error.message}`);
    },
  });

  // 引当取消ミューテーション
  const cancelMutation = useMutation({
    mutationFn: (allocationId: number) => http.delete(`/allocations/${allocationId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order", selectedOrderId] });
      queryClient.invalidateQueries({ queryKey: ["lots"] });
    },
    onError: (error: any) => {
      alert(`引当取消に失敗しました: ${error?.response?.data?.detail || error.message}`);
    },
  });

  const handleAllocate = (lotId: number, quantity: number) => {
    if (!selectedLineId) {
      alert("受注明細を選択してください");
      return;
    }

    if (quantity <= 0) {
      alert("数量は1以上を指定してください");
      return;
    }

    allocateMutation.mutate({
      order_line_id: selectedLineId,
      lot_id: lotId,
      allocate_qty: quantity,
    });
  };

  const handleCancelAllocation = (allocationId: number) => {
    if (confirm("この引当を取り消しますか？")) {
      cancelMutation.mutate(allocationId);
    }
  };

  // 引当進捗の計算
  const allocatedQty = Number(selectedLine?.allocated_qty) || 0;
  const requiredQty = Number(selectedLine?.quantity) || 0;
  const progress = requiredQty > 0 ? (allocatedQty / requiredQty) * 100 : 0;
  const remainingQty = requiredQty - allocatedQty;

  // 受注情報
  const order = orderDetailQuery.data;
  const orderDate = order?.order_date
    ? new Date(order.order_date).toLocaleDateString("ja-JP")
    : "-";
  const dueDate = selectedLine?.due_date
    ? new Date(selectedLine.due_date).toLocaleDateString("ja-JP")
    : "-";

  return (
    <div className="space-y-6">
      {/* 受注選択（簡易版） */}
      <div className="rounded-lg border bg-card p-4">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium">受注選択:</label>
          <select
            value={selectedOrderId ?? ""}
            onChange={(e) => {
              setSelectedOrderId(e.target.value ? Number(e.target.value) : null);
              setSelectedLineId(null);
            }}
            className="px-3 py-2 border rounded text-sm"
          >
            <option value="">-- 受注を選択 --</option>
            {ordersQuery.data?.map((order: any) => (
              <option key={order.id} value={order.id}>
                {order.order_no} - {order.customer_code}
              </option>
            ))}
          </select>

          {order && (
            <>
              <label className="text-sm font-medium ml-4">明細選択:</label>
              <select
                value={selectedLineId ?? ""}
                onChange={(e) => setSelectedLineId(e.target.value ? Number(e.target.value) : null)}
                className="px-3 py-2 border rounded text-sm"
              >
                <option value="">-- 明細を選択 --</option>
                {order.lines?.map((line: any) => (
                  <option key={line.id} value={line.id}>
                    {line.product_code} - {line.quantity} {line.unit}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>
      </div>

      {/* メインコンテンツ */}
      {selectedLine ? (
        <>
          {/* ヘッダー: 製品名(品番) | ステータス | 受注日 */}
          <div className="rounded-lg border bg-card p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">{selectedLine.product_code}</h2>
                <p className="text-sm text-muted-foreground">
                  {(selectedLine as any).product_name || "製品名未設定"}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    progress >= 100
                      ? "bg-green-100 text-green-800"
                      : progress > 0
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {progress >= 100 ? "引当完了" : progress > 0 ? "引当中" : "未引当"}
                </span>
                <span className="text-sm text-muted-foreground">受注日: {orderDate}</span>
              </div>
            </div>
          </div>

          {/* 2カラムレイアウト */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* 左カラム: 引当進捗 & 倉庫別ロット候補 */}
            <div className="space-y-4">
              {/* 引当進捗 */}
              <div className="rounded-lg border bg-card p-4">
                <h3 className="text-sm font-semibold mb-3">■ 引当進捗</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>
                      引当済: {allocatedQty.toLocaleString()} / 必要: {requiredQty.toLocaleString()}{" "}
                      {selectedLine.unit}
                    </span>
                    <span className="font-semibold">{progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all ${
                        progress >= 100 ? "bg-green-500" : "bg-blue-500"
                      }`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                  {remainingQty > 0 && (
                    <p className="text-xs text-muted-foreground">
                      残り: {remainingQty.toLocaleString()} {selectedLine.unit}
                    </p>
                  )}
                </div>
              </div>

              {/* 倉庫別ロット候補一覧 */}
              <div className="rounded-lg border bg-card p-4">
                <h3 className="text-sm font-semibold mb-3">■ 倉庫別ロット候補一覧</h3>

                {/* 引当済みロット */}
                {selectedLine?.allocated_lots &&
                  Array.isArray(selectedLine.allocated_lots) &&
                  selectedLine.allocated_lots.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-green-700 mb-2">✓ 引当済み</h4>
                      <div className="space-y-2">
                        {selectedLine.allocated_lots.map((alloc: AllocatedLot) => (
                          <div
                            key={alloc.allocation_id}
                            className="border border-green-200 bg-green-50 rounded p-3"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="text-sm font-medium">
                                  {alloc.lot_code || `LOT-${alloc.lot_id}`}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  倉庫: {alloc.warehouse_code} | 引当済:{" "}
                                  {alloc.allocated_qty.toLocaleString()} EA
                                </div>
                                {alloc.expiry_date && (
                                  <div className="text-xs text-muted-foreground">
                                    期限: {new Date(alloc.expiry_date).toLocaleDateString()}
                                  </div>
                                )}
                              </div>
                              <button
                                onClick={() => handleCancelAllocation(alloc.allocation_id)}
                                disabled={cancelMutation.isPending}
                                className="px-2 py-1 text-xs border border-red-300 text-red-700 rounded hover:bg-red-50 disabled:opacity-50"
                              >
                                取消
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                {/* 倉庫別ロット候補 */}
                {lotsQuery.isLoading ? (
                  <p className="text-sm text-muted-foreground">読み込み中...</p>
                ) : lotsQuery.isError ? (
                  <p className="text-sm text-destructive">ロットの取得に失敗しました</p>
                ) : Object.keys(lotsByWarehouse).length === 0 ? (
                  <p className="text-sm text-muted-foreground">在庫のあるロットが見つかりません</p>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(lotsByWarehouse).map(([whCode, lots]) => (
                      <div key={whCode}>
                        <h4 className="text-xs font-semibold text-gray-600 mb-2">倉庫: {whCode}</h4>
                        <div className="space-y-2 pl-3">
                          {lots.map((lot: any) => (
                            <LotCardCompact
                              key={lot.id}
                              lot={lot}
                              remainingQty={remainingQty}
                              onAllocate={handleAllocate}
                              isLoading={allocateMutation.isPending}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* 右カラム: 受注情報 */}
            <div className="space-y-4">
              <div className="rounded-lg border bg-card p-4">
                <h3 className="text-sm font-semibold mb-3">■ 受注情報</h3>
                <div className="space-y-2 text-sm">
                  <InfoRow label="得意先" value={order?.customer_code || "-"} />
                  <InfoRow label="納品先" value="-" hint="納品先情報は準備中" />
                  <InfoRow label="納期" value={dueDate} />
                  <InfoRow label="出荷日(予定)" value="-" hint="出荷日情報は準備中" />
                  <InfoRow label="配送リードタイム" value="-" hint="リードタイム情報は準備中" />
                  <InfoRow
                    label="受注数量"
                    value={`${requiredQty.toLocaleString()} ${selectedLine.unit}`}
                    highlight
                  />
                </div>
              </div>
            </div>
          </div>

          {/* フォーキャスト（全幅） */}
          <div className="rounded-lg border bg-card p-4">
            <h3 className="text-sm font-semibold mb-3">■ フォーキャスト</h3>
            <div className="flex items-center gap-4 text-sm">
              <span>今月予測: - </span>
              <span>来月予測: - </span>
              <span>在庫予測: 準備中</span>
            </div>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1 text-xs border rounded hover:bg-muted">
                詳細フォーキャストを見る
              </button>
              <button className="px-3 py-1 text-xs border rounded hover:bg-muted">
                フォーキャスト一覧
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-lg border bg-card p-8 text-center text-muted-foreground">
          受注明細を選択してください
        </div>
      )}
    </div>
  );
}

// ===== LotCardCompact コンポーネント =====
interface LotCardCompactProps {
  lot: any;
  remainingQty: number;
  onAllocate: (lotId: number, quantity: number) => void;
  isLoading: boolean;
}

function LotCardCompact({ lot, remainingQty, onAllocate, isLoading }: LotCardCompactProps) {
  const [allocateQty, setAllocateQty] = useState<number>(0);
  const currentQty = Number(lot.current_stock?.current_quantity) || 0;
  const maxQty = Math.min(currentQty, remainingQty);

  return (
    <div className="border rounded p-2 bg-white">
      <div className="flex items-center justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="text-xs font-medium truncate">{lot.lot_number}</div>
          <div className="text-xs text-muted-foreground">
            在庫: {currentQty.toLocaleString()}
            {lot.expiry_date && (
              <span className="ml-2">期限: {new Date(lot.expiry_date).toLocaleDateString()}</span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="number"
            min="0"
            max={maxQty}
            value={allocateQty}
            onChange={(e) => {
              const val = Number(e.target.value) || 0;
              setAllocateQty(Math.min(Math.max(0, val), maxQty));
            }}
            placeholder="数量"
            className="w-20 px-2 py-1 border rounded text-xs"
            disabled={isLoading || maxQty === 0}
          />
          <button
            onClick={() => {
              if (allocateQty > 0) {
                onAllocate(lot.id, allocateQty);
                setAllocateQty(0);
              }
            }}
            disabled={isLoading || allocateQty <= 0 || allocateQty > maxQty}
            className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90"
          >
            引当
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== InfoRow コンポーネント =====
interface InfoRowProps {
  label: string;
  value: string;
  highlight?: boolean;
  hint?: string;
}

function InfoRow({ label, value, highlight = false, hint }: InfoRowProps) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}:</span>
      <span className={highlight ? "font-semibold" : ""} title={hint}>
        {value}
      </span>
    </div>
  );
}
