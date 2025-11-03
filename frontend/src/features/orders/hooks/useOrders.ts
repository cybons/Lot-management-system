import { useQuery } from "@tanstack/react-query";
import * as ordersApi from "@/features/orders/api";
import type {
  OrdersListParams,
  OrderResponse,
  OrderWithLinesResponse,
  OrdersWithAllocResponse,
} from "@/types";

const keys = {
  orders: (params: OrdersListParams) => ["orders", params] as const,
  order: (id: number) => ["orders", "detail", id] as const,
  withAlloc: () => ["orders", "with-alloc"] as const,
};

export function useOrdersList(params: OrdersListParams) {
  return useQuery({
    queryKey: keys.orders(params),
    queryFn: () => ordersApi.getOrders(params),
  });
}

export function useOrder(orderId: number | undefined) {
  return useQuery<OrderWithLinesResponse>({
    queryKey: keys.order(orderId ?? 0),
    queryFn: () => ordersApi.getOrder(orderId as number),
    enabled: !!orderId,
  });
}

export function useOrdersWithAllocations() {
  return useQuery<OrdersWithAllocResponse>({
    queryKey: keys.withAlloc(),
    queryFn: () => ordersApi.getOrdersWithAllocations(),
  });
}
