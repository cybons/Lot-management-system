# Deprecated Routes

このディレクトリには、使用されなくなったルータファイルが格納されています。

## 削除日: 2025-11-10

### 削除理由

以下のルータファイルは `app/main.py` で登録されておらず、他のファイルからもimportされていないため、未使用と判断しました。

| ファイル | 削除理由 |
|---------|---------|
| `alerts.py` | main.py で未登録、参照なし |
| `shipping.py` | main.py で未登録、参照なし |
| `orders.py` | `orders_refactored.py` に移行済み、main.py では orders_refactored からimport |
| `masters_bulk_load.py` | `masters.py` に統合済み、個別エンドポイント不要 |
| `masters_customers.py` | `masters.py` に統合済み、個別エンドポイント不要 |
| `masters_products.py` | `masters.py` に統合済み、個別エンドポイント不要 |
| `masters_suppliers.py` | `masters.py` に統合済み、個別エンドポイント不要 |
| `masters_warehouses.py` | `masters.py` に統合済み、個別エンドポイント不要 |

### 復元方法

これらのファイルが必要になった場合は、以下のコマンドで復元できます：

```bash
git mv deprecated/routes/<filename> app/api/routes/
```

### 完全削除の予定

このディレクトリのファイルは、Phase 6 完了後、1スプリント（2週間）問題がなければ完全に削除される予定です。

### 関連コミット

- Refactor commit: [このコミットID]
- Related issue: リファクタリング計画書参照
