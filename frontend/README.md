# ロット管理システム - フロントエンド

Tailwind CSS + shadcn/ui + React + TypeScript + Vite による Web アプリケーション

## 🚀 セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

アプリケーションは http://localhost:5173 で起動します。

### 3. ビルド

```bash
npm run build
```

## 📁 プロジェクト構成

```
frontend/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/uiコンポーネント
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   └── tabs.tsx
│   │   ├── lot-table.tsx    # ロットテーブルコンポーネント
│   │   └── add-lot-dialog.tsx  # ロット追加ダイアログ
│   ├── hooks/
│   │   └── use-lots.ts      # ロット管理用カスタムフック
│   ├── lib/
│   │   ├── api-client.ts    # API クライアント
│   │   ├── query-client.ts  # React Query クライアント
│   │   └── utils.ts         # ユーティリティ関数
│   ├── pages/
│   │   └── lots-page.tsx    # ロット一覧ページ
│   ├── types/
│   │   └── index.ts         # TypeScript 型定義
│   ├── App.tsx              # メインアプリケーション
│   ├── main.tsx             # エントリーポイント
│   └── index.css            # グローバルスタイル
├── index.html
├── package.json
├── tailwind.config.js       # Tailwind CSS 設定
├── postcss.config.js        # PostCSS 設定
├── tsconfig.json            # TypeScript 設定
└── vite.config.ts           # Vite 設定
```

## 🎨 技術スタック

### コアライブラリ
- **React 19** - UI ライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツール

### UI フレームワーク
- **Tailwind CSS** - ユーティリティファーストCSS
- **shadcn/ui** - アクセシブルなコンポーネントライブラリ
- **Radix UI** - プリミティブコンポーネント
- **Lucide React** - アイコンライブラリ

### データ管理
- **TanStack Query** - サーバー状態管理
- **TanStack Router** - ルーティング（今後使用予定）
- **TanStack Table** - テーブル（今後使用予定）
- **Jotai** - クライアント状態管理（今後使用予定）

### フォーム
- **React Hook Form** - フォーム管理（今後使用予定）
- **Zod** - バリデーション（今後使用予定）

### ユーティリティ
- **date-fns** - 日付操作
- **clsx** - クラス名結合
- **tailwind-merge** - Tailwindクラスのマージ

## ✨ 主な機能

### 1. ロット管理
- ✅ ロット一覧表示
- ✅ 新規ロット登録
- ✅ フィルター機能（ロットID、製品名、ステータス）
- ✅ ロット詳細表示
- ✅ ロット編集
- ✅ ロット削除

### 2. 出荷管理（今後実装）
- 出荷一覧表示
- 新規出荷登録
- 出荷統計ダッシュボード

### 3. アラート管理（今後実装）
- 期限切れロット検出
- 賞味期限警告
- 在庫低下通知

## 🔌 バックエンド連携

### API エンドポイント

バックエンドAPIは `http://localhost:8000` で動作します。
Viteの開発サーバーは自動的にプロキシします。

```typescript
// src/lib/api-client.ts
const API_BASE_URL = "/api"  // /api -> http://localhost:8000/api にプロキシ

api.lots.list()     // GET /api/lots
api.lots.create()   // POST /api/lots
api.lots.update()   // PUT /api/lots/:id
api.lots.delete()   // DELETE /api/lots/:id
```

### プロキシ設定

`vite.config.ts`:
```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
})
```

## 🎯 開発Tips

### shadcn/uiコンポーネントの追加

新しいコンポーネントを追加する場合は、shadcn/uiのドキュメントからコードをコピーして
`src/components/ui/` に配置します。

例：Cardコンポーネントの追加
```bash
# shadcn/ui CLIを使う場合（オプション）
npx shadcn-ui@latest add card
```

### カスタムフックの作成

React Query を使ったカスタムフックの例：

```typescript
// src/hooks/use-lots.ts
export function useLots() {
  return useQuery({
    queryKey: ["lots"],
    queryFn: api.lots.list,
  })
}
```

### スタイリング

Tailwind CSSのユーティリティクラスを使用：

```tsx
<div className="bg-white border rounded-lg p-6 shadow-sm">
  <h2 className="text-2xl font-bold text-gray-900">タイトル</h2>
</div>
```

クラス名の動的な結合には `cn` ユーティリティを使用：

```tsx
import { cn } from "@/lib/utils"

<button className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)}>
```

## 🐛 トラブルシューティング

### Tailwind CSSが適用されない

1. `npm install` を実行して依存関係を再インストール
2. 開発サーバーを再起動: `npm run dev`
3. ブラウザのキャッシュをクリア

### 型エラーが発生する

```bash
# TypeScript型チェック
npm run build

# または
npx tsc --noEmit
```

### APIリクエストがCORSエラーになる

バックエンドで CORS を設定してください：

```python
# backend/app/main.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 📚 参考リンク

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Radix UI Documentation](https://www.radix-ui.com/)

## 📝 ライセンス

MIT License
