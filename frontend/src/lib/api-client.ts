import type { Lot, LotCreate, LotUpdate } from "@/types"

const API_BASE_URL = "/api"

export const api = {
  // ロット管理
  lots: {
    list: async (): Promise<Lot[]> => {
      const response = await fetch(`${API_BASE_URL}/lots`)
      if (!response.ok) throw new Error("Failed to fetch lots")
      return response.json()
    },

    get: async (id: number): Promise<Lot> => {
      const response = await fetch(`${API_BASE_URL}/lots/${id}`)
      if (!response.ok) throw new Error(`Failed to fetch lot ${id}`)
      return response.json()
    },

    create: async (data: LotCreate): Promise<Lot> => {
      const response = await fetch(`${API_BASE_URL}/lots`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error("Failed to create lot")
      return response.json()
    },

    update: async (id: number, data: LotUpdate): Promise<Lot> => {
      const response = await fetch(`${API_BASE_URL}/lots/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!response.ok) throw new Error(`Failed to update lot ${id}`)
      return response.json()
    },

    delete: async (id: number): Promise<void> => {
      const response = await fetch(`${API_BASE_URL}/lots/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error(`Failed to delete lot ${id}`)
    },
  },

  // 出荷管理（今後実装）
  shipping: {
    list: async () => {
      const response = await fetch(`${API_BASE_URL}/shipping`)
      if (!response.ok) throw new Error("Failed to fetch shipping")
      return response.json()
    },
  },

  // アラート管理（今後実装）
  alerts: {
    list: async () => {
      const response = await fetch(`${API_BASE_URL}/alerts`)
      if (!response.ok) throw new Error("Failed to fetch alerts")
      return response.json()
    },
  },
}
