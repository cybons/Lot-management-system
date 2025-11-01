import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import { Button } from "@/components/ui/button";
import { DatabaseZap, DatabaseBackup } from "lucide-react";
import sampleData from "@/lib/sample-data.json"; // ステップ2で配置したJSON

export default function AdminPage() {
  const [message, setMessage] = useState<{
    type: "info" | "success" | "error";
    text: string;
  } | null>(null);
  const queryClient = useQueryClient();

  // DBリセット
  const resetMutation = useMutation({
    mutationFn: api.resetDatabase,
    onSuccess: (data) => {
      setMessage({ type: "success", text: `DBリセット成功: ${data.message}` });
      // 全てのクエリを無効化して再取得を促す
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      setMessage({ type: "error", text: `DBリセット失敗: ${error.message}` });
    },
  });

  // サンプルデータ投入
  const loadSampleMutation = useMutation({
    mutationFn: () => api.loadFullSampleData(sampleData),
    onSuccess: (data) => {
      const counts = data.data;
      setMessage({
        type: "success",
        text: `サンプル投入成功: 製品 ${counts.products}, ロット ${counts.lots}, 入荷 ${counts.receipts}, 受注 ${counts.orders} 件`,
      });
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      setMessage({ type: "error", text: `サンプル投入失敗: ${error.message}` });
    },
  });

  const handleReset = () => {
    if (
      window.confirm(
        "本当にデータベースをリセットしますか？全てのデータが削除されます。"
      )
    ) {
      setMessage({ type: "info", text: "DBリセット実行中..." });
      resetMutation.mutate();
    }
  };

  const handleLoadSample = () => {
    setMessage({ type: "info", text: "サンプルデータ投入中..." });
    loadSampleMutation.mutate();
  };

  const isLoading = resetMutation.isPending || loadSampleMutation.isPending;

  return (
    <div className="space-y-6">
      <div className="rounded-lg border bg-card p-6">
        <h3 className="text-lg font-medium">開発者用ツール</h3>
        <p className="text-sm text-muted-foreground mt-2">
          データベースのリセットとサンプルデータの投入を行います (開発環境専用)
        </p>

        {message && (
          <div
            className={`mt-4 rounded-md p-3 text-sm ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : message.type === "error"
                ? "bg-red-100 text-red-800"
                : "bg-blue-100 text-blue-800"
            }`}>
            {message.text}
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Button
            variant="destructive"
            onClick={handleReset}
            disabled={isLoading}>
            <DatabaseZap className="mr-2 h-4 w-4" />
            {resetMutation.isPending ? "リセット中..." : "DBリセット実行"}
          </Button>

          <Button
            variant="default"
            onClick={handleLoadSample}
            disabled={isLoading}>
            <DatabaseBackup className="mr-2 h-4 w-4" />
            {loadSampleMutation.isPending ? "投入中..." : "サンプルデータ投入"}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          ※DBリセット後、自動でマスタデータ（倉庫・得意先・仕入先）が投入されます。
        </p>
      </div>
    </div>
  );
}
