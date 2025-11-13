/**
 * 倉庫別配分（= 今は delivery_place 単位）の管理フック
 * - サマリ集計キー: delivery_place_code -> delivery_place_id -> lot.id
 * - 数値化は toQty に統一
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { toQty } from "../utils/qty";
import type { WarehouseSummary } from "../types";
import type { AllocationInputItem } from "@/features/allocations/api";
import type { Lot as CandidateLot } from "@/hooks/useLotsQuery";

export function useWarehouseAllocations(
  candidateLots: CandidateLot[] = [],
  selectedLineId: number | null,
) {
  const [warehouseAllocations, setWarehouseAllocations] = useState<Record<string, number>>({});
  const lastSelectedLineIdRef = useRef<number | null>(null);

  // delivery_place 単位でサマリ集計
  const warehouseSummaries: WarehouseSummary[] = useMemo(() => {
    const map = new Map<string, WarehouseSummary>();
    for (const lot of candidateLots ?? []) {
      const key = String(lot.delivery_place_code ?? (lot as any).delivery_place_id ?? lot.id);
      const existing =
        map.get(key) ??
        ({
          key,
          warehouseId: (lot as any).delivery_place_id ?? undefined,
          warehouseCode: lot.delivery_place_code ?? null,
          warehouseName: lot.delivery_place_name ?? lot.warehouse_name ?? null,
          totalStock: 0,
        } as WarehouseSummary);

      existing.totalStock += toQty(lot.free_qty ?? lot.current_quantity);
      map.set(key, existing);
    }
    return Array.from(map.values());
  }, [candidateLots]);

  // 明細切替時は配分初期化／同一なら維持
  useEffect(() => {
    const lineChanged = lastSelectedLineIdRef.current !== (selectedLineId ?? null);
    setWarehouseAllocations((prev) => {
      const next: Record<string, number> = {};
      for (const w of warehouseSummaries) {
        next[w.key] = lineChanged ? 0 : (prev[w.key] ?? 0);
      }
      return next;
    });
    if (lineChanged) lastSelectedLineIdRef.current = selectedLineId ?? null;
  }, [selectedLineId, warehouseSummaries]);

  // 保存用の配分リスト
  const allocationList: AllocationInputItem[] = useMemo(() => {
    return warehouseSummaries
      .map((w) => ({
        lotId: 0, // TODO: ロット選択実装時に差し替え
        lot: null,
        delivery_place_id: w.warehouseId ?? null,
        delivery_place_code: w.warehouseCode,
        quantity: Number(warehouseAllocations[w.key] ?? 0),
      }))
      .filter((x) => x.quantity > 0);
  }, [warehouseSummaries, warehouseAllocations]);

  // 合計
  const allocationTotalAll = useMemo(() => {
    return Object.values(warehouseAllocations).reduce(
      (a, b) => a + (Number.isFinite(b) ? Number(b) : 0),
      0,
    );
  }, [warehouseAllocations]);

  return {
    warehouseAllocations,
    setWarehouseAllocations,
    warehouseSummaries,
    allocationList,
    allocationTotalAll,
  };
}
