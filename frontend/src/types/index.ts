export interface Lot {
  id: number
  name: string
  quantity: number
  status: LotStatus
  description?: string
  created_at: string
  updated_at: string
}

export type LotStatus = "pending" | "in_progress" | "completed" | "cancelled"

export interface LotCreate {
  name: string
  quantity: number
  status?: LotStatus
  description?: string
}

export interface LotUpdate {
  name?: string
  quantity?: number
  status?: LotStatus
  description?: string
}

export interface Shipping {
  id: number
  lot_id: number
  destination: string
  shipping_date: string
  quantity: number
  status: ShippingStatus
  tracking_number?: string
}

export type ShippingStatus = "preparing" | "in_transit" | "delivered"

export interface Alert {
  id: number
  type: AlertType
  lot_id: number
  message: string
  created_at: string
  acknowledged: boolean
}

export type AlertType = "expired" | "expiring_soon" | "low_stock"
