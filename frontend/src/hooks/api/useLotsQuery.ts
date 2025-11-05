/**
 * ロット一覧取得フック
 * 
 * ロット管理画面で使用するデータ取得ロジックを集約
 */

import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { listLotsWithStock } from '@/services/api/lot-service';
import { QUERY_KEYS } from '@/services/api/query-keys';
import type { LotWithStock } from '@/utils/validators/lot-schemas';

/**
 * ロット一覧取得の検索パラメータ
 */
export interface LotQueryParams {
  /** 製品コード */
  productCode?: string;
  /** 倉庫コード */
  warehouseCode?: string;
  /** ステータス */
  status?: string;
  /** 検索キーワード */
  search?: string;
  /** 在庫あり のみ */
  hasStock?: boolean;
}

/**
 * ロット一覧を取得するフック
 * 
 * @param params - 検索パラメータ
 * @param options - React Query オプション
 * @returns ロット一覧のクエリ結果
 * 
 * @example
 * ```tsx
 * const { data: lots, isLoading, error } = useLotsQuery({
 *   productCode: 'P001',
 *   hasStock: true
 * });
 * ```
 */
export function useLotsQuery(
  params: LotQueryParams = {},
  options?: {
    enabled?: boolean;
    staleTime?: number;
    refetchInterval?: number;
  }
): UseQueryResult<LotWithStock[], Error> {
  return useQuery({
    queryKey: QUERY_KEYS.lots.list(params),
    queryFn: async () => {
      const lots = await listLotsWithStock();
      
      // クライアント側でフィルタリング
      let filtered = lots;
      
      if (params.productCode) {
        filtered = filtered.filter(lot => 
          lot.product_code === params.productCode
        );
      }
      
      if (params.warehouseCode) {
        filtered = filtered.filter(lot => 
          lot.warehouse_code === params.warehouseCode
        );
      }
      
      if (params.status) {
        filtered = filtered.filter(lot => 
          lot.status === params.status
        );
      }
      
      if (params.hasStock) {
        filtered = filtered.filter(lot => 
          (lot.current_quantity || 0) > 0
        );
      }
      
      if (params.search) {
        const searchLower = params.search.toLowerCase();
        filtered = filtered.filter(lot => 
          lot.lot_no.toLowerCase().includes(searchLower) ||
          lot.product_code.toLowerCase().includes(searchLower) ||
          lot.product_name?.toLowerCase().includes(searchLower)
        );
      }
      
      return filtered;
    },
    staleTime: options?.staleTime ?? 30000, // 30秒
    refetchInterval: options?.refetchInterval,
    enabled: options?.enabled ?? true,
  });
}

/**
 * 特定のロット詳細を取得するフック
 * 
 * @param lotId - ロットID
 * @param options - React Query オプション
 * @returns ロット詳細のクエリ結果
 * 
 * @example
 * ```tsx
 * const { data: lot, isLoading } = useLotDetailQuery(123);
 * ```
 */
export function useLotDetailQuery(
  lotId: number | undefined,
  options?: {
    enabled?: boolean;
  }
): UseQueryResult<LotWithStock, Error> {
  return useQuery({
    queryKey: QUERY_KEYS.lots.detail(lotId!),
    queryFn: async () => {
      // TODO: 個別取得APIが実装されたら置き換え
      const lots = await listLotsWithStock();
      const lot = lots.find(l => l.id === lotId);
      
      if (!lot) {
        throw new Error(`ロット ID ${lotId} が見つかりません`);
      }
      
      return lot;
    },
    enabled: (options?.enabled ?? true) && !!lotId,
    staleTime: 30000,
  });
}

/**
 * 製品コード別のロット一覧を取得するフック
 * 
 * @param productCode - 製品コード
 * @returns ロット一覧のクエリ結果
 */
export function useLotsByProductQuery(
  productCode: string | undefined
): UseQueryResult<LotWithStock[], Error> {
  return useLotsQuery(
    { productCode, hasStock: true },
    { enabled: !!productCode }
  );
}

/**
 * 引当可能なロット一覧を取得するフック
 * (在庫ありで有効なロットのみ)
 * 
 * @param productCode - 製品コード
 * @returns 引当可能なロット一覧
 */
export function useAllocatableLotsQuery(
  productCode: string | undefined
): UseQueryResult<LotWithStock[], Error> {
  return useQuery({
    queryKey: QUERY_KEYS.lots.allocatable(productCode!),
    queryFn: async () => {
      const lots = await listLotsWithStock();
      
      return lots.filter(lot => 
        lot.product_code === productCode &&
        lot.status === 'active' &&
        (lot.current_quantity || 0) > 0
      );
    },
    enabled: !!productCode,
    staleTime: 10000, // 10秒（リアルタイム性重視）
  });
}

/**
 * ロット統計情報を計算するヘルパー関数
 */
export function calculateLotStats(lots: LotWithStock[]) {
  const totalLots = lots.length;
  const activeLots = lots.filter(lot => lot.status === 'active').length;
  const totalQuantity = lots.reduce((sum, lot) => sum + (lot.current_quantity || 0), 0);
  const averageQuantity = totalLots > 0 ? totalQuantity / totalLots : 0;
  
  return {
    totalLots,
    activeLots,
    totalQuantity,
    averageQuantity,
  };
}
