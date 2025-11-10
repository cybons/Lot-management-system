import { Route, Routes, Navigate } from "react-router-dom";
import { TopNavLayout } from "@/layouts/TopNavLayout";

// Pages
import { AdminPage } from "@/features/admin/pages/AdminPage";
import { DashboardPage } from "@/features/dashboard/pages/DashboardPage";
import { ForecastImportPage } from "@/features/forecasts/pages/ForecastImportPage";
import { ForecastListPage } from "@/features/forecasts/pages/ForecastListPage";
import { InventoryLayout } from "@/features/inventory/pages/InventoryLayout";
import { SummaryPage } from "@/features/inventory/pages/SummaryPage";
import { LotsPage } from "@/features/inventory/pages/LotsPage";
import { MovesPage } from "@/features/inventory/pages/MovesPage";
import { OrdersListPage } from "@/features/orders/pages/OrdersListPage";
import { LotAllocationPage } from "@/pages/LotAllocationPage";

function App() {
  return (
    <TopNavLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Inventory routes with nested children */}
        <Route path="/inventory" element={<InventoryLayout />}>
          <Route index element={<Navigate to="/inventory/summary" replace />} />
          <Route path="summary" element={<SummaryPage />} />
          <Route path="lots" element={<LotsPage />} />
          <Route path="moves" element={<MovesPage />} />
        </Route>

        <Route path="/orders" element={<OrdersListPage />} />
        <Route path="/allocations" element={<LotAllocationPage />} />
        <Route path="/forecast" element={<ForecastImportPage />} />
        <Route path="/forecast/list" element={<ForecastListPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </TopNavLayout>
  );
}

export default App;
