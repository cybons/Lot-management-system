/**
 * ロット取得用のカスタムフック
 */

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// ロットの型定義
export interface Lot {
  id: number;
  lot_number: string;
  product_code: string;
  warehouse_id?: number;
  warehouse_code?: string;
  expiry_date?: string;
  receipt_date?: string;
  current_stock?: {
    current_quantity: number;
  };
}

/**
 * ロット一覧を取得
 * @param productCode 商品コード（フィルタ用）
 */
export const useLotsQuery = (productCode?: string) => {
  return useQuery({
    queryKey: ["lots", productCode],
    queryFn: async () => {
      const params = productCode ? { product_code: productCode } : {};
      const response = await axios.get<Lot[]>("/api/lots", { params });
      return response.data;
    },
    enabled: !!productCode, // 商品コードがある場合のみクエリを実行
  });
};
