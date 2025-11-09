/**
 * ダッシュボードページ
 * GET /api/admin/stats を使用して統計情報を表示
 */

import { useQuery } from "@tanstack/react-query";
import { Package, ShoppingCart, AlertCircle, Activity } from "lucide-react";

import { api } from "@/services/api";

export function DashboardPage() {
  const {
    data: stats,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: api.getDashboardStats,
    // エラー時も表示を崩さないように
    retry: 1,
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">ダッシュボード</h2>
          <p className="text-muted-foreground">システムの概要と重要な指標を確認できます</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <StatCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">ダッシュボード</h2>
          <p className="text-muted-foreground">システムの概要と重要な指標を確認できます</p>
        </div>
        <div className="rounded-lg border border-destructive bg-destructive/10 p-4">
          <p className="text-destructive">統計データの読み込みに失敗しました</p>
        </div>
      </div>
    );
  }

  // データがない場合は0を表示
  const totalStock = stats?.total_stock ?? 0;
  const totalOrders = stats?.total_orders ?? 0;
  const unallocatedOrders = stats?.unallocated_orders ?? 0;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">ダッシュボード</h2>
        <p className="text-muted-foreground">システムの概要と重要な指標を確認できます</p>
      </div>

      {/* KPIカード - バックエンドのスキーマに合わせて3つ */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="総在庫数"
          value={Number(totalStock) || 0}
          colorClass="border-blue-500"
          description="現在の総在庫量"
          icon={<Package className="h-5 w-5 text-blue-600" />}
        />
        <StatCard
          title="総受注数"
          value={Number(totalOrders) || 0}
          colorClass="border-green-500"
          description="登録された受注の総数"
          icon={<ShoppingCart className="h-5 w-5 text-green-600" />}
        />
        <StatCard
          title="未引当受注"
          value={Number(unallocatedOrders) || 0}
          colorClass="border-amber-500"
          description="引当が必要な受注件数"
          icon={<AlertCircle className="h-5 w-5 text-amber-600" />}
        />
      </div>

      <div className="rounded-lg border bg-card p-6 card-shadow">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold">最近の活動</h3>
        </div>
        <p className="text-sm text-muted-foreground">アクティビティログは準備中です...</p>
      </div>
    </div>
  );
}

// ===== StatCard コンポーネント =====
interface StatCardProps {
  title: string;
  value: number;
  colorClass: string;
  description?: string;
  icon?: React.ReactNode;
}

function StatCard({ title, value, colorClass, description, icon }: StatCardProps) {
  return (
    <div
      className={`rounded-lg border-l-4 bg-card p-6 text-card-foreground card-shadow ${colorClass}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col space-y-1.5">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <p className="text-2xl font-bold">{value.toLocaleString()}</p>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
        </div>
        {icon && <div className="mt-1">{icon}</div>}
      </div>
    </div>
  );
}

// ===== Skeleton コンポーネント =====
function StatCardSkeleton() {
  return (
    <div className="rounded-lg border border-l-4 border-gray-300 bg-card p-6 text-card-foreground card-shadow animate-pulse">
      <div className="flex flex-col space-y-1.5">
        <div className="h-4 w-24 bg-muted rounded"></div>
        <div className="h-8 w-16 bg-muted rounded"></div>
      </div>
    </div>
  );
}
