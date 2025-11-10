[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useFilters](../README.md) / useFilters

# Function: useFilters()

> **useFilters**\<`T`\>(`initialFilters`): `object`

Defined in: [src/hooks/ui/useFilters.ts:44](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useFilters.ts#L44)

フィルター状態管理フック

## Type Parameters

### T

`T` _extends_ [`FilterState`](../type-aliases/FilterState.md)

## Parameters

### initialFilters

`T`

初期フィルター状態

## Returns

`object`

フィルター状態と操作関数

### activeCount

> **activeCount**: `number`

### isDefault

> **isDefault**: `boolean`

### reset()

> **reset**: () => `void`

#### Returns

`void`

### resetKey()

> **resetKey**: \<`K`\>(`key`) => `void`

#### Type Parameters

##### K

`K` _extends_ `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

#### Returns

`void`

### set()

> **set**: \<`K`\>(`key`, `value`) => `void`

#### Type Parameters

##### K

`K` _extends_ `string` \| `number` \| `symbol`

#### Parameters

##### key

`K`

##### value

`T`\[`K`\]

#### Returns

`void`

### setMultiple()

> **setMultiple**: (`updates`) => `void`

#### Parameters

##### updates

`Partial`\<`T`\>

#### Returns

`void`

### values

> **values**: `T` = `filters`

## Example

```tsx
const filters = useFilters({
  productCode: "",
  warehouseCode: "",
  status: "active",
});

return (
  <div>
    <input
      value={filters.values.productCode}
      onChange={(e) => filters.set("productCode", e.target.value)}
    />
    <button onClick={filters.reset}>クリア</button>
  </div>
);
```
