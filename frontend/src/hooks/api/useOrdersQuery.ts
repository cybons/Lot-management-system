/**
 * 受注一覧取得フック
 * 
 * 受注管理画面で使用するデータ取得ロジックを集約
 */

import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { listOrders, getOrderDetail } from '@/services/api/order-service';
import { QUERY_KEYS } from '@/services/api/query-keys';
import type { Order, OrderDetail } from '@/utils/validators/order-schemas';

/**
 * 受注一覧取得の検索パラメータ
 */
export interface OrderQueryParams {
  /** 得意先コード */
  customerCode?: string;
  /** ステータス */
  status?: string;
  /** 製品コード */
  productCode?: string;
  /** 検索キーワード */
  search?: string;
  /** 納期開始日 */
  dueDateFrom?: string;
  /** 納期終了日 */
  dueDateTo?: string;
  /** 未引当のみ */
  unallocatedOnly?: boolean;
}

/**
 * 受注一覧を取得するフック
 * 
 * @param params - 検索パラメータ
 * @param options - React Query オプション
 * @returns 受注一覧のクエリ結果
 * 
 * @example
 * ```tsx
 * const { data: orders, isLoading } = useOrdersQuery({
 *   status: 'open',
 *   unallocatedOnly: true
 * });
 * ```
 */
export function useOrdersQuery(
  params: OrderQueryParams = {},
  options?: {
    enabled?: boolean;
    staleTime?: number;
    refetchInterval?: number;
  }
): UseQueryResult<Order[], Error> {
  return useQuery({
    queryKey: QUERY_KEYS.orders.list(params),
    queryFn: async () => {
      const orders = await listOrders();
      
      // クライアント側でフィルタリング
      let filtered = orders;
      
      if (params.customerCode) {
        filtered = filtered.filter(order => 
          order.customer_code === params.customerCode
        );
      }
      
      if (params.status) {
        filtered = filtered.filter(order => 
          order.status === params.status
        );
      }
      
      if (params.search) {
        const searchLower = params.search.toLowerCase();
        filtered = filtered.filter(order => 
          order.order_no.toLowerCase().includes(searchLower) ||
          order.customer_code.toLowerCase().includes(searchLower) ||
          order.customer_name?.toLowerCase().includes(searchLower)
        );
      }
      
      if (params.dueDateFrom) {
        filtered = filtered.filter(order => 
          order.due_date && order.due_date >= params.dueDateFrom!
        );
      }
      
      if (params.dueDateTo) {
        filtered = filtered.filter(order => 
          order.due_date && order.due_date <= params.dueDateTo!
        );
      }
      
      if (params.unallocatedOnly) {
        filtered = filtered.filter(order => {
          // lines が存在し、未引当の明細がある受注のみ
          if (!order.lines || order.lines.length === 0) return false;
          
          return order.lines.some(line => {
            const allocated = line.allocated_lots?.reduce(
              (sum, alloc) => sum + (alloc.allocated_qty || 0),
              0
            ) || 0;
            return line.quantity > allocated;
          });
        });
      }
      
      return filtered;
    },
    staleTime: options?.staleTime ?? 30000, // 30秒
    refetchInterval: options?.refetchInterval,
    enabled: options?.enabled ?? true,
  });
}

/**
 * 受注詳細を取得するフック
 * 
 * @param orderId - 受注ID
 * @param options - React Query オプション
 * @returns 受注詳細のクエリ結果
 * 
 * @example
 * ```tsx
 * const { data: order, isLoading } = useOrderDetailQuery(123);
 * ```
 */
export function useOrderDetailQuery(
  orderId: number | undefined,
  options?: {
    enabled?: boolean;
  }
): UseQueryResult<OrderDetail, Error> {
  return useQuery({
    queryKey: QUERY_KEYS.orders.detail(orderId!),
    queryFn: () => getOrderDetail(orderId!),
    enabled: (options?.enabled ?? true) && !!orderId,
    staleTime: 10000, // 10秒（詳細はリアルタイム性重視）
  });
}

/**
 * 得意先別の受注一覧を取得するフック
 * 
 * @param customerCode - 得意先コード
 * @returns 受注一覧のクエリ結果
 */
export function useOrdersByCustomerQuery(
  customerCode: string | undefined
): UseQueryResult<Order[], Error> {
  return useOrdersQuery(
    { customerCode },
    { enabled: !!customerCode }
  );
}

/**
 * 未引当の受注一覧を取得するフック
 * 
 * @returns 未引当受注一覧のクエリ結果
 */
export function useUnallocatedOrdersQuery(): UseQueryResult<Order[], Error> {
  return useOrdersQuery(
    { unallocatedOnly: true, status: 'open' },
    { refetchInterval: 30000 } // 30秒ごとに自動更新
  );
}

/**
 * 受注統計情報を計算するヘルパー関数
 */
export function calculateOrderStats(orders: Order[]) {
  const totalOrders = orders.length;
  const openOrders = orders.filter(o => o.status === 'open').length;
  const allocatedOrders = orders.filter(o => o.status === 'allocated').length;
  const shippedOrders = orders.filter(o => o.status === 'shipped').length;
  
  // 総数量の計算
  const totalQuantity = orders.reduce((sum, order) => {
    const orderQty = order.lines?.reduce(
      (lineSum, line) => lineSum + line.quantity,
      0
    ) || 0;
    return sum + orderQty;
  }, 0);
  
  // 未引当数量の計算
  const unallocatedQuantity = orders.reduce((sum, order) => {
    const unallocQty = order.lines?.reduce((lineSum, line) => {
      const allocated = line.allocated_lots?.reduce(
        (allocSum, alloc) => allocSum + (alloc.allocated_qty || 0),
        0
      ) || 0;
      return lineSum + (line.quantity - allocated);
    }, 0) || 0;
    return sum + unallocQty;
  }, 0);
  
  return {
    totalOrders,
    openOrders,
    allocatedOrders,
    shippedOrders,
    totalQuantity,
    unallocatedQuantity,
    allocationRate: totalQuantity > 0 
      ? ((totalQuantity - unallocatedQuantity) / totalQuantity) * 100 
      : 0,
  };
}

/**
 * 受注明細の引当状況を計算するヘルパー関数
 */
export function calculateLineAllocationStatus(
  quantity: number,
  allocatedLots?: Array<{ allocated_qty: number }>
) {
  const allocated = allocatedLots?.reduce(
    (sum, alloc) => sum + (alloc.allocated_qty || 0),
    0
  ) || 0;
  
  const unallocated = quantity - allocated;
  const allocationRate = quantity > 0 ? (allocated / quantity) * 100 : 0;
  
  return {
    quantity,
    allocated,
    unallocated,
    allocationRate,
    isFullyAllocated: unallocated === 0,
    isPartiallyAllocated: allocated > 0 && unallocated > 0,
    isUnallocated: allocated === 0,
  };
}
