import React from "react";
import type { LotCandidate, WarehouseAlloc } from "@/types";

type Props = {
  open: boolean;
  onClose: () => void;

  orderLineId: number | null;

  candidates: LotCandidate[];
  onAllocate: (payload: { items: { lot_id: number; qty: number }[] }) => void;
  onCancelAllocations: (payload: any) => void; // AllocationCancelRequest（後続で型差し替え）
  onSaveWarehouseAllocations: (allocs: WarehouseAlloc[]) => void;
};

export default function LotAllocationPanel({
  open,
  onClose,
  orderLineId,
  candidates,
  onAllocate,
  onCancelAllocations,
  onSaveWarehouseAllocations,
}: Props) {
  const [selected, setSelected] = React.useState<Record<number, number>>({}); // lotId -> qty
  const [wareAlloc, setWareAlloc] = React.useState<WarehouseAlloc[]>([]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
      <div className="bg-white w-[860px] max-h-[80vh] overflow-auto rounded-2xl p-4 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">
            行ID: {orderLineId ?? "-"}
          </div>
          <button className="px-3 py-1 rounded border" onClick={onClose}>
            閉じる
          </button>
        </div>

        <div className="mt-3">
          <div className="text-sm text-gray-500 mb-1">候補ロット</div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-1">LotID</th>
                <th className="py-1">ロット番号</th>
                <th className="py-1">在庫数</th>
                <th className="py-1">引当数</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((c) => (
                <tr key={c.lot_id} className="border-t">
                  <td className="py-1">{c.lot_id}</td>
                  <td className="py-1">{c.lot_code}</td>
                  <td className="py-1">{c.stock_qty}</td>
                  <td className="py-1">
                    <input
                      type="number"
                      className="border rounded px-2 py-0.5 w-24"
                      value={selected[c.lot_id] ?? 0}
                      min={0}
                      onChange={(e) =>
                        setSelected((prev) => ({
                          ...prev,
                          [c.lot_id]: Number(e.target.value),
                        }))
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-2 mt-3">
            <button
              className="px-3 py-1 rounded bg-black text-white"
              onClick={() => {
                const items = Object.entries(selected)
                  .filter(([, qty]) => Number(qty) > 0)
                  .map(([lot_id, qty]) => ({
                    lot_id: Number(lot_id),
                    qty: Number(qty),
                  }));
                onAllocate({ items });
              }}>
              引当を実行
            </button>
            <button
              className="px-3 py-1 rounded border"
              onClick={() => onCancelAllocations({ all: true })}>
              引当を取消
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm text-gray-500 mb-1">倉庫別配分</div>
          <div className="flex items-center gap-2">
            <button
              className="px-3 py-1 rounded border"
              onClick={() =>
                setWareAlloc([{ warehouse_id: 1, lot_id: 0, qty: 0 }])
              }>
              行追加
            </button>
            <button
              className="px-3 py-1 rounded bg-gray-800 text-white"
              onClick={() => onSaveWarehouseAllocations(wareAlloc)}>
              保存
            </button>
          </div>
          <div className="mt-2 space-y-2">
            {wareAlloc.map((wa, idx) => (
              <div key={idx} className="flex gap-2">
                <input
                  className="border rounded px-2 py-0.5 w-24"
                  type="number"
                  placeholder="倉庫ID"
                  value={wa.warehouse_id ?? 0}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setWareAlloc((arr) =>
                      arr.map((x, i) =>
                        i === idx ? { ...x, warehouse_id: v } : x
                      )
                    );
                  }}
                />
                <input
                  className="border rounded px-2 py-0.5 w-24"
                  type="number"
                  placeholder="LotID"
                  value={wa.lot_id ?? 0}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setWareAlloc((arr) =>
                      arr.map((x, i) => (i === idx ? { ...x, lot_id: v } : x))
                    );
                  }}
                />
                <input
                  className="border rounded px-2 py-0.5 w-24"
                  type="number"
                  placeholder="数量"
                  value={wa.qty ?? 0}
                  onChange={(e) => {
                    const v = Number(e.target.value);
                    setWareAlloc((arr) =>
                      arr.map((x, i) => (i === idx ? { ...x, qty: v } : x))
                    );
                  }}
                />
                <button
                  className="px-2 py-0.5 rounded border"
                  onClick={() =>
                    setWareAlloc((arr) => arr.filter((_, i) => i !== idx))
                  }>
                  削除
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
