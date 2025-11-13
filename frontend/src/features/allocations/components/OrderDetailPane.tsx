/**
 * OrderDetailPane - Center pane displaying order line details
 */

import type { UseQueryResult } from "@tanstack/react-query";

import type { Order, OrderLine } from "../types";

import { OrderLineCard } from "./OrderLineCard";

import { formatDate } from "@/shared/utils/date";

interface OrderDetailPaneProps {
  selectedOrderId: number | null;
  orderDetailQuery: UseQueryResult<Order, Error>;
  selectedLineId: number | null;
  allocationTotalAll: number;
  onSelectLine: (lineId: number) => void;
}

export function OrderDetailPane({
  selectedOrderId,
  orderDetailQuery,
  selectedLineId,
  allocationTotalAll,
  onSelectLine,
}: OrderDetailPaneProps) {
  if (!selectedOrderId) {
    return (
      <div className="flex flex-[1.35] flex-col overflow-hidden">
        <div className="flex h-full items-center justify-center text-gray-500">
          左ペインから受注を選択してください
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-[1.35] flex-col overflow-hidden">
      {/* ヘッダー */}
      <div className="border-b bg-white p-4">
        <h2 className="text-lg font-semibold">
          受注明細: {orderDetailQuery.data?.order_no || `#${selectedOrderId}`}
        </h2>
        {orderDetailQuery.data && (
          <div className="mt-3 space-y-1 text-sm text-gray-600">
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <span>得意先: {orderDetailQuery.data.customer_name || orderDetailQuery.data.customer_code || "—"}</span>
              <span>納品先: {orderDetailQuery.data.delivery_place_name || orderDetailQuery.data.delivery_place_code || "—"}</span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              <span>受注日: {formatDate(orderDetailQuery.data.order_date, { fallback: "—" })}</span>
              <span>納期: {formatDate(orderDetailQuery.data.due_date ?? undefined, { fallback: "—" })}</span>
            </div>
          </div>
        )}
      </div>

      {/* 明細リスト */}
      <div className="flex-1 overflow-y-auto p-4">
        {orderDetailQuery.isLoading && (
          <div className="py-8 text-center text-gray-500">読み込み中...</div>
        )}

        {orderDetailQuery.isError && (
          <div className="mx-2 my-4 rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-center text-sm font-semibold text-red-800">
              受注詳細の取得に失敗しました
            </p>
            <p className="mt-1 text-center text-xs text-red-600">
              {orderDetailQuery.error instanceof Error
                ? orderDetailQuery.error.message
                : "サーバーエラーが発生しました"}
            </p>
          </div>
        )}

        {orderDetailQuery.data?.lines && orderDetailQuery.data.lines.length > 0 && (
          <div className="space-y-2">
            {orderDetailQuery.data.lines.map((line: OrderLine) => {
              const lineId = Number(line.id);

              return (
                <OrderLineCard
                  key={line.id}
                  line={line}
                  isSelected={
                    Number.isFinite(lineId) && selectedLineId != null
                      ? lineId === Number(selectedLineId)
                      : line.id === selectedLineId
                  }
                  onClick={() => onSelectLine(Number.isFinite(lineId) ? lineId : line.id)}
                  pendingAllocatedQty={
                    Number.isFinite(lineId) &&
                    selectedLineId != null &&
                    lineId === Number(selectedLineId)
                      ? allocationTotalAll
                      : 0
                  }
                />
              );
            })}
          </div>
        )}

        {orderDetailQuery.data?.lines && orderDetailQuery.data.lines.length === 0 && (
          <div className="py-8 text-center text-gray-500">明細がありません</div>
        )}
      </div>
    </div>
  );
}
