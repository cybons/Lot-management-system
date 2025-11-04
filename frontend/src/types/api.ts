/**
 * 共通の型定義
 * バックエンドAPIのレスポンス型定義
 */

// ===== 受注関連 =====
export interface Order {
  id: number;
  order_no: string;
  customer_code: string;
  order_date: string;
  status?: string;
  lines: OrderLine[];
}

export interface OrderLine {
  id: number;
  line_no: number;
  product_code: string;
  quantity: number;
  unit: string;
  allocated_qty?: number;
  allocations?: Allocation[];
}

// ===== 引当関連 =====
export interface Allocation {
  id: number;
  order_line_id: number;
  lot_id: number;
  allocated_qty: number;
  created_at?: string;
}

export interface DragAssignRequest {
  order_line_id: number;
  lot_id: number;
  allocate_qty: number;
}

export interface DragAssignResponse {
  success: boolean;
  message: string;
  allocation_id?: number;
}

// ===== ロット関連 =====
export interface Lot {
  id: number;
  lot_number: string;
  product_code: string;
  warehouse_id?: number;
  warehouse_code?: string;
  expiry_date?: string;
  receipt_date?: string;
  current_stock?: LotCurrentStock;
}

export interface LotCurrentStock {
  lot_id: number;
  current_quantity: number;
  updated_at?: string;
}

// ===== その他 =====
export interface ApiError {
  detail: string;
}
