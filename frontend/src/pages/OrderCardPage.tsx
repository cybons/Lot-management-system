import React from "react";
import OrderFilters from "@/features/orders/components/OrderFilters";
import OrderCard from "@/features/orders/components/OrderCard";
import LotAllocationPanel from "@/features/orders/components/LotAllocationPanel";
import { useOrdersList } from "@/features/orders/hooks/useOrders";
import {
  useCandidateLots,
  useCreateAllocations,
  useCancelAllocations,
  useSaveWarehouseAllocations,
  useReMatchOrder,
} from "@/features/orders/hooks/useAllocations";
import type { OrdersListParams } from "@/types";

const DEFAULT_PARAMS: OrdersListParams = { skip: 0, limit: 50 };

export default function OrderCardPage() {
  const [params, setParams] = React.useState<OrdersListParams>(DEFAULT_PARAMS);
  const { data: orders, isLoading, refetch } = useOrdersList(params);

  const [activeOrderId, setActiveOrderId] = React.useState<number | null>(null);
  const [activeLineId, setActiveLineId] = React.useState<number | null>(null);

  const { data: candidates } = useCandidateLots(activeLineId ?? undefined);
  const createAlloc = useCreateAllocations(activeLineId ?? 0, params);
  const cancelAlloc = useCancelAllocations(activeLineId ?? 0);
  const saveWareAlloc = useSaveWarehouseAllocations(activeLineId ?? 0);
  const reMatchOrder = useReMatchOrder(activeOrderId ?? undefined);

  const handleReset = () => setParams(DEFAULT_PARAMS);
  const handleSearch = () => refetch();

  return (
    <div className="space-y-4">
      <OrderFilters
        value={params}
        onChange={setParams}
        onSearch={handleSearch}
        onReset={handleReset}
      />

      {isLoading && (
        <div className="p-3 text-sm text-gray-500">読み込み中…</div>
      )}

      <div className="grid gap-3">
        {(orders ?? []).map((o) => (
          <OrderCard
            key={o.id}
            order={o as any} // OrderWithLinesResponse 相当（APIの返却に合わせてtypes調整可）
            onSelectLine={(lineId) => {
              setActiveOrderId(o.id);
              setActiveLineId(lineId);
            }}
            onReMatch={() => {
              setActiveOrderId(o.id);
              reMatchOrder.mutate();
            }}
          />
        ))}
      </div>

      <LotAllocationPanel
        open={activeLineId != null}
        onClose={() => setActiveLineId(null)}
        orderLineId={activeLineId}
        candidates={candidates?.items ?? []}
        onAllocate={(payload) => createAlloc.mutate(payload)}
        onCancelAllocations={(payload) => cancelAlloc.mutate(payload)}
        onSaveWarehouseAllocations={(allocs) => saveWareAlloc.mutate(allocs)}
      />
    </div>
  );
}
