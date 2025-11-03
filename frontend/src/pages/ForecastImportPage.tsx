import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, CheckCircle2, XCircle, AlertCircle, Code } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ForecastImportPage() {
  const [jsonInput, setJsonInput] = useState("");
  const [result, setResult] = useState<any>(null);
  const { toast } = useToast();

  const importMutation = useMutation({
    mutationFn: (data: any) => api.bulkImportForecast(data),
    onSuccess: (response) => {
      setResult(response);
      if (response.success) {
        toast({
          title: "インポート成功",
          description: `${response.imported_count}件のForecastをインポートしました`,
        });
      } else {
        toast({
          title: "インポート失敗",
          description: response.message || "インポート処理に失敗しました",
          variant: "destructive",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "エラー",
        description: error.message || "通信エラーが発生しました",
        variant: "destructive",
      });
      setResult({
        success: false,
        message: error.message,
        imported_count: 0,
        skipped_count: 0,
        error_count: 0,
      });
    },
  });

  const handleSubmit = () => {
    try {
      const parsed = JSON.parse(jsonInput);

      // 簡易バリデーション
      if (!parsed.forecasts || !Array.isArray(parsed.forecasts)) {
        throw new Error('JSONフォーマットエラー: "forecasts" 配列が必要です');
      }

      importMutation.mutate(parsed);
    } catch (error: any) {
      toast({
        title: "JSONパースエラー",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleLoadSample = () => {
    const sample = {
      forecasts: [
        {
          product_code: "PRD-001",
          client_code: "CUS001",
          granularity: "daily",
          date_day: "2025-11-15",
          forecast_qty: 100.0,
          version_no: "v1.0",
        },
        {
          product_code: "PRD-0002",
          client_code: "CUS001",
          granularity: "monthly",
          year_month: "2025-11",
          forecast_qty: 500.0,
          version_no: "v1.0",
        },
      ],
    };
    setJsonInput(JSON.stringify(sample, null, 2));
  };

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">
          Forecastインポート
        </h2>
        <p className="text-muted-foreground">
          JSON形式でForecastデータを一括インポートできます
        </p>
      </div>

      {/* 入力エリア */}
      <div className="rounded-lg border bg-card p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="json-input">JSONデータ</Label>
            <Button variant="outline" size="sm" onClick={handleLoadSample}>
              <Code className="mr-2 h-4 w-4" />
              サンプルを読み込む
            </Button>
          </div>
          <Textarea
            id="json-input"
            placeholder='{"forecasts": [...]}'
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="font-mono text-sm"
            rows={15}
          />
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {jsonInput.length}文字
            </p>
            <Button
              onClick={handleSubmit}
              disabled={!jsonInput || importMutation.isPending}>
              <Upload className="mr-2 h-4 w-4" />
              {importMutation.isPending ? "インポート中..." : "インポート"}
            </Button>
          </div>
        </div>
      </div>

      {/* 結果表示 */}
      {result && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">インポート結果</h3>

          {/* サマリーカード */}
          <div className="grid gap-4 md:grid-cols-3">
            <ResultCard
              icon={CheckCircle2}
              label="インポート成功"
              value={result.imported_count}
              colorClass="border-l-4 border-l-green-500"
            />
            <ResultCard
              icon={AlertCircle}
              label="スキップ"
              value={result.skipped_count}
              colorClass="border-l-4 border-l-yellow-500"
            />
            <ResultCard
              icon={XCircle}
              label="エラー"
              value={result.error_count}
              colorClass="border-l-4 border-l-destructive"
            />
          </div>

          {/* メッセージ */}
          {result.message && (
            <div
              className={`rounded-lg border p-4 ${
                result.success
                  ? "border-green-200 bg-green-50 text-green-800"
                  : "border-red-200 bg-red-50 text-red-800"
              }`}>
              <p className="text-sm font-medium">{result.message}</p>
            </div>
          )}

          {/* エラー詳細 */}
          {result.errors && result.errors.length > 0 && (
            <div className="rounded-lg border border-destructive bg-destructive/10 p-4">
              <h4 className="mb-2 font-semibold text-destructive">
                エラー詳細
              </h4>
              <div className="space-y-2">
                {result.errors.map((error: any, index: number) => (
                  <div key={index} className="text-sm text-destructive">
                    <span className="font-medium">
                      行{error.index + 1} ({error.product_code}):
                    </span>{" "}
                    {error.error}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 使い方ガイド */}
      <div className="rounded-lg border bg-muted/50 p-6">
        <h3 className="mb-3 text-lg font-semibold">JSONフォーマット</h3>
        <pre className="overflow-x-auto rounded bg-background p-4 text-sm">
          {`{
  "forecasts": [
    {
      "product_code": "PRD-001",
      "client_code": "CUS001",
      "granularity": "daily",        // "daily" | "dekad" | "monthly"
      "date_day": "2025-11-15",      // daily の場合
      "date_dekad_start": null,      // dekad の場合
      "year_month": null,            // monthly の場合 (例: "2025-11")
      "forecast_qty": 100.0,
      "version_no": "v1.0"
    }
  ]
}`}
        </pre>
      </div>
    </div>
  );
}

interface ResultCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  colorClass: string;
}

function ResultCard({ icon: Icon, label, value, colorClass }: ResultCardProps) {
  return (
    <div className={`rounded-lg border bg-card p-4 shadow-sm ${colorClass}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        <Icon className="h-6 w-6 text-muted-foreground" />
      </div>
    </div>
  );
}
