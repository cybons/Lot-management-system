import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  Package,
  TrendingUp,
  Calendar,
  FileText,
} from "lucide-react";

export default function ForecastListPage() {
  const [productFilter, setProductFilter] = useState("");
  const [supplierFilter, setSupplierFilter] = useState("");
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  // モックデータ（実際のAPIに置き換え）
  const { data: forecasts, isLoading } = useQuery({
    queryKey: ["forecasts", { productFilter, supplierFilter }],
    queryFn: async () => {
      // TODO: 実際のAPI呼び出しに置き換え
      return mockForecasts;
    },
  });

  const toggleExpand = (forecastId: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(forecastId)) {
      newExpanded.delete(forecastId);
    } else {
      newExpanded.add(forecastId);
    }
    setExpandedCards(newExpanded);
  };

  if (isLoading) {
    return <div className="p-8">読み込み中...</div>;
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Forecast一覧</h2>
          <p className="text-muted-foreground">需要予測データを確認できます</p>
        </div>
        <Button onClick={() => (window.location.href = "/forecast/import")}>
          インポート
        </Button>
      </div>

      {/* フィルター */}
      <div className="flex gap-4">
        <Input
          placeholder="品名で検索..."
          value={productFilter}
          onChange={(e) => setProductFilter(e.target.value)}
          className="max-w-md"
        />
        <Input
          placeholder="仕入先で検索..."
          value={supplierFilter}
          onChange={(e) => setSupplierFilter(e.target.value)}
          className="max-w-md"
        />
      </div>

      {/* Forecastカード一覧 */}
      <div className="space-y-4">
        {forecasts?.map((forecast) => (
          <ForecastCard
            key={forecast.id}
            forecast={forecast}
            isExpanded={expandedCards.has(forecast.id)}
            onToggleExpand={() => toggleExpand(forecast.id)}
          />
        ))}
      </div>
    </div>
  );
}

// Forecastカードコンポーネント
function ForecastCard({ forecast, isExpanded, onToggleExpand }: any) {
  const isNew =
    new Date(forecast.updated_at) > new Date(Date.now() - 24 * 60 * 60 * 1000);

  return (
    <div className="rounded-lg border bg-card shadow-sm">
      {/* カードヘッダー */}
      <div className="border-b bg-muted/50 p-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold">
                品番: {forecast.product_code} | 品名: {forecast.product_name}
              </span>
              {isNew && (
                <Badge variant="default" className="bg-blue-500">
                  🆕 NEW
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>
                得意先: {forecast.client_code} ({forecast.client_name})
              </span>
              <span>|</span>
              <span>
                仕入先: {forecast.supplier_code} ({forecast.supplier_name})
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <FileText className="h-3 w-3" />
              <span>バージョン: {forecast.version_no}</span>
              <span>|</span>
              <Calendar className="h-3 w-3" />
              <span>更新日: {forecast.updated_at}</span>
            </div>
          </div>
        </div>
      </div>

      {/* カードコンテンツ */}
      <div className="p-6 space-y-4">
        {/* 日別データ */}
        {forecast.granularity === "daily" && (
          <DailyDataView data={forecast.daily_data} unit={forecast.unit} />
        )}

        {/* 旬別データ */}
        {forecast.granularity === "dekad" && (
          <DekadDataView data={forecast.dekad_data} unit={forecast.unit} />
        )}

        {/* 月別データ */}
        {forecast.granularity === "monthly" && (
          <MonthlyDataView data={forecast.monthly_data} unit={forecast.unit} />
        )}

        {/* 旬別集計（常に表示） */}
        <DekadSummary data={forecast.dekad_summary} unit={forecast.unit} />

        {/* 展開ボタン */}
        <div className="flex justify-center pt-2">
          <Button variant="ghost" size="sm" onClick={onToggleExpand}>
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                詳細を閉じる
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                詳細を展開
              </>
            )}
          </Button>
        </div>

        {/* 展開コンテンツ */}
        {isExpanded && (
          <div className="border-t pt-4 space-y-4">
            <VersionHistory versions={forecast.version_history} />
          </div>
        )}
      </div>
    </div>
  );
}

// 日別データ表示（給与明細スタイル）
function DailyDataView({ data, unit }: any) {
  const days = Object.keys(data)
    .map(Number)
    .sort((a, b) => a - b);
  const rows = [];

  // 1行10日ずつ表示（Tailwindのgrid-cols-10を使用）
  for (let i = 0; i < days.length; i += 10) {
    rows.push(days.slice(i, i + 10));
  }

  return (
    <div className="rounded-lg border">
      <div className="border-b bg-muted/30 px-4 py-2">
        <h4 className="text-sm font-semibold">日別予測 (2025年11月)</h4>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="space-y-1">
              {/* 日付行 */}
              <div className="grid grid-cols-10 gap-1 text-xs text-center font-medium text-muted-foreground">
                {row.map((day) => (
                  <div key={day} className="px-1">
                    {day}
                  </div>
                ))}
              </div>
              {/* 数量行 */}
              <div className="grid grid-cols-10 gap-1 text-xs text-center">
                {row.map((day) => (
                  <div
                    key={day}
                    className="rounded bg-blue-50 py-1 px-1 font-semibold">
                    {data[day]}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 旬別データ表示
function DekadDataView({ data, unit }: any) {
  return (
    <div className="rounded-lg border">
      <div className="border-b bg-muted/30 px-4 py-2">
        <h4 className="text-sm font-semibold">旬別予測 (2025年11月)</h4>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-4">
          <DekadItem
            label="上旬 (1-10日)"
            value={data.early}
            unit={unit}
            color="blue"
          />
          <DekadItem
            label="中旬 (11-20日)"
            value={data.middle}
            unit={unit}
            color="green"
          />
          <DekadItem
            label="下旬 (21-30日)"
            value={data.late}
            unit={unit}
            color="purple"
          />
        </div>
      </div>
    </div>
  );
}

function DekadItem({ label, value, unit, color }: any) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-900",
    green: "bg-green-50 text-green-900",
    purple: "bg-purple-50 text-purple-900",
  };

  return (
    <div
      className={`rounded-lg p-4 ${
        colorClasses[color as keyof typeof colorClasses]
      }`}>
      <div className="text-xs font-medium mb-2">{label}</div>
      <div className="text-2xl font-bold">
        {value.toLocaleString()}{" "}
        <span className="text-sm font-normal">{unit}</span>
      </div>
    </div>
  );
}

// 月別データ表示
function MonthlyDataView({ data, unit }: any) {
  const months = Object.keys(data).sort();

  return (
    <div className="rounded-lg border">
      <div className="border-b bg-muted/30 px-4 py-2">
        <h4 className="text-sm font-semibold">月別予測 (2025年)</h4>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-6 gap-2">
          {months.map((month) => (
            <div key={month} className="text-center">
              <div className="text-xs text-muted-foreground mb-1">{month}</div>
              <div className="rounded bg-green-50 py-2 text-sm font-semibold">
                {data[month]}
                <span className="text-xs ml-1">{unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 旬別集計
function DekadSummary({ data, unit }: any) {
  return (
    <div className="rounded-lg border border-blue-200 bg-blue-50">
      <div className="border-b border-blue-200 bg-blue-100 px-4 py-2">
        <h4 className="text-sm font-semibold text-blue-900">旬別集計</h4>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xs text-blue-700 mb-1">上旬 (1-10日)</div>
            <div className="text-lg font-bold text-blue-900">
              {data.early.toLocaleString()}{" "}
              <span className="text-sm">{unit}</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-blue-700 mb-1">中旬 (11-20日)</div>
            <div className="text-lg font-bold text-blue-900">
              {data.middle.toLocaleString()}{" "}
              <span className="text-sm">{unit}</span>
            </div>
          </div>
          <div>
            <div className="text-xs text-blue-700 mb-1">下旬 (21-30日)</div>
            <div className="text-lg font-bold text-blue-900">
              {data.late.toLocaleString()}{" "}
              <span className="text-sm">{unit}</span>
            </div>
          </div>
          <div className="border-l border-blue-300">
            <div className="text-xs text-blue-700 mb-1">月合計</div>
            <div className="text-xl font-bold text-blue-900">
              {data.total.toLocaleString()}{" "}
              <span className="text-sm">{unit}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// バージョン履歴
function VersionHistory({ versions }: any) {
  return (
    <div className="rounded-lg border">
      <div className="border-b bg-muted/30 px-4 py-2">
        <h4 className="text-sm font-semibold">バージョン履歴</h4>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          {versions.map((version: any, idx: number) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded bg-muted/50 px-3 py-2 text-sm">
              <span className="font-medium">
                {version.version_no}{" "}
                {idx === 0 && <Badge variant="secondary">現在</Badge>}
              </span>
              <span className="text-muted-foreground">
                {version.updated_at}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// モックデータ
const mockForecasts = [
  {
    id: 1,
    product_code: "PRD-0001",
    product_name: "ウレタン主剤 URIC D-7312 4KG",
    client_code: "CUS001",
    client_name: "得意先A",
    supplier_code: "SUP001",
    supplier_name: "伊藤油",
    granularity: "daily",
    version_no: "v1.0",
    updated_at: "2025/11/02",
    unit: "kg",
    daily_data: {
      1: 100,
      2: 120,
      3: 95,
      4: 110,
      5: 130,
      6: 105,
      7: 115,
      8: 125,
      9: 98,
      10: 108,
      11: 135,
      12: 102,
      13: 118,
      14: 128,
      15: 92,
      16: 112,
      17: 138,
      18: 106,
      19: 122,
      20: 142,
      21: 108,
      22: 126,
      23: 136,
      24: 104,
      25: 116,
      26: 148,
      27: 110,
      28: 132,
      29: 145,
      30: 98,
    },
    dekad_summary: {
      early: 1106,
      middle: 1189,
      late: 1165,
      total: 3460,
    },
    version_history: [
      { version_no: "v1.0", updated_at: "2025/11/02" },
      { version_no: "v0.9", updated_at: "2025/11/01" },
      { version_no: "v0.8", updated_at: "2025/10/31" },
    ],
  },
  {
    id: 2,
    product_code: "PRD-0002",
    product_name: "ブレーキパッド ASY-F",
    client_code: "CUS001",
    client_name: "得意先A",
    supplier_code: "SUP002",
    supplier_name: "サプライヤーB",
    granularity: "monthly",
    version_no: "v1.1",
    updated_at: "2025/11/01",
    unit: "EA",
    monthly_data: {
      "11月": 500,
      "12月": 480,
      "1月": 520,
      "2月": 510,
      "3月": 495,
      "4月": 530,
    },
    dekad_summary: {
      early: 150,
      middle: 180,
      late: 170,
      total: 500,
    },
    version_history: [
      { version_no: "v1.1", updated_at: "2025/11/01" },
      { version_no: "v1.0", updated_at: "2025/10/30" },
    ],
  },
  {
    id: 3,
    product_code: "PRD-0003",
    product_name: "エンジンオイル 5L缶",
    client_code: "CUS002",
    client_name: "得意先B",
    supplier_code: "SUP001",
    supplier_name: "伊藤油",
    granularity: "dekad",
    version_no: "v2.3",
    updated_at: "2025/11/02",
    unit: "L",
    dekad_data: {
      early: 3000,
      middle: 3500,
      late: 3200,
    },
    dekad_summary: {
      early: 3000,
      middle: 3500,
      late: 3200,
      total: 9700,
    },
    version_history: [
      { version_no: "v2.3", updated_at: "2025/11/02" },
      { version_no: "v2.2", updated_at: "2025/11/01" },
      { version_no: "v2.1", updated_at: "2025/10/31" },
    ],
  },
];
