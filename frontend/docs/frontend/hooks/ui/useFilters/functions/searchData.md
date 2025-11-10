[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useFilters](../README.md) / searchData

# Function: searchData()

> **searchData**\<`T`\>(`data`, `searchTerm`, `searchKeys`): `T`[]

Defined in: [src/hooks/ui/useFilters.ts:245](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useFilters.ts#L245)

検索キーワードでデータをフィルタリングするヘルパー関数

## Type Parameters

### T

`T` _extends_ `Record`\<`string`, `any`\>

## Parameters

### data

`T`[]

フィルタリング対象のデータ

### searchTerm

`string`

検索キーワード

### searchKeys

keyof `T`[]

検索対象のキー

## Returns

`T`[]

フィルタリングされたデータ

## Example

```tsx
const filtered = searchData(lots, searchTerm, ["lot_no", "product_code", "product_name"]);
```
