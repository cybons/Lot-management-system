[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useFilters](../README.md) / useDateRangeFilter

# Function: useDateRangeFilter()

> **useDateRangeFilter**(`initialFrom?`, `initialTo?`): `object`

Defined in: [src/hooks/ui/useFilters.ts:178](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useFilters.ts#L178)

日付範囲フィルター状態管理フック

## Parameters

### initialFrom?

`string`

開始日初期値

### initialTo?

`string`

終了日初期値

## Returns

`object`

日付範囲状態と操作関数

### clear()

> **clear**: () => `void`

#### Returns

`void`

### from

> **from**: `string` \| `undefined`

### isActive

> **isActive**: `boolean`

### reset()

> **reset**: () => `void`

#### Returns

`void`

### setFrom

> **setFrom**: `Dispatch`\<`SetStateAction`\<`string` \| `undefined`\>\>

### setTo

> **setTo**: `Dispatch`\<`SetStateAction`\<`string` \| `undefined`\>\>

### to

> **to**: `string` \| `undefined`

## Example

```tsx
const dateRange = useDateRangeFilter();

return (
  <div>
    <input
      type="date"
      value={dateRange.from || ""}
      onChange={(e) => dateRange.setFrom(e.target.value)}
    />
    <input
      type="date"
      value={dateRange.to || ""}
      onChange={(e) => dateRange.setTo(e.target.value)}
    />
  </div>
);
```
