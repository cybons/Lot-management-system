# Lot Management System

材料在庫をロット単位で一元管理し、OCR で読み取った受注に対して正しいロットを引き当て、在庫不足時には自動で仮発注を起票するシステム。

## 技術スタック

### Backend
- **Framework**: FastAPI 0.115.5
- **ORM**: SQLAlchemy 2.0.36
- **Validation**: Pydantic 2.10.1
- **Database**: PostgreSQL/MySQL (本番), SQLite (開発)

### Frontend
- **Framework**: React 19
- **State**: Jotai, TanStack Query
- **UI**: Radix UI, Tailwind CSS, shadcn
- **Type**: TypeScript (strict mode)

## セットアップ

詳細は各ディレクトリの README を参照：
- [Backend README](./backend/README.md)

## コード品質チェック

### Backend (Python)

```bash
cd backend

# Lint チェック
ruff check app/

# 自動修正
ruff check app/ --fix

# フォーマット
ruff format app/

# CI チェック
ruff check app/ && ruff format --check app/
```

### Frontend (TypeScript)

```bash
cd frontend

# 型チェック
npm run typecheck

# Lint チェック
npm run lint

# 自動修正
npm run lint:fix

# フォーマット
npm run format

# CI チェック
npm run typecheck && npm run lint && npm run format:check
```

## プロジェクト構造

```
.
├── backend/          # FastAPI バックエンド
│   ├── app/
│   │   ├── api/      # API ルーター層
│   │   ├── services/ # ビジネスロジック層
│   │   ├── repositories/ # データアクセス層
│   │   ├── models/   # SQLAlchemy モデル層
│   │   ├── schemas/  # Pydantic スキーマ層
│   │   └── domain/   # ドメインロジック層
│   └── alembic/      # DB マイグレーション
│
├── frontend/         # React フロントエンド
│   ├── src/
│   │   ├── features/ # 機能別コンポーネント
│   │   ├── components/ # 共有コンポーネント
│   │   ├── hooks/    # カスタムフック
│   │   └── types/    # 型定義 (OpenAPI 生成)
│   └── package.json
│
└── docs/             # ドキュメント
    └── architecture/ # アーキテクチャ設計書
```

## ドキュメント

- [Backend README](./backend/README.md)
- [データベーススキーマ](./docs/schema/)
- [アーキテクチャ設計](./docs/architecture/) (Phase 6 で追加予定)
