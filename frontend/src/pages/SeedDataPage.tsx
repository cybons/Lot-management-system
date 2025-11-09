// frontend/src/features/admin/pages/SeedDataPage.tsx
import * as React from "react";
import { useMutation } from "@tanstack/react-query";
import { postSeeds, type SeedRequest, type SeedResponse } from "../api/admin-seeds";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SeedDataPage() {
  const { toast } = useToast();
  const [form, setForm] = React.useState<SeedRequest>({
    seed: 42,
    dry_run: false,
    customers: 10,
    products: 20,
    warehouses: 3,
    lots: 80,
    orders: 25,
  });

  const mut = useMutation({
    mutationFn: (payload: SeedRequest) => postSeeds(payload),
    onSuccess: (res: SeedResponse) => {
      toast({
        title: res.dry_run ? "Dry Run 完了" : "投入完了",
        description: `customers:${res.summary.customers}, products:${res.summary.products}, warehouses:${res.summary.warehouses}, lots:${res.summary.lots}, orders:${res.summary.orders}, lines:${res.summary.order_lines}, alloc:${res.summary.allocations}`,
      });
    },
    onError: (err: any) => {
      toast({ title: "失敗", description: String(err), variant: "destructive" });
    },
  });

  const onChangeNum = (key: keyof SeedRequest) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((s) => ({ ...s, [key]: Number(e.target.value || 0) }));

  return (
    <div className="p-6 grid gap-4 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>Seed Test Data</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Seed</Label>
              <Input type="number" value={form.seed ?? 42} onChange={onChangeNum("seed")} />
            </div>
            <div className="flex items-end gap-2">
              <Switch
                checked={!!form.dry_run}
                onCheckedChange={(v) => setForm((s) => ({ ...s, dry_run: v }))}
                id="dryrun"
              />
              <Label htmlFor="dryrun">Dry Run</Label>
            </div>
            <div>
              <Label>Customers</Label>
              <Input
                type="number"
                value={form.customers ?? 0}
                onChange={onChangeNum("customers")}
              />
            </div>
            <div>
              <Label>Products</Label>
              <Input type="number" value={form.products ?? 0} onChange={onChangeNum("products")} />
            </div>
            <div>
              <Label>Warehouses</Label>
              <Input
                type="number"
                value={form.warehouses ?? 0}
                onChange={onChangeNum("warehouses")}
              />
            </div>
            <div>
              <Label>Lots</Label>
              <Input type="number" value={form.lots ?? 0} onChange={onChangeNum("lots")} />
            </div>
            <div>
              <Label>Orders</Label>
              <Input type="number" value={form.orders ?? 0} onChange={onChangeNum("orders")} />
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={() => mut.mutate(form)} disabled={mut.isPending}>
              {form.dry_run ? "プレビュー実行" : "投入する"}
            </Button>
            <Button variant="outline" onClick={() => setForm({ ...form, dry_run: true })}>
              Dry Runに切替
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
