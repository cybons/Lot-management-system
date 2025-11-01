import type {
  Lot,
  CreateLotInput,
  UpdateLotInput,
  Shipment,
  CreateShipmentInput,
} from "@/types";

const API_BASE_URL = "http://localhost:8000/api";

// レスポンス処理の型を汎用的にします
async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ detail: "Unknown error" }));
    // v2.0のResponseBase形式に対応
    const message = error.detail || error.message || "API request failed";
    throw new Error(message);
  }
  // 204 No Content (DELETEなど) の場合は、nullを返す
  if (response.status === 204) {
    return null as T;
  }
  return response.json();
}

export const api = {
  // Lot endpoints (v1.0のまま - いずれv2.0用に修正が必要)
  async getLots(): Promise<Lot[]> {
    const response = await fetch(`${API_BASE_URL}/lots`);
    return handleResponse<Lot[]>(response);
  },

  async getLot(id: number): Promise<Lot> {
    const response = await fetch(`${API_BASE_URL}/lots/${id}`);
    return handleResponse<Lot>(response);
  },

  async createLot(data: CreateLotInput): Promise<Lot> {
    const response = await fetch(`${API_BASE_URL}/lots`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return handleResponse<Lot>(response);
  },

  async updateLot(id: number, data: UpdateLotInput): Promise<Lot> {
    const response = await fetch(`${API_BASE_URL}/lots/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return handleResponse<Lot>(response);
  },

  async deleteLot(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/lots/${id}`, {
      method: "DELETE",
    });
    await handleResponse<null>(response);
  },

  // Shipment endpoints (v1.0のまま)
  async getShipments(): Promise<Shipment[]> {
    const response = await fetch(`${API_BASE_URL}/shipments`);
    return handleResponse<Shipment[]>(response);
  },

  async createShipment(data: CreateShipmentInput): Promise<Shipment> {
    const response = await fetch(`${API_BASE_URL}/shipments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return handleResponse<Shipment>(response);
  },

  // --- v2.0 Admin endpoints (ここから追加) ---
  async resetDatabase(): Promise<{
    success: boolean;
    message: string;
    data: any;
  }> {
    // エンドポイントを修正 (reset-db -> reset-database)
    const response = await fetch(`${API_BASE_URL}/admin/reset-database`, {
      method: "POST",
    });
    return handleResponse<{ success: boolean; message: string; data: any }>(
      response
    );
  },

  async loadFullSampleData(
    data: any
  ): Promise<{ success: boolean; message: string; data: any }> {
    const response = await fetch(
      `${API_BASE_URL}/admin/load-full-sample-data`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    return handleResponse<{ success: boolean; message: string; data: any }>(
      response
    );
  },
};
