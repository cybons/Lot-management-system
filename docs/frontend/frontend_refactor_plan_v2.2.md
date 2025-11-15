# フロントエンド リファクタリング計画書 v2.2

**作成日**: 2025-11-15
**対象**: Lot Management System Frontend
**バックエンドAPI**: v2.2.1（Phase 1〜4 実装完了）
**破壊的変更**: 許容

---

## 📋 目次

1. [現状サマリ（フロントエンド視点）](#1-現状サマリフロントエンド視点)
2. [A〜F 分類マッピング表](#2-af-分類マッピング表)
3. [削除・更新・新規追加すべき画面・フロー一覧](#3-削除更新新規追加すべき画面フロー一覧)
4. [ルート再設計 & 旧→新 対応表](#4-ルート再設計--旧新-対応表)
5. [実装タスクリスト（優先順位つき）](#5-実装タスクリスト優先順位つき)
6. [ブランチ戦略・PR 分割案](#6-ブランチ戦略pr-分割案)
7. [各画面の設計テンプレート](#7-各画面の設計テンプレート)

---

## 1. 現状サマリ（フロントエンド視点）

### 📊 実装統計

| 項目 | 現状 | 備考 |
|-----|------|------|
| **総TSファイル数** | 174 | .ts + .tsx |
| **実装済みページ数** | 13 | Dashboard, Orders, Inventory, Forecast, Allocations, Admin |
| **ルート数** | 8 | / (redirect), /dashboard, /inventory/*, /orders, /allocations, /forecast/*, /admin |
| **API呼び出しモジュール数** | 5+ | orders, allocations, forecast, inventory, masters |
| **状態管理** | TanStack Query + Jotai | Query: サーバー状態、Jotai: ローカルUI状態 |
| **新API v2.2 対応率** | ~30% | Orders/Lotsは一部対応、Forecast/Allocationsは旧API |

### ⚠️ 重大な問題点

#### 1. **Forecast API が旧構造のまま（単一テーブル想定）**

- **現状**: `/api/forecast` を使用（ヘッダ・明細分離未対応）
- **新API**: `/api/forecasts/headers` + `/api/forecasts/headers/{id}/lines`
- **影響**: ForecastListPage.tsx は TODO 状態（queryFn が空配列）

#### 2. **Allocations API が Deprecated エンドポイント使用中**

- **現状**: `/allocations/candidate-lots` (deprecated)
- **新API**: `/allocation-candidates`
- **移行期限**: 2026-02-15

#### 3. **Masters API が旧パス使用中（非推奨）**

- **現状**: `/masters/products`, `/masters/suppliers`, `/masters/warehouses`
- **新API**: `/products`, `/suppliers`, `/warehouses`（フラット化）

#### 4. **新機能が未実装**

- Inbound Plans（入荷予定管理）- 画面・API呼び出し共に未実装
- Adjustments（在庫調整）- 画面・API呼び出し共に未実装
- Inventory Items（在庫サマリ詳細） - `/inventory-items/{product_id}/{warehouse_id}` 未対応
- Users & Roles - 画面未実装
- Operation Logs / Business Rules / Batch Jobs - 画面未実装
- Customer Items（得意先品番マッピング） - 画面未実装

#### 5. **ファイル重複・構造の混乱**

- `pages/OrdersPage.tsx` vs `features/orders/pages/OrdersListPage.tsx` - どちらが正？
- `pages/LotAllocationPage.tsx` vs `features/allocations/pages/LotAllocationPage.tsx` - 重複
- `ForecastSection.tsx` vs `ForecastSection-v2.tsx` - バージョン管理的命名

---

## 2. A〜F 分類マッピング表

### A. 新API v2.2 に未対応のUI / API呼び出し

| # | 領域 | ファイルパス | 現在のAPI | 新API | 移行難易度 |
|---|------|------------|----------|-------|----------|
| A-1 | **Forecast** | `features/forecast/api.ts` | `GET /api/forecast` | `GET /api/forecasts/headers` | 🔴 高（構造変更） |
| A-2 | **Forecast** | `features/forecasts/pages/ForecastListPage.tsx` | `GET /api/forecast` (TODO) | `GET /api/forecasts/headers` | 🔴 高（未実装） |
| A-3 | **Forecast** | `features/forecast/api.ts` | `POST /api/forecast/bulk` | `POST /api/forecasts/headers/bulk-import` | 🟡 中 |
| A-4 | **Allocations** | `features/orders/api.ts:getCandidateLots()` | `GET /allocations/candidate-lots` | `GET /allocation-candidates` | 🟢 低（URLのみ） |
| A-5 | **Allocations** | `features/allocations/api.ts` | `POST /api/allocations` (旧形式) | `POST /allocations/commit` | 🟡 中 |
| A-6 | **Masters** | `features/products/api/products.ts` | `GET /masters/products` | `GET /products` | 🟢 低（URLのみ） |
| A-7 | **Masters** | `features/suppliers/api/suppliers.ts` | `GET /masters/suppliers` | `GET /suppliers` | 🟢 低（URLのみ） |
| A-8 | **Masters** | `features/warehouses/api/warehouses.ts` | `GET /masters/warehouses` | `GET /warehouses` | 🟢 低（URLのみ） |
| A-9 | **Orders** | `features/orders/api.ts` | カスタムエンドポイント多数 | 標準APIへ統合 | 🟡 中 |

### B. 画面はあるがロジック未実装 / TODO / ダミーのまま

| # | ページ | ファイルパス | 問題内容 | 対応 |
|---|--------|------------|---------|------|
| B-1 | ForecastListPage | `features/forecasts/pages/ForecastListPage.tsx` | queryFn が空配列、TODO コメント | 新API対応実装 |
| B-2 | MovesPage | `features/inventory/pages/MovesPage.tsx` | 在庫移動機能の実装状況不明 | 実装確認・完成 |
| B-3 | OrderDetailPage | `features/orders/pages/OrderDetailPage.tsx` | ルーティング未登録（未使用？） | 削除 or ルート追加 |

### C. 旧DB / 旧ドメイン設計に依存しており削除すべきUI やフロー

| # | 対象 | ファイルパス | 理由 | 対応 |
|---|------|------------|------|------|
| C-1 | ForecastSection-v2.tsx | `features/orders/components/ForecastSection-v2.tsx` | バージョン管理的命名（どちらが正？） | 正式版を決定、他削除 |
| C-2 | OrdersPage.tsx (pages直下) | `pages/OrdersPage.tsx` | features/orders/ と重複 | 削除（featuresを正とする） |
| C-3 | LotAllocationPage.tsx (pages直下) | `pages/LotAllocationPage.tsx` | features/allocations/ と重複 | 削除（featuresを正とする） |

### D. 新API仕様に合わせて更新が必要な画面

| # | 画面 | ファイルパス | 更新内容 | 優先度 |
|---|------|------------|---------|-------|
| D-1 | **Forecast 一覧・詳細** | `features/forecasts/**` | ヘッダ・明細分離構造へ全面リライト | 🔴 高 |
| D-2 | **Allocation 画面** | `features/allocations/**` | 新エンドポイント移行 (/allocation-suggestions, /allocation-candidates, /allocations/commit) | 🔴 高 |
| D-3 | **Masters 参照** | `features/{products,suppliers,warehouses}/api/**` | URL 変更 (/masters/* → 直接アクセス) | 🟡 中 |
| D-4 | **Inventory Summary** | `features/inventory/pages/SummaryPage.tsx` | `/inventory-items` API を使用するよう変更 | 🟡 中 |

### E. 新API を利用するために追加すべきUI

| # | 新機能 | 必要な画面 | API | 優先度 |
|---|--------|----------|-----|-------|
| E-1 | **Inbound Plans** | 入荷予定一覧・詳細・明細・入荷実績登録 | `/inbound-plans/*` | 🔴 高 |
| E-2 | **Forecast Headers / Lines** | ヘッダ一覧・詳細（明細含む）・明細個別編集 | `/forecasts/headers/*`, `/forecasts/lines/*` | 🔴 高 |
| E-3 | **Inventory Items** | 在庫サマリ一覧・詳細（product_id + warehouse_id） | `/inventory-items/*` | 🟡 中 |
| E-4 | **Adjustments** | 在庫調整履歴・登録画面 | `/adjustments` | 🔴 高 |
| E-5 | **Customer Items** | 得意先品番マッピング一覧・登録・削除 | `/customer-items/*` | 🟡 中 |
| E-6 | **Users & Roles** | ユーザー管理・ロール管理・ロール割当 | `/users/*`, `/roles/*` | 🟡 中 |
| E-7 | **Operation Logs** | 操作ログ一覧・詳細 | `/operation-logs/*` | 🟢 低 |
| E-8 | **Business Rules** | 業務ルール一覧・詳細・更新 | `/business-rules/*` | 🟢 低 |
| E-9 | **Batch Jobs** | バッチジョブ一覧・詳細・実行 | `/batch-jobs/*` | 🟢 低 |

### F. コンポーネントの責務が分散・過密で整理すべき部分

| # | コンポーネント | 問題内容 | 対応 |
|---|--------------|---------|------|
| F-1 | OrderCard | features/orders と features/allocations の両方に存在（重複） | 共通化 or 用途別に分離 |
| F-2 | LotAllocationPage | 300行超、3ペイン構成で複雑 | サブコンポーネントへ分割 |
| F-3 | shared/components vs feature固有 | 境界が曖昧 | ガイドライン策定・リファクタ |
| F-4 | API呼び出しモジュール | features/*/api.ts と services/api/*.ts が混在 | features/* へ統一 |

---

## 3. 削除・更新・新規追加すべき画面・フロー一覧

### 🗑️ 削除すべきファイル

| ファイルパス | 理由 |
|------------|------|
| `pages/OrdersPage.tsx` | features/orders/pages/OrdersListPage.tsx と重複 |
| `pages/LotAllocationPage.tsx` | features/allocations/pages/LotAllocationPage.tsx と重複 |
| `features/orders/components/ForecastSection-v2.tsx` | バージョン管理的命名（正式版を ForecastSection.tsx へ統合） |
| `features/orders/pages/OrderDetailPage.tsx` | ルーティング未登録、未使用の可能性（要確認後削除） |

### 🔧 更新すべき画面（破壊的変更を含む）

| 画面 | ファイルパス | 更新内容 | 新API |
|------|------------|---------|-------|
| **Forecast 一覧** | `features/forecasts/pages/ForecastListPage.tsx` | ヘッダ・明細分離構造へ全面リライト | `GET /forecasts/headers` |
| **Forecast 詳細** | （新規作成） | ヘッダ詳細 + 明細一覧表示 | `GET /forecasts/headers/{id}` |
| **Forecast 明細編集** | （新規作成） | 明細個別追加・更新・削除 | `POST /forecasts/headers/{id}/lines`, `PUT /forecasts/lines/{id}` |
| **Forecast インポート** | `features/forecasts/pages/ForecastImportPage.tsx` | bulk-import API対応 | `POST /forecasts/headers/bulk-import` |
| **Allocation 画面** | `features/allocations/pages/LotAllocationPage.tsx` | 新エンドポイント対応 | `/allocation-candidates`, `/allocation-suggestions/*`, `/allocations/commit` |
| **Inventory Summary** | `features/inventory/pages/SummaryPage.tsx` | `/inventory-items` API 使用へ変更 | `GET /inventory-items` |
| **Masters API 呼び出し** | `features/{products,suppliers,warehouses}/api/*.ts` | URL変更 (/masters/* → 直接) | `/products`, `/suppliers`, `/warehouses` |

### ➕ 新規追加すべき画面

| 画面名 | 推奨ファイルパス | API | 優先度 |
|-------|----------------|-----|-------|
| **入荷予定一覧** | `features/inbound-plans/pages/InboundPlansListPage.tsx` | `GET /inbound-plans` | 🔴 高 |
| **入荷予定詳細** | `features/inbound-plans/pages/InboundPlanDetailPage.tsx` | `GET /inbound-plans/{id}` | 🔴 高 |
| **入荷実績登録** | `features/inbound-plans/components/ReceiveModal.tsx` | `POST /inbound-plans/{id}/receive` | 🔴 高 |
| **在庫調整履歴** | `features/adjustments/pages/AdjustmentsListPage.tsx` | `GET /adjustments` | 🔴 高 |
| **在庫調整登録** | `features/adjustments/pages/AdjustmentCreatePage.tsx` | `POST /adjustments` | 🔴 高 |
| **在庫サマリ詳細** | `features/inventory/pages/InventoryItemDetailPage.tsx` | `GET /inventory-items/{product_id}/{warehouse_id}` | 🟡 中 |
| **得意先品番マッピング** | `features/customer-items/pages/CustomerItemsListPage.tsx` | `GET /customer-items` | 🟡 中 |
| **ユーザー管理** | `features/users/pages/UsersListPage.tsx` | `GET /users` | 🟡 中 |
| **ロール管理** | `features/roles/pages/RolesListPage.tsx` | `GET /roles` | 🟡 中 |
| **操作ログ** | `features/operation-logs/pages/OperationLogsPage.tsx` | `GET /operation-logs` | 🟢 低 |
| **業務ルール** | `features/business-rules/pages/BusinessRulesPage.tsx` | `GET /business-rules` | 🟢 低 |
| **バッチジョブ** | `features/batch-jobs/pages/BatchJobsPage.tsx` | `GET /batch-jobs` | 🟢 低 |

---

## 4. ルート再設計 & 旧→新 対応表

### 🗺️ 新ルート体系（再設計後）

| 新URL | 旧URL | 画面名 | 互換性 | 備考 |
|-------|-------|-------|-------|------|
| `/` | `/` | Redirect to /dashboard | ✅ 維持 | |
| `/dashboard` | `/dashboard` | ダッシュボード | ✅ 維持 | |
| `/orders` | `/orders` | 受注一覧 | ✅ 維持 | |
| `/orders/:id` | （新規） | 受注詳細 | - | 新規追加 |
| `/allocations` | `/allocations` | ロット引当 | ✅ 維持 | API変更 |
| `/forecasts` | `/forecast/list` | フォーキャスト一覧 | ❌ 破壊的 | URL変更 + ヘッダ・明細分離 |
| `/forecasts/:id` | （新規） | フォーキャスト詳細 | - | 新規追加 |
| `/forecasts/import` | `/forecast` | フォーキャストインポート | ❌ 破壊的 | URL変更 |
| `/inbound-plans` | （新規） | 入荷予定一覧 | - | 新規追加 |
| `/inbound-plans/:id` | （新規） | 入荷予定詳細 | - | 新規追加 |
| `/inventory/summary` | `/inventory/summary` | 在庫サマリ | ✅ 維持 | API変更 |
| `/inventory/lots` | `/inventory/lots` | ロット一覧 | ✅ 維持 | |
| `/inventory/moves` | `/inventory/moves` | 在庫移動 | ✅ 維持 | 実装確認必要 |
| `/inventory/adjustments` | （新規） | 在庫調整履歴 | - | 新規追加 |
| `/inventory/adjustments/new` | （新規） | 在庫調整登録 | - | 新規追加 |
| `/masters/customer-items` | （新規） | 得意先品番マッピング | - | 新規追加 |
| `/settings/users` | （新規） | ユーザー管理 | - | 新規追加 |
| `/settings/roles` | （新規） | ロール管理 | - | 新規追加 |
| `/admin/operation-logs` | （新規） | 操作ログ | - | 新規追加 |
| `/admin/business-rules` | （新規） | 業務ルール | - | 新規追加 |
| `/admin/batch-jobs` | （新規） | バッチジョブ | - | 新規追加 |
| `/admin` | `/admin` | 管理画面（DB リセット等） | ✅ 維持 | |

### 📋 旧→新 ルート対応表（破壊的変更）

| 旧URL | 新URL | HTTPメソッド | 互換性 | 備考 |
|-------|-------|-------------|-------|------|
| `/forecast` | `/forecasts/import` | - | ❌ 破壊的 | URL変更 |
| `/forecast/list` | `/forecasts` | - | ❌ 破壊的 | URL変更 |

### 🔗 ルーティング設定例（React Router v6）

```tsx
<Routes>
  <Route path="/" element={<Navigate to="/dashboard" replace />} />
  <Route path="/dashboard" element={<DashboardPage />} />

  {/* Orders */}
  <Route path="/orders" element={<OrdersListPage />} />
  <Route path="/orders/:id" element={<OrderDetailPage />} />

  {/* Allocations */}
  <Route path="/allocations" element={<LotAllocationPage />} />

  {/* Forecasts - ヘッダ・明細分離 */}
  <Route path="/forecasts" element={<ForecastsListPage />} />
  <Route path="/forecasts/:id" element={<ForecastDetailPage />} />
  <Route path="/forecasts/import" element={<ForecastImportPage />} />

  {/* Inbound Plans - 新規 */}
  <Route path="/inbound-plans" element={<InboundPlansListPage />} />
  <Route path="/inbound-plans/:id" element={<InboundPlanDetailPage />} />

  {/* Inventory */}
  <Route path="/inventory" element={<InventoryLayout />}>
    <Route index element={<Navigate to="/inventory/summary" replace />} />
    <Route path="summary" element={<SummaryPage />} />
    <Route path="lots" element={<LotsPage />} />
    <Route path="moves" element={<MovesPage />} />
    <Route path="adjustments" element={<AdjustmentsListPage />} />
    <Route path="adjustments/new" element={<AdjustmentCreatePage />} />
  </Route>

  {/* Masters */}
  <Route path="/masters/customer-items" element={<CustomerItemsListPage />} />

  {/* Settings */}
  <Route path="/settings/users" element={<UsersListPage />} />
  <Route path="/settings/roles" element={<RolesListPage />} />

  {/* Admin */}
  <Route path="/admin" element={<AdminPage />} />
  <Route path="/admin/operation-logs" element={<OperationLogsPage />} />
  <Route path="/admin/business-rules" element={<BusinessRulesPage />} />
  <Route path="/admin/batch-jobs" element={<BatchJobsPage />} />

  <Route path="*" element={<Navigate to="/dashboard" replace />} />
</Routes>
```

---

## 5. 実装タスクリスト（優先順位つき）

### Phase A: 共通基盤刷新（Week 1-2、優先度：🔴 Critical）

#### タスクA-1: API クライアントの統一と新 API 対応

- [ ] `shared/libs/http.ts` の見直し（toApiUrl の動作確認）
- [ ] 旧エンドポイント一覧の洗い出し（grep検索）
- [ ] `features/*/api.ts` の統一パターン策定
- [ ] 型定義の整理（@/types/api.d.ts の活用促進）

**成果物**: API クライアント設計ガイドライン、共通 hooks パターン

#### タスクA-2: ファイル重複・旧残骸の削除

- [ ] `pages/OrdersPage.tsx` 削除
- [ ] `pages/LotAllocationPage.tsx` 削除
- [ ] `ForecastSection-v2.tsx` の正式版への統合 or 削除
- [ ] `OrderDetailPage.tsx` の使用状況確認 → 削除 or ルート追加

**成果物**: クリーンなディレクトリ構造

#### タスクA-3: ルーティング再設計

- [ ] `App.tsx` のルート定義を新体系へ更新
- [ ] 旧URL → 新URL のリダイレクト設定（互換性維持）
- [ ] ルート定数の定義（例: `ROUTES.FORECASTS.LIST = "/forecasts"`）

**成果物**: 更新された `App.tsx`、ルート定数ファイル

---

### Phase B: Forecasts（ヘッダ・明細分離）実装（Week 3-5、優先度：🔴 High）

#### タスクB-1: Forecast API 全面リライト

- [ ] `features/forecasts/api.ts` を新APIに対応
  - `GET /forecasts/headers` - ヘッダ一覧取得
  - `POST /forecasts/headers` - ヘッダ作成（明細同時可）
  - `GET /forecasts/headers/{id}` - ヘッダ詳細取得
  - `PUT /forecasts/headers/{id}` - ヘッダ更新
  - `DELETE /forecasts/headers/{id}` - ヘッダ削除
  - `GET /forecasts/headers/{id}/lines` - 明細一覧取得
  - `POST /forecasts/headers/{id}/lines` - 明細追加
  - `PUT /forecasts/lines/{id}` - 明細更新
  - `DELETE /forecasts/lines/{id}` - 明細削除
  - `POST /forecasts/headers/bulk-import` - 一括インポート

**成果物**: `features/forecasts/api.ts`（新API完全対応版）

#### タスクB-2: Forecast Hooks 作成

- [ ] `useForecastHeaders()` - ヘッダ一覧取得hook
- [ ] `useForecastHeader(id)` - ヘッダ詳細取得hook
- [ ] `useForecastLines(headerId)` - 明細一覧取得hook
- [ ] `useCreateForecastHeader()` - ヘッダ作成mutation
- [ ] `useUpdateForecastHeader(id)` - ヘッダ更新mutation
- [ ] `useDeleteForecastHeader(id)` - ヘッダ削除mutation
- [ ] `useCreateForecastLine(headerId)` - 明細追加mutation
- [ ] `useUpdateForecastLine(id)` - 明細更新mutation
- [ ] `useDeleteForecastLine(id)` - 明細削除mutation

**成果物**: `features/forecasts/hooks/index.ts`

#### タスクB-3: Forecast 画面実装

- [ ] `ForecastsListPage.tsx` - ヘッダ一覧画面（リライト）
- [ ] `ForecastDetailPage.tsx` - ヘッダ詳細 + 明細一覧画面（新規）
- [ ] `ForecastImportPage.tsx` - bulk-import API 対応（更新）
- [ ] `ForecastHeaderForm.tsx` - ヘッダ作成・編集フォーム（新規）
- [ ] `ForecastLinesTable.tsx` - 明細一覧テーブル（新規）
- [ ] `ForecastLineForm.tsx` - 明細追加・編集フォーム（新規）

**成果物**: Forecast 関連画面一式

#### タスクB-4: ルーティング更新

- [ ] `/forecasts` → ForecastsListPage
- [ ] `/forecasts/:id` → ForecastDetailPage
- [ ] `/forecasts/import` → ForecastImportPage
- [ ] 旧URL (`/forecast`, `/forecast/list`) からのリダイレクト設定

**成果物**: 更新された `App.tsx`

---

### Phase C: Inbound Plans（入荷予定）実装（Week 6-7、優先度：🔴 High）

#### タスクC-1: Inbound Plans API 実装

- [ ] `features/inbound-plans/api.ts` 作成
  - `GET /inbound-plans` - 入荷予定一覧取得
  - `POST /inbound-plans` - 入荷予定登録（明細同時可）
  - `GET /inbound-plans/{id}` - 入荷予定詳細取得
  - `PUT /inbound-plans/{id}` - 入荷予定更新
  - `DELETE /inbound-plans/{id}` - 入荷予定削除
  - `GET /inbound-plans/{id}/lines` - 入荷予定明細一覧取得
  - `POST /inbound-plans/{id}/lines` - 入荷予定明細追加
  - `POST /inbound-plans/{id}/receive` - **入荷実績登録（ロット自動生成）**

**成果物**: `features/inbound-plans/api.ts`

#### タスクC-2: Inbound Plans Hooks 作成

- [ ] `useInboundPlans()` - 入荷予定一覧取得hook
- [ ] `useInboundPlan(id)` - 入荷予定詳細取得hook
- [ ] `useInboundPlanLines(id)` - 入荷予定明細一覧取得hook
- [ ] `useCreateInboundPlan()` - 入荷予定登録mutation
- [ ] `useUpdateInboundPlan(id)` - 入荷予定更新mutation
- [ ] `useDeleteInboundPlan(id)` - 入荷予定削除mutation
- [ ] `useReceiveInbound(id)` - 入荷実績登録mutation（重要）

**成果物**: `features/inbound-plans/hooks/index.ts`

#### タスクC-3: Inbound Plans 画面実装

- [ ] `InboundPlansListPage.tsx` - 入荷予定一覧画面（新規）
- [ ] `InboundPlanDetailPage.tsx` - 入荷予定詳細画面（新規）
- [ ] `InboundPlanForm.tsx` - 入荷予定作成・編集フォーム（新規）
- [ ] `InboundPlanLinesTable.tsx` - 入荷予定明細一覧テーブル（新規）
- [ ] `ReceiveModal.tsx` - 入荷実績登録モーダル（新規、重要）

**成果物**: Inbound Plans 関連画面一式

#### タスクC-4: ルーティング追加

- [ ] `/inbound-plans` → InboundPlansListPage
- [ ] `/inbound-plans/:id` → InboundPlanDetailPage

**成果物**: 更新された `App.tsx`

---

### Phase D: Inventory（Adjustments・Items）実装（Week 8-9、優先度：🔴 High）

#### タスクD-1: Adjustments API 実装

- [ ] `features/adjustments/api.ts` 作成
  - `GET /adjustments` - 在庫調整履歴取得
  - `POST /adjustments` - 在庫調整登録
  - `GET /adjustments/{id}` - 在庫調整詳細取得

**成果物**: `features/adjustments/api.ts`

#### タスクD-2: Inventory Items API 更新

- [ ] `features/inventory/api.ts` に追加
  - `GET /inventory-items` - 在庫サマリ一覧取得
  - `GET /inventory-items/{product_id}/{warehouse_id}` - 在庫サマリ詳細取得

**成果物**: 更新された `features/inventory/api.ts`

#### タスクD-3: Adjustments Hooks 作成

- [ ] `useAdjustments()` - 在庫調整履歴取得hook
- [ ] `useAdjustment(id)` - 在庫調整詳細取得hook
- [ ] `useCreateAdjustment()` - 在庫調整登録mutation

**成果物**: `features/adjustments/hooks/index.ts`

#### タスクD-4: Inventory Items Hooks 作成

- [ ] `useInventoryItems()` - 在庫サマリ一覧取得hook
- [ ] `useInventoryItem(productId, warehouseId)` - 在庫サマリ詳細取得hook

**成果物**: `features/inventory/hooks/index.ts`

#### タスクD-5: Adjustments 画面実装

- [ ] `AdjustmentsListPage.tsx` - 在庫調整履歴画面（新規）
- [ ] `AdjustmentCreatePage.tsx` - 在庫調整登録画面（新規）
- [ ] `AdjustmentForm.tsx` - 在庫調整フォーム（新規）

**成果物**: Adjustments 関連画面一式

#### タスクD-6: Inventory Items 画面実装

- [ ] `SummaryPage.tsx` の更新 - `/inventory-items` API 使用へ変更
- [ ] `InventoryItemDetailPage.tsx` - 在庫サマリ詳細画面（新規）

**成果物**: 更新された Inventory 関連画面

#### タスクD-7: ルーティング追加

- [ ] `/inventory/adjustments` → AdjustmentsListPage
- [ ] `/inventory/adjustments/new` → AdjustmentCreatePage
- [ ] `/inventory/items/:productId/:warehouseId` → InventoryItemDetailPage

**成果物**: 更新された `App.tsx`

---

### Phase E: Allocations（新API移行）実装（Week 10-11、優先度：🔴 High）

#### タスクE-1: Allocations API 全面リファクタ

- [ ] `features/allocations/api.ts` を新APIに対応
  - `POST /allocations/commit` - 引当確定（v2.2.1）
  - `DELETE /allocations/{id}` - 引当取消
  - `GET /allocation-candidates` - 候補ロット取得（旧 candidate-lots から移行）
  - `GET /allocation-suggestions` - 引当推奨一覧取得
  - `POST /allocation-suggestions/manual` - 手動引当登録（旧 drag-assign から移行）
  - `POST /allocation-suggestions/fefo` - FEFO引当プレビュー（旧 preview から移行）

**成果物**: `features/allocations/api.ts`（新API完全対応版）

#### タスクE-2: Allocations Hooks 更新

- [ ] `useAllocationCandidates()` - 候補ロット取得hook（更新）
- [ ] `useAllocationSuggestions()` - 引当推奨一覧取得hook（新規）
- [ ] `useCommitAllocation()` - 引当確定mutation（新規）
- [ ] `useCancelAllocation(id)` - 引当取消mutation（維持）
- [ ] `useManualAllocation()` - 手動引当mutation（更新）
- [ ] `useFefoPreview()` - FEFO引当プレビューhook（更新）

**成果物**: `features/allocations/hooks/index.ts`

#### タスクE-3: LotAllocationPage リファクタ

- [ ] `LotAllocationPage.tsx` の API 呼び出しを新 hooks へ移行
- [ ] 候補ロット取得を `useAllocationCandidates()` へ変更
- [ ] 手動引当を `useManualAllocation()` へ変更
- [ ] FEFO引当を `useFefoPreview()` + `useCommitAllocation()` へ変更

**成果物**: 更新された `LotAllocationPage.tsx`

---

### Phase F: Masters API 移行（Week 12、優先度：🟡 Medium）

#### タスクF-1: Masters API URL 変更

- [ ] `features/products/api/products.ts` - `/masters/products` → `/products`
- [ ] `features/suppliers/api/suppliers.ts` - `/masters/suppliers` → `/suppliers`
- [ ] `features/warehouses/api/warehouses.ts` - `/masters/warehouses` → `/warehouses`

**成果物**: 更新された Masters API モジュール

---

### Phase G: Customer Items・Users & Roles（Week 13-14、優先度：🟡 Medium）

#### タスクG-1: Customer Items API・画面実装

- [ ] `features/customer-items/api.ts` 作成
  - `GET /customer-items` - 得意先品番一覧取得
  - `POST /customer-items` - 得意先品番登録
  - `GET /customer-items/{customer_id}` - 特定得意先の品番一覧
  - `DELETE /customer-items/{customer_id}/{product_id}` - 得意先品番削除
- [ ] `CustomerItemsListPage.tsx` - 得意先品番マッピング一覧画面（新規）
- [ ] `CustomerItemForm.tsx` - 得意先品番マッピング登録フォーム（新規）
- [ ] ルーティング追加: `/masters/customer-items`

**成果物**: Customer Items 機能一式

#### タスクG-2: Users & Roles API・画面実装

- [ ] `features/users/api.ts` 作成
  - `GET /users` - ユーザー一覧取得
  - `POST /users` - ユーザー作成
  - `GET /users/{id}` - ユーザー詳細取得
  - `PUT /users/{id}` - ユーザー更新
  - `DELETE /users/{id}` - ユーザー削除
  - `PATCH /users/{id}/roles` - ロール割当
- [ ] `features/roles/api.ts` 作成
  - `GET /roles` - ロール一覧取得
  - `POST /roles` - ロール作成
  - `GET /roles/{id}` - ロール詳細取得
  - `PUT /roles/{id}` - ロール更新
- [ ] `UsersListPage.tsx` - ユーザー一覧画面（新規）
- [ ] `UserDetailPage.tsx` - ユーザー詳細画面（新規）
- [ ] `RolesListPage.tsx` - ロール一覧画面（新規）
- [ ] ルーティング追加: `/settings/users`, `/settings/roles`

**成果物**: Users & Roles 管理機能一式

---

### Phase H: Admin（Operation Logs・Business Rules・Batch Jobs）実装（Week 15-16、優先度：🟢 Low）

#### タスクH-1: Operation Logs API・画面実装

- [ ] `features/operation-logs/api.ts` 作成
  - `GET /operation-logs` - 操作ログ一覧取得
  - `GET /operation-logs/{id}` - 操作ログ詳細取得
- [ ] `OperationLogsPage.tsx` - 操作ログ一覧画面（新規）
- [ ] ルーティング追加: `/admin/operation-logs`

**成果物**: Operation Logs 機能一式

#### タスクH-2: Business Rules API・画面実装

- [ ] `features/business-rules/api.ts` 作成
  - `GET /business-rules` - 業務ルール一覧取得
  - `GET /business-rules/{code}` - 業務ルール詳細取得
  - `PUT /business-rules/{code}` - 業務ルール更新
- [ ] `BusinessRulesPage.tsx` - 業務ルール一覧・更新画面（新規）
- [ ] ルーティング追加: `/admin/business-rules`

**成果物**: Business Rules 機能一式

#### タスクH-3: Batch Jobs API・画面実装

- [ ] `features/batch-jobs/api.ts` 作成
  - `GET /batch-jobs` - バッチジョブ一覧取得
  - `GET /batch-jobs/{id}` - バッチジョブ詳細取得
  - `POST /batch-jobs/{id}/execute` - バッチジョブ実行
- [ ] `BatchJobsPage.tsx` - バッチジョブ一覧・実行画面（新規）
- [ ] ルーティング追加: `/admin/batch-jobs`

**成果物**: Batch Jobs 機能一式

---

### Phase I: テスト・ドキュメント・最終調整（Week 17-18、優先度：🟡 Medium）

#### タスクI-1: 型定義の再生成

- [ ] `npm run generate:api` 実行（backend OpenAPI → frontend types）
- [ ] 型エラーの修正
- [ ] TypeScript strict mode チェック（`npm run typecheck`）

**成果物**: 型エラー0の状態

#### タスクI-2: Linting・Formatting

- [ ] `npm run lint:fix` 実行
- [ ] `npm run format` 実行
- [ ] Circular dependency チェック（`madge src --circular`）

**成果物**: Linting・Formatting クリーンな状態

#### タスクI-3: E2E テスト作成（任意）

- [ ] Forecast CRUD フロー
- [ ] Inbound Plans → Receipt フロー
- [ ] Allocations フロー
- [ ] Adjustments フロー

**成果物**: E2Eテストスイート

#### タスクI-4: ドキュメント更新

- [ ] `frontend/README.md` 更新
- [ ] ルーティング一覧表作成
- [ ] API 呼び出し一覧表作成
- [ ] 移行完了報告書作成

**成果物**: 最新ドキュメント一式

---

## 6. ブランチ戦略・PR 分割案

### ブランチ戦略

```
main (本番)
  ↑
develop (開発統合)
  ↑
feature/frontend-api-v2.2-refactor (リファクタ基盤ブランチ)
  ↑
  ├─ feature/frontend-refactor/phase-a-foundation
  ├─ feature/frontend-refactor/phase-b-forecasts
  ├─ feature/frontend-refactor/phase-c-inbound-plans
  ├─ feature/frontend-refactor/phase-d-inventory
  ├─ feature/frontend-refactor/phase-e-allocations
  ├─ feature/frontend-refactor/phase-f-masters
  ├─ feature/frontend-refactor/phase-g-customer-items-users
  ├─ feature/frontend-refactor/phase-h-admin
  └─ feature/frontend-refactor/phase-i-tests-docs
```

### PR 分割案

| PR番号 | ブランチ名 | タイトル | 内容 | 優先度 | 依存関係 |
|-------|----------|---------|------|-------|---------|
| PR#1 | `phase-a-foundation` | **Phase A: 共通基盤刷新** | APIクライアント統一、ファイル削除、ルーティング再設計 | 🔴 Critical | - |
| PR#2 | `phase-b-forecasts` | **Phase B: Forecasts ヘッダ・明細分離実装** | Forecast API全面リライト、画面実装 | 🔴 High | PR#1 |
| PR#3 | `phase-c-inbound-plans` | **Phase C: Inbound Plans 実装** | 入荷予定管理機能一式 | 🔴 High | PR#1 |
| PR#4 | `phase-d-inventory` | **Phase D: Inventory Adjustments・Items 実装** | 在庫調整・在庫サマリ機能 | 🔴 High | PR#1 |
| PR#5 | `phase-e-allocations` | **Phase E: Allocations 新API移行** | 引当関連API全面移行 | 🔴 High | PR#1 |
| PR#6 | `phase-f-masters` | **Phase F: Masters API 移行** | Masters URL変更 | 🟡 Medium | PR#1 |
| PR#7 | `phase-g-customer-items-users` | **Phase G: Customer Items・Users & Roles 実装** | 得意先品番・ユーザー管理 | 🟡 Medium | PR#1 |
| PR#8 | `phase-h-admin` | **Phase H: Admin機能実装** | Operation Logs・Business Rules・Batch Jobs | 🟢 Low | PR#1 |
| PR#9 | `phase-i-tests-docs` | **Phase I: テスト・ドキュメント整備** | E2Eテスト、ドキュメント更新 | 🟡 Medium | PR#2〜8 |

### マージ順序

1. **PR#1 (Phase A)** → `feature/frontend-api-v2.2-refactor` へマージ
2. **PR#2〜8** → `feature/frontend-api-v2.2-refactor` へ順次マージ（並行開発可）
3. **PR#9 (Phase I)** → `feature/frontend-api-v2.2-refactor` へマージ
4. **`feature/frontend-api-v2.2-refactor`** → `develop` へマージ
5. **`develop`** → `main` へマージ（リリース）

---

## 7. 各画面の設計テンプレート

### テンプレート1: Forecast Headers 一覧画面

#### ルートパス

`/forecasts`

#### 利用する新API

- `GET /forecasts/headers` - ヘッダ一覧取得

#### 主なUI要素

- **テーブル**: forecast_number, customer_id, delivery_place_id, status, created_at
- **フィルタパネル**: customer_id, delivery_place_id, status
- **ページネーション**: skip, limit
- **アクションボタン**: 新規作成、詳細表示、削除

#### 状態管理方式

- **TanStack Query**: `useForecastHeaders(filters)` - サーバー状態
- **Jotai**: `forecastFiltersAtom` - フィルタ状態（sessionStorage連携）

#### ViewModel 案

```typescript
interface ForecastHeaderViewModel {
  id: number;
  forecast_number: string;
  customer_id: number;
  customer_name: string; // JOIN or 別途取得
  delivery_place_id: number;
  delivery_place_name: string; // JOIN or 別途取得
  status: 'active' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}
```

#### 正常時/エラー時のUI挙動

- **Loading**: スケルトンローダー表示
- **Error**: エラーメッセージ + 再試行ボタン
- **Empty**: 「フォーキャストが登録されていません」表示
- **Success**: テーブル表示

#### 業務ルール

- ステータスが `cancelled` のヘッダはグレーアウト表示
- 削除は論理削除（status → cancelled）

---

### テンプレート2: Inbound Plans 詳細画面

#### ルートパス

`/inbound-plans/:id`

#### 利用する新API

- `GET /inbound-plans/{id}` - 入荷予定詳細取得（明細含む）
- `POST /inbound-plans/{id}/receive` - 入荷実績登録（ロット自動生成）

#### 主なUI要素

- **ヘッダ情報**: plan_number, supplier_id, planned_arrival_date, status
- **明細テーブル**: product_id, quantity, warehouse_id
- **入荷実績登録モーダル**: 実績数量入力 → ロット自動生成
- **アクションボタン**: 入荷実績登録、編集、削除

#### 状態管理方式

- **TanStack Query**: `useInboundPlan(id)` - サーバー状態
- **Local State**: 入荷実績登録モーダルの開閉状態

#### リクエスト / レスポンスの ViewModel 案

**Request (入荷実績登録)**:
```typescript
interface ReceiveInboundRequest {
  lines: Array<{
    inbound_plan_line_id: number;
    received_quantity: number; // 実績数量
  }>;
}
```

**Response**:
```typescript
interface ReceiveInboundResponse {
  generated_lots: Array<{
    lot_id: number;
    lot_number: string;
    product_id: number;
    quantity: number;
    warehouse_id: number;
  }>;
}
```

#### 正常時/エラー時のUI挙動

- **Loading**: スケルトンローダー表示
- **Error (取得失敗)**: エラーメッセージ + 再試行ボタン
- **Error (入荷実績登録失敗)**: モーダル内にエラー表示
- **Success (入荷実績登録)**: 成功メッセージ + 生成されたロット一覧表示 + ステータス更新

#### 業務ルール

- ステータスが `received` の場合は入荷実績登録ボタン無効化
- 入荷実績登録時、実績数量が計画数量を超える場合は警告表示（許可はする）
- 入荷実績登録後、自動でロットが生成される（ロット番号は自動採番）

---

### テンプレート3: Allocations（引当推奨）画面

#### ルートパス

`/allocations`

#### 利用する新API

- `GET /allocation-candidates` - 候補ロット一覧取得
- `POST /allocation-suggestions/manual` - 手動引当登録
- `POST /allocation-suggestions/fefo` - FEFO引当プレビュー
- `POST /allocations/commit` - 引当確定

#### 主なUI要素

- **3ペイン構成**:
  - **左**: 受注一覧（優先度バー、KPIバッジ付き）
  - **中央**: 選択した受注の明細一覧
  - **右**: 候補ロット一覧 + 引当数量入力

- **アクションボタン**: FEFO自動引当、手動引当確定、引当取消

#### 状態管理方式

- **TanStack Query**:
  - `useOrders()` - 受注一覧
  - `useOrder(id)` - 受注詳細
  - `useAllocationCandidates(productId, warehouseId)` - 候補ロット
- **Local State**:
  - `selectedOrderId` - 選択中の受注ID
  - `selectedLineId` - 選択中の明細ID
  - `lotAllocations` - ロット別引当数量（`Record<number, number>`）

#### リクエスト / レスポンスの ViewModel 案

**Request (手動引当)**:
```typescript
interface ManualAllocationRequest {
  order_line_id: number;
  allocations: Array<{
    lot_id: number;
    quantity: number;
  }>;
}
```

**Request (FEFO引当プレビュー)**:
```typescript
interface FefoPreviewRequest {
  order_id: number;
}
```

**Response (FEFO引当プレビュー)**:
```typescript
interface FefoPreviewResponse {
  suggestions: Array<{
    order_line_id: number;
    lot_id: number;
    lot_number: string;
    quantity: number;
    expiry_date: string;
  }>;
}
```

**Request (引当確定)**:
```typescript
interface CommitAllocationRequest {
  order_id: number;
  suggestions?: Array<{ lot_id: number; quantity: number }>; // FEFO結果
}
```

#### 正常時/エラー時のUI挙動

- **Loading (候補ロット取得)**: スピナー表示
- **Error (候補ロット取得失敗)**: エラーメッセージ表示
- **Error (引当確定失敗)**: エラーメッセージ + ロールバック
- **Success (FEFO引当)**: プレビュー結果を右ペインに表示
- **Success (引当確定)**: 成功メッセージ + 受注ステータス更新 + 候補ロット再取得

#### FEFO / 引当ロジックの可視化

- **候補ロット一覧**: 有効期限が早い順にソート表示（FEFO順）
- **引当可能数量表示**: `free_qty` (引当可能数量) を明示
- **引当済み数量表示**: すでに引当済みの数量をバッジ表示
- **優先度バー**: 受注一覧に優先度（納期・顧客重要度）をビジュアル表示

---

### テンプレート4: Adjustments（在庫調整）登録画面

#### ルートパス

`/inventory/adjustments/new`

#### 利用する新API

- `POST /adjustments` - 在庫調整登録
- `GET /lots` - ロット一覧取得（調整対象ロット選択用）

#### 主なUI要素

- **フォーム**:
  - ロット選択（オートコンプリート）
  - 調整種別（increase / decrease）
  - 調整数量
  - 理由（reason）
  - 備考（notes）
- **確認ダイアログ**: 調整前後の在庫数量表示
- **送信ボタン**: 調整登録

#### 状態管理方式

- **React Hook Form**: フォーム状態管理
- **Zod**: バリデーション
- **TanStack Query Mutation**: `useCreateAdjustment()`

#### リクエスト / レスポンスの ViewModel 案

**Request**:
```typescript
interface AdjustmentCreateRequest {
  lot_id: number;
  adjustment_type: 'increase' | 'decrease';
  quantity: number; // 調整数量（絶対値）
  reason: string;
  notes?: string;
}
```

**Response**:
```typescript
interface AdjustmentCreateResponse {
  id: number;
  lot_id: number;
  adjustment_type: string;
  quantity: number;
  reason: string;
  created_at: string;
  updated_at: string;
  // 調整後の在庫数量
  new_stock_quantity: number;
}
```

#### 正常時/エラー時のUI挙動

- **Validation Error**: フォーム内に赤文字でエラー表示
- **Error (登録失敗)**: エラーメッセージ + フォーム維持
- **Success**: 成功メッセージ + `/inventory/adjustments` へリダイレクト

#### 業務ルール

- 調整数量は必ず正の数
- 調整種別が `decrease` の場合、現在の在庫数量を超える調整は不可（バリデーション）
- 理由は必須入力

---

## 8. 移行スケジュール（18週間）

| Week | Phase | 主なタスク | 成果物 |
|------|-------|-----------|--------|
| 1-2 | Phase A | 共通基盤刷新、ファイル削除、ルーティング再設計 | APIクライアント統一、クリーンな構造 |
| 3-5 | Phase B | Forecasts ヘッダ・明細分離実装 | Forecast API・画面一式 |
| 6-7 | Phase C | Inbound Plans 実装 | 入荷予定管理機能一式 |
| 8-9 | Phase D | Inventory (Adjustments・Items) 実装 | 在庫調整・在庫サマリ機能 |
| 10-11 | Phase E | Allocations 新API移行 | 引当関連API全面移行完了 |
| 12 | Phase F | Masters API 移行 | Masters URL変更完了 |
| 13-14 | Phase G | Customer Items・Users & Roles 実装 | 得意先品番・ユーザー管理機能 |
| 15-16 | Phase H | Admin機能実装 | Operation Logs・Business Rules・Batch Jobs |
| 17-18 | Phase I | テスト・ドキュメント整備 | E2Eテスト・ドキュメント・移行完了報告 |

---

## 9. リスク管理

### 🚨 高リスク項目

| リスク | 影響 | 対策 |
|--------|------|------|
| **Forecast ヘッダ・明細分離の複雑性** | スケジュール遅延（+2週間） | Phase B を最優先で着手、早期にプロトタイプ作成 |
| **既存データの移行失敗** | 本番データ不整合 | バックエンドチームとデータ移行スクリプトを共同作成・検証 |
| **Deprecated API 廃止期限（2026-02-15）** | 本番障害 | Phase E (Allocations) を必ず期限前に完了 |
| **型定義の不整合** | 開発中の型エラー多発 | Phase I で `npm run generate:api` 実行、型エラー0を厳守 |

### 🔧 中リスク項目

| リスク | 影響 | 対策 |
|--------|------|------|
| **新機能の仕様不明確** | 実装迷走 | Product Owner と週次レビュー実施 |
| **並行開発時のコンフリクト** | マージコスト増加 | Phase A 完了後に並行開発開始、コミュニケーション強化 |
| **E2Eテスト未整備** | リグレッション発生 | Phase I で最低限のE2Eテスト作成 |

---

## 10. 成功基準

### ✅ Phase A〜I 完了時の成功基準

- [ ] 新API v2.2 対応率 **100%**（Deprecated API 使用 0件）
- [ ] TypeScript type errors **0件**
- [ ] ESLint warnings **0件**
- [ ] Circular dependencies **0件**
- [ ] 新機能（Inbound Plans, Adjustments, Customer Items, Users & Roles, Admin系）**全て実装完了**
- [ ] Forecast ヘッダ・明細分離構造 **完全対応**
- [ ] E2Eテスト **主要フロー5つ以上**
- [ ] ドキュメント **最新化完了**

---

## 11. 次のステップ

### フロントエンド移行完了後（Phase I 完了後）

1. **ステージング環境での統合テスト**（2週間）
2. **パフォーマンステスト実施**（1週間）
3. **ユーザー受入テスト（UAT）**（2週間）
4. **本番リリース**（2026年1月中旬目標）

### 移行期限までのマイルストーン

- **2025-12-31**: Phase A〜F 完了（必須機能完了）
- **2026-01-15**: Phase G〜H 完了（追加機能完了）
- **2026-01-31**: Phase I 完了（テスト・ドキュメント完了）
- **2026-02-15**: 本番リリース完了（Deprecated API 廃止前）

---

**この計画書は「計画フェーズ」の成果物です。実装・コミットは次の指示を受けてから実施します。**

**作成者**: Claude (AI Assistant)
**作成日**: 2025-11-15
**対象ブランチ**: `claude/frontend-api-v2.2-refactor-plan-015dtbUVtAe45zBSxv7nof22`
