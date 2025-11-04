/**
 * ロット引当ページ
 * 受注明細に対してロットを引き当てる画面
 */

import { useState, useMemo } from "react";
import { useOrderQuery } from "@/hooks/useOrderQuery";
import { useLotsQuery } from "@/hooks/useLotsQuery";
import { useDragAssign } from "@/hooks/useDragAssign";
import type { OrderLine } from "@/hooks/useOrderQuery";
import type { Lot } from "@/hooks/useLotsQuery";

// ===== メインコンポーネント =====
export const LotAllocationPage = () => {
  // 受注IDの選択状態（実際はルーティングから取得することを想定）
  const [orderId, setOrderId] = useState<number>(1);
  
  // 選択中の明細行
  const [selectedLine, setSelectedLine] = useState<OrderLine | null>(null);

  // データ取得
  const { data: order, isLoading: isLoadingOrder } = useOrderQuery(orderId);
  const { data: lots, isLoading: isLoadingLots } = useLotsQuery(
    selectedLine?.product_code
  );
  const { mutate: dragAssign, isPending: isAssigning } = useDragAssign();

  // 引当実行ハンドラー
  const handleAllocate = (lotId: number, quantity: number) => {
    if (!selectedLine) return;

    dragAssign(
      {
        order_line_id: selectedLine.id,
        lot_id: lotId,
        allocate_qty: quantity,
      },
      {
        onSuccess: (data) => {
          alert(`引当成功: ${data.message}`);
        },
        onError: (error: any) => {
          alert(`引当失敗: ${error.response?.data?.detail || error.message}`);
        },
      }
    );
  };

  // 残数量を計算（受注数量 - 引当済数量）
  const remainingQty = useMemo(() => {
    if (!selectedLine) return 0;
    const allocated = selectedLine.allocated_qty || 0;
    return selectedLine.quantity - allocated;
  }, [selectedLine]);

  if (isLoadingOrder) {
    return <div className="p-4">読み込み中...</div>;
  }

  if (!order) {
    return <div className="p-4">受注が見つかりません</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">ロット引当</h1>

      {/* 受注情報 */}
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-3">受注情報</h2>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <InfoRow label="受注番号" value={order.order_no} />
          <InfoRow label="顧客コード" value={order.customer_code} />
          <InfoRow
            label="受注日"
            value={new Date(order.order_date).toLocaleDateString()}
          />
          <InfoRow label="ステータス" value={order.status || "-"} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* 左側: 受注明細一覧 */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-3">受注明細</h2>
          <div className="space-y-2">
            {order.lines.map((line) => (
              <OrderLineCard
                key={line.id}
                line={line}
                isSelected={selectedLine?.id === line.id}
                onClick={() => setSelectedLine(line)}
              />
            ))}
          </div>
        </div>

        {/* 右側: ロット一覧 */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-3">利用可能なロット</h2>

          {!selectedLine ? (
            <div className="text-center text-gray-500 py-8">
              左側から明細行を選択してください
            </div>
          ) : (
            <>
              {/* 選択中の明細情報 */}
              <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-4">
                <div className="text-sm">
                  <InfoRow
                    label="商品コード"
                    value={selectedLine.product_code}
                    highlight
                  />
                  <InfoRow
                    label="受注数量"
                    value={selectedLine.quantity.toLocaleString()}
                  />
                  <InfoRow
                    label="引当済"
                    value={(selectedLine.allocated_qty || 0).toLocaleString()}
                  />
                  <InfoRow
                    label="残数量"
                    value={remainingQty.toLocaleString()}
                    highlight
                    hint="引当が必要な残りの数量"
                  />
                </div>
              </div>

              {/* ロット一覧 */}
              {isLoadingLots ? (
                <div className="text-center py-4">ロットを読み込み中...</div>
              ) : lots && lots.length > 0 ? (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {lots.map((lot) => (
                    <LotCardCompact
                      key={lot.id}
                      lot={lot}
                      remainingQty={remainingQty}
                      onAllocate={handleAllocate}
                      isLoading={isAssigning}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-4">
                  利用可能なロットがありません
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// ===== サブコンポーネント =====

// 受注明細カードコンポーネント
interface OrderLineCardProps {
  line: OrderLine;
  isSelected: boolean;
  onClick: () => void;
}

function OrderLineCard({ line, isSelected, onClick }: OrderLineCardProps) {
  const allocatedQty = line.allocated_qty || 0;
  const remainingQty = line.quantity - allocatedQty;
  const progress = (allocatedQty / line.quantity) * 100;

  return (
    <div
      className={`border rounded-lg p-3 cursor-pointer transition-all ${
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-md"
          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <div className="font-medium">{line.product_code}</div>
          <div className="text-xs text-gray-500">明細 #{line.line_no}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-semibold">
            {allocatedQty.toLocaleString()} / {line.quantity.toLocaleString()}
          </div>
          <div className="text-xs text-gray-500">{line.unit}</div>
        </div>
      </div>

      {/* 進捗バー */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
        <div
          className={`h-2 rounded-full transition-all ${
            progress === 100 ? "bg-green-500" : "bg-blue-500"
          }`}
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      <div className="flex justify-between text-xs">
        <span className="text-gray-600">
          {progress.toFixed(0)}% 引当済
        </span>
        {remainingQty > 0 && (
          <span className="text-orange-600 font-medium">
            残り {remainingQty.toLocaleString()}
          </span>
        )}
      </div>

      {/* 引当詳細（あれば表示） */}
      {line.allocations && line.allocations.length > 0 && (
        <div className="mt-2 pt-2 border-t border-gray-200">
          <div className="text-xs text-gray-600">
            引当数: {line.allocations.length} 件
          </div>
        </div>
      )}
    </div>
  );
}

// ロットカードコンポーネント（コンパクト版）
interface LotCardCompactProps {
  lot: Lot;
  remainingQty: number;
  onAllocate: (lotId: number, quantity: number) => void;
  isLoading: boolean;
}

function LotCardCompact({
  lot,
  remainingQty,
  onAllocate,
  isLoading,
}: LotCardCompactProps) {
  const [allocateQty, setAllocateQty] = useState<number>(0);
  const currentQty = Number(lot.current_stock?.current_quantity) || 0;
  const maxQty = Math.min(currentQty, remainingQty);

  // 期限切れチェック
  const isExpired = lot.expiry_date
    ? new Date(lot.expiry_date) < new Date()
    : false;

  return (
    <div
      className={`border rounded-lg p-3 ${
        isExpired
          ? "bg-red-50 border-red-200"
          : currentQty === 0
          ? "bg-gray-50 border-gray-200 opacity-60"
          : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">{lot.lot_number}</div>
          <div className="text-xs text-gray-600">
            倉庫: {lot.warehouse_code || lot.warehouse_id || "-"}
          </div>
        </div>
        <div className="text-right">
          <div className={`text-sm font-semibold ${currentQty === 0 ? "text-gray-400" : ""}`}>
            在庫: {currentQty.toLocaleString()}
          </div>
          {lot.expiry_date && (
            <div
              className={`text-xs ${
                isExpired ? "text-red-600 font-medium" : "text-gray-500"
              }`}
            >
              期限: {new Date(lot.expiry_date).toLocaleDateString()}
              {isExpired && " (期限切れ)"}
            </div>
          )}
        </div>
      </div>

      {/* 引当フォーム */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="0"
          max={maxQty}
          value={allocateQty}
          onChange={(e) => {
            const val = Number(e.target.value) || 0;
            setAllocateQty(Math.min(Math.max(0, val), maxQty));
          }}
          placeholder="引当数量"
          className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading || maxQty === 0 || isExpired}
        />
        <button
          onClick={() => {
            if (allocateQty > 0) {
              onAllocate(lot.id, allocateQty);
              setAllocateQty(0);
            }
          }}
          disabled={
            isLoading || allocateQty <= 0 || allocateQty > maxQty || isExpired
          }
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium 
                     disabled:opacity-50 disabled:cursor-not-allowed 
                     hover:bg-blue-700 transition-colors"
        >
          {isLoading ? "処理中..." : "引当"}
        </button>
      </div>

      {/* 警告メッセージ */}
      {isExpired && (
        <div className="mt-2 text-xs text-red-600 font-medium">
          ⚠️ このロットは期限切れです
        </div>
      )}
      {currentQty === 0 && !isExpired && (
        <div className="mt-2 text-xs text-gray-500">
          在庫なし
        </div>
      )}
    </div>
  );
}

// 情報行コンポーネント
interface InfoRowProps {
  label: string;
  value: string;
  highlight?: boolean;
  hint?: string;
}

function InfoRow({ label, value, highlight = false, hint }: InfoRowProps) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-600">{label}:</span>
      <span
        className={highlight ? "font-semibold text-gray-900" : "text-gray-800"}
        title={hint}
      >
        {value}
      </span>
    </div>
  );
}

export default LotAllocationPage;
