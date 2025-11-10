/**
 * ドラッグ引当用のカスタムフック
 */

import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

// ドラッグ引当リクエストの型定義
export interface DragAssignRequest {
  order_line_id: number;
  lot_id: number;
  allocate_qty: number;
}

// ドラッグ引当レスポンスの型定義
export interface DragAssignResponse {
  success: boolean;
  message: string;
  allocation_id?: number;
}

/**
 * ドラッグ引当を実行
 */
export const useDragAssign = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (request: DragAssignRequest) => {
      const response = await axios.post<DragAssignResponse>(
        "/api/allocations/drag-assign",
        request,
      );
      return response.data;
    },
    onSuccess: () => {
      // 引当成功時に関連データを再取得
      queryClient.invalidateQueries({ queryKey: ["order"] });
      queryClient.invalidateQueries({ queryKey: ["lots"] });
    },
  });
};
