/**
 * Type definitions for lot allocation feature
 */

import type { components } from "@/types/api";

export type OrderLine = components["schemas"]["OrderLineOut"];

export type PriorityLevel = "urgent" | "warning" | "attention" | "allocated" | "inactive";

export interface Order {
  id: number;
  order_no: string;
  customer_code: string | null;
  customer_name?: string;
  order_date: string;
  due_date?: string | null;
  delivery_place_code?: string | null;
  delivery_place_name?: string | null;
  delivery_place?: string | null;
  total_quantity?: number | null;
  ship_to?: string;
  status: string;
  lines?: OrderLine[];
}

export interface OrderCardData extends Order {
  priority: PriorityLevel;
  unallocatedQty: number;
  daysTodue: number | null;
  hasMissingFields: boolean;
  totalQuantity: number;
  primaryDeliveryPlace?: string | null;
}

export type WarehouseSummary = {
  key: string;
  warehouseId?: number;
  warehouseCode?: string | null;
  warehouseName?: string | null;
  totalStock: number;
};
