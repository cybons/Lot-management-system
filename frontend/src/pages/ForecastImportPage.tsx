import { Upload, FileText } from "lucide-react";
import { ForecastFileUploadCard } from "@/features/forecast/components/ForecastFileUploadCard";

export function ForecastImportPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Upload className="h-8 w-8 text-blue-600" />
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Forecast インポート</h2>
          <p className="text-muted-foreground">需要予測データをCSVファイルからインポートします</p>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 card-shadow">
        <ForecastFileUploadCard />
      </div>

      <div className="rounded-lg border bg-card p-6 card-shadow">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-semibold">CSVフォーマット</h3>
        </div>
        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
          <div>product_code,forecast_date,quantity</div>
          <div>PROD-001,2025-01-01,100</div>
          <div>PROD-002,2025-01-01,200</div>
        </div>
      </div>
    </div>
  );
}
