import { useState } from "react"
import { Plus } from "lucide-react"
import { useLots } from "@/hooks/use-lots"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LotTable } from "@/components/lot-table"
import { AddLotDialog } from "@/components/add-lot-dialog"

export function LotsPage() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [lotIdFilter, setLotIdFilter] = useState("")
  const [productFilter, setProductFilter] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("")

  const { data: lots, isLoading, error } = useLots()

  const filteredLots = lots?.filter((lot) => {
    if (lotIdFilter && !lot.id.toString().includes(lotIdFilter)) return false
    if (productFilter && !lot.name.toLowerCase().includes(productFilter.toLowerCase())) return false
    if (statusFilter && lot.status !== statusFilter) return false
    return true
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">ロット一覧</h2>
        <Button onClick={() => setIsAddDialogOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          新規ロット登録
        </Button>
      </div>

      {/* フィルター */}
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <Label htmlFor="filter-lot-id">ロットID</Label>
            <Input
              id="filter-lot-id"
              placeholder="LOT-2024-001"
              value={lotIdFilter}
              onChange={(e) => setLotIdFilter(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="filter-product">製品名</Label>
            <Input
              id="filter-product"
              placeholder="製品名で検索"
              value={productFilter}
              onChange={(e) => setProductFilter(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="filter-status">ステータス</Label>
            <select
              id="filter-status"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">すべて</option>
              <option value="pending">保留中</option>
              <option value="in_progress">処理中</option>
              <option value="completed">完了</option>
              <option value="cancelled">キャンセル</option>
            </select>
          </div>
          <div className="flex items-end">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setLotIdFilter("")
                setProductFilter("")
                setStatusFilter("")
              }}
            >
              リセット
            </Button>
          </div>
        </div>
      </div>

      {/* ロットテーブル */}
      <div className="bg-white border rounded-lg shadow-sm">
        {isLoading ? (
          <div className="p-8 text-center text-muted-foreground">
            読み込み中...
          </div>
        ) : error ? (
          <div className="p-8 text-center text-destructive">
            エラーが発生しました: {error.message}
          </div>
        ) : (
          <LotTable lots={filteredLots || []} />
        )}
      </div>

      <AddLotDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} />
    </div>
  )
}
