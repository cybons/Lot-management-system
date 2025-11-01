import { format } from "date-fns"
import type { Lot } from "@/types"
import { Button } from "@/components/ui/button"

interface LotTableProps {
  lots: Lot[]
}

const statusLabels: Record<string, { label: string; className: string }> = {
  pending: { label: "保留中", className: "bg-yellow-100 text-yellow-800" },
  in_progress: { label: "処理中", className: "bg-blue-100 text-blue-800" },
  completed: { label: "完了", className: "bg-green-100 text-green-800" },
  cancelled: { label: "キャンセル", className: "bg-gray-100 text-gray-800" },
}

export function LotTable({ lots }: LotTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="text-left p-4 font-semibold text-sm">ロットID</th>
            <th className="text-left p-4 font-semibold text-sm">製品名</th>
            <th className="text-left p-4 font-semibold text-sm">数量</th>
            <th className="text-left p-4 font-semibold text-sm">ステータス</th>
            <th className="text-left p-4 font-semibold text-sm">作成日</th>
            <th className="text-left p-4 font-semibold text-sm">更新日</th>
            <th className="text-left p-4 font-semibold text-sm">操作</th>
          </tr>
        </thead>
        <tbody>
          {lots.length === 0 ? (
            <tr>
              <td colSpan={7} className="p-8 text-center text-muted-foreground">
                ロットがありません
              </td>
            </tr>
          ) : (
            lots.map((lot) => {
              const status = statusLabels[lot.status]
              return (
                <tr key={lot.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-4 font-medium">LOT-{lot.id}</td>
                  <td className="p-4">{lot.name}</td>
                  <td className="p-4">{lot.quantity}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {format(new Date(lot.created_at), "yyyy-MM-dd")}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {format(new Date(lot.updated_at), "yyyy-MM-dd HH:mm")}
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        詳細
                      </Button>
                      <Button variant="outline" size="sm">
                        編集
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            })
          )}
        </tbody>
      </table>
    </div>
  )
}
