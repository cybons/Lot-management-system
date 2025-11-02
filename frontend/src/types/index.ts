// v2.0 API (backend/app/schemas/inventory.py)
export interface LotResponse {
  id: number;
  supplier_code: string;
  product_code: string;
  product_name?: string; // 4.1で追加
  lot_number: string;
  receipt_date: string; // YYYY-MM-DD
  mfg_date?: string;
  expiry_date?: string;
  warehouse_code?: string;
  current_stock?: number;
  created_at: string;
  updated_at?: string;
}

// v2.0 API (backend/app/schemas/inventory.py)
export interface LotCreate {
  supplier_code: string;
  product_code: string;
  lot_number: string;
  receipt_date: string; // YYYY-MM-DD
  mfg_date?: string;
  expiry_date?: string;
  warehouse_code?: string;
}

// v2.0 API (backend/app/schemas/masters.py)
export interface Product {
  product_code: string;
  product_name: string;
  internal_unit: string;
  requires_lot_number: number;
}

// v2.0 API (backend/app/schemas/masters.py)
export interface Supplier {
  supplier_code: string;
  supplier_name: string;
}

// v2.0 API (backend/app/schemas/masters.py)
export interface Warehouse {
  warehouse_code: string;
  warehouse_name: string;
  is_active: number;
}

// v2.0 API (backend/app/schemas/admin.py)
export interface DashboardStatsResponse {
  total_stock: number;
  total_orders: number;
  unallocated_orders: number;
}

// v2.0 API (backend/app/schemas/sales.py)
export interface OrderResponse {
  id: number;
  order_no: string;
  customer_code: string;
  order_date?: string; // YYYY-MM-DD
  status: string;
  sap_order_id?: string;
  created_at: string;
  updated_at?: string;
}

export interface OrderLineResponse {
  id: number;
  order_id: number;
  line_no: number;
  product_code: string;
  quantity: number;
  unit?: string;
  due_date?: string; // YYYY-MM-DD
  created_at: string;
  allocated_qty?: number; // 引当済数量 (GET /orders/{id} で付与)
}

export interface OrderWithLinesResponse extends OrderResponse {
  lines: OrderLineResponse[];
}
// 既存の型定義に追加する内容

// ===== Dashboard =====
export interface DashboardStats {
  total_stock: number;
  total_orders: number;
  unallocated_orders: number;
}

// ===== Orders =====
export interface Order {
  id: number;
  order_no: string;
  customer_code: string;
  order_date: string;
  due_date: string | null;
  status: string;
  remarks: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderLine {
  id: number;
  order_id: number;
  line_no: number;
  product_code: string;
  quantity: number;
  unit: string;
  due_date: string | null;
  remarks: string | null;
  allocated_qty: number;
  // Forecast関連
  forecast_id: number | null;
  forecast_granularity: string | null;
  forecast_match_status: string | null;
  forecast_qty: number | null;
  forecast_version_no: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderWithLines extends Order {
  lines: OrderLine[];
}

export interface OrdersListParams {
  skip?: number;
  limit?: number;
  status?: string;
  customer_code?: string;
  date_from?: string;
  date_to?: string;
  q?: string; // 検索クエリ
  page?: number;
  page_size?: number;
}

// ===== Forecast =====
export interface ForecastBulkItem {
  product_code: string;
  client_code: string;
  granularity: "daily" | "dekad" | "monthly";
  date_day?: string;
  date_dekad_start?: string;
  year_month?: string;
  forecast_qty: number;
  version_no: string;
}

export interface ForecastBulkRequest {
  forecasts: ForecastBulkItem[];
}

export interface ForecastBulkResponse {
  success: boolean;
  message: string;
  imported_count: number;
  skipped_count: number;
  error_count: number;
  errors?: Array<{
    index: number;
    product_code: string;
    error: string;
  }>;
}

// ===== Re-match =====
export interface ReMatchResponse {
  id: number;
  order_no: string;
  lines: OrderLine[];
  created_at: string;
  updated_at: string;
}

// ===== API Response Base =====
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
}
// 既存のtypes/index.tsに追加する型定義

// ===== 倉庫配分 =====
export interface WarehouseAllocation {
  warehouse_code: string;
  warehouse_name?: string;
  allocated_quantity: number;
  unit: string;
}

// ===== 拡張された受注明細（倉庫配分情報付き） =====
export interface OrderLineWithAllocations extends OrderLine {
  warehouse_allocations?: WarehouseAllocation[];
}

// ===== 拡張された受注（倉庫配分情報付き） =====
export interface OrderWithAllocations extends Order {
  lines: OrderLineWithAllocations[];
}

// ===== Forecast一覧表示用 =====
export interface ForecastListItem {
  id: number;
  product_code: string;
  product_name?: string;
  client_code: string;
  client_name?: string;
  supplier_code?: string;
  supplier_name?: string;
  granularity: "daily" | "dekad" | "monthly";
  version_no: string;
  is_active: boolean;
  updated_at: string;
  // 日別データ（最大31日分）
  daily_data?: { [day: number]: number };
  // 旬別データ
  dekad_data?: {
    early: number; // 上旬
    middle: number; // 中旬
    late: number; // 下旬
  };
  // 月別データ（最大12ヶ月分）
  monthly_data?: { [month: string]: number };
}

// ===== Forecast一覧のフィルターパラメータ =====
export interface ForecastListParams {
  product_code?: string;
  product_name?: string;
  client_code?: string;
  supplier_code?: string;
  version_no?: string;
  is_active?: boolean;
  skip?: number;
  limit?: number;
}

// ===== Forecast詳細（展開時） =====
export interface ForecastDetail extends ForecastListItem {
  version_history?: Array<{
    version_no: string;
    updated_at: string;
  }>;
}

// ===== 倉庫マスタ =====
export interface Warehouse {
  warehouse_code: string;
  warehouse_name: string;
  location?: string;
  is_active: number; // 1: 有効, 0: 無効
}

// ===== ロット情報（受注カード用） =====
export interface LotForOrder {
  id: number;
  lot_number: string;
  supplier_code: string;
  supplier_name?: string;
  product_code: string;
  expiry_date: string | null;
  available_quantity: number;
  unit: string;
  warehouse_code: string;
}
