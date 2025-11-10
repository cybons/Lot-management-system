import { Route, Routes, Navigate } from "react-router-dom";
import { Sidebar } from "@/shared/components/layout/Sidebar";

// Pages
import { AdminPage } from "@/features/admin/pages/AdminPage";
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { ForecastImportPage } from "@/features/forecasts/pages/ForecastImportPage";
import { ForecastListPage } from "@/features/forecasts/pages/ForecastListPage";
import { InventoryPage } from "@/features/inventory/pages/InventoryPage";
import { OrdersListPage } from "@/features/orders/pages/OrdersListPage";
import { LotAllocationPage } from "@/pages/LotAllocationPage";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/orders" element={<OrdersListPage />} />
          <Route path="/allocations" element={<LotAllocationPage />} />
          <Route path="/forecast" element={<ForecastImportPage />} />
          <Route path="/forecast/list" element={<ForecastListPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
