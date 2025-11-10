[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useFilters](../README.md) / filterData

# Function: filterData()

> **filterData**\<`T`\>(`data`, `filters`): `T`[]

Defined in: [src/hooks/ui/useFilters.ts:223](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useFilters.ts#L223)

データをフィルタリングするヘルパー関数

## Type Parameters

### T

`T`

## Parameters

### data

`T`[]

フィルタリング対象のデータ

### filters

`Record`\<`string`, (`item`) => `boolean`\>

フィルター条件

## Returns

`T`[]

フィルタリングされたデータ

## Example

```tsx
const filteredData = filterData(lots, {
  productCode: (lot) => !productCode || lot.product_code === productCode,
  hasStock: (lot) => lot.current_quantity > 0,
});
```
