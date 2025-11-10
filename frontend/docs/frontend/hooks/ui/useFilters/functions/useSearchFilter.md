[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useFilters](../README.md) / useSearchFilter

# Function: useSearchFilter()

> **useSearchFilter**(`initialValue`): `object`

Defined in: [src/hooks/ui/useFilters.ts:119](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useFilters.ts#L119)

検索フィルター状態管理フック
(検索キーワード特化版)

## Parameters

### initialValue

`string` = `''`

初期値

## Returns

`object`

検索状態と操作関数

### clear()

> **clear**: () => `void`

#### Returns

`void`

### handleSearch()

> **handleSearch**: () => `void`

#### Returns

`void`

### isActive

> **isActive**: `boolean`

### reset()

> **reset**: () => `void`

#### Returns

`void`

### searchTerm

> **searchTerm**: `string`

### setValue

> **setValue**: `Dispatch`\<`SetStateAction`\<`string`\>\>

### value

> **value**: `string`

## Example

```tsx
const search = useSearchFilter();

return (
  <input
    value={search.value}
    onChange={(e) => search.setValue(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && search.handleSearch()}
  />
);
```
