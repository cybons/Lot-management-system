import { useState } from "react"
import { useCreateLot } from "@/hooks/use-lots"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { LotCreate } from "@/types"

interface AddLotDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddLotDialog({ open, onOpenChange }: AddLotDialogProps) {
  const [formData, setFormData] = useState<LotCreate>({
    name: "",
    quantity: 0,
    status: "pending",
    description: "",
  })

  const createLot = useCreateLot()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await createLot.mutateAsync(formData)
      onOpenChange(false)
      // フォームをリセット
      setFormData({
        name: "",
        quantity: 0,
        status: "pending",
        description: "",
      })
    } catch (error) {
      console.error("Failed to create lot:", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>新規ロット登録</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">ロット名 *</Label>
            <Input
              id="name"
              placeholder="製品名を入力"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">数量 *</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="数量を入力"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  quantity: parseFloat(e.target.value) || 0,
                })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">ステータス</Label>
            <select
              id="status"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={formData.status}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: e.target.value as any,
                })
              }
            >
              <option value="pending">保留中</option>
              <option value="in_progress">処理中</option>
              <option value="completed">完了</option>
              <option value="cancelled">キャンセル</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">備考</Label>
            <textarea
              id="description"
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="備考を入力"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="secondary"
              onClick={() => onOpenChange(false)}
            >
              キャンセル
            </Button>
            <Button type="submit" disabled={createLot.isPending}>
              {createLot.isPending ? "登録中..." : "登録"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
