# Phase 4: Frontend Type Integration

## Overview（背景・目的）

- **テーマ**: OpenAPI 統合後の型整合とフロント実装統一
- バックエンドの OpenAPI を**単一ソース**として、フロントの型・API呼び出し・ドキュメントを同期
- 自動生成（`openapi-typescript` / `widdershins` / `typedoc`）で**更新の再現性**を確保

---

## API統合後の型整合戦略

- 生成型: `src/types/api.d.ts`（`openapi-typescript`）
- 参照規約:
  - `paths["/xxx"]["get"]["responses"]["200"]["content"]["application/json"]` を基本とする
  - `components["schemas"]["Foo"]` はドメイン型の参照に限定
- 破壊的変更の検知:
  - `npm run typegen` → `git diff` で差分監視
  - 影響範囲: hooks / services / components（主にレスポンス・パラメータ）

---

## React Query / Hooks 再設計

- QueryKey の一貫性:
  - 例: `["orders", { q, page, pageSize }]`（オブジェクト化してキー衝突を防止）
- 返却型:
  - `type OrderList = paths["/api/orders"]["get"]["responses"]["200"]["content"]["application/json"];`
- エラーハンドリング:
  - サーバー422/500を UIに**ユーザー語**で表示（メッセージマップを `lib/http.ts` で集中管理）
- ミューテーション:
  - 戻り値型を OpenAPI 由来に統一、`onSuccess` で `invalidateQueries` を適用

---

## Barrel崩しと import 最適化

- `src/components/shared/index.ts` など **巨大Barrelの段階的撤廃**
  - 循環参照・ビルド時間増を回避
  - 検索性向上: `import { DataTable } from "@/components/DataTable"` の**直参照**へ置換
- VSCode/TS Server の補完品質が向上、明示インポートで差分レビューが読みやすい

---

## Null安全化と必須化対応

- ポリシー:
  - APIレスポンス由来の `| null | undefined` を**UI層で早期収束**（`??` かガード節）
  - 型スキーマ側は**事実**（nullable/optional）を忠実に保つ
- パターン:
  ```ts
  const safeText = (v: string | null | undefined) => v ?? "";
  if (!order?.id) return <Empty />;
  ```
