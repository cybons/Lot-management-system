[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useTable](../README.md) / useSelection

# Function: useSelection()

> **useSelection**\<`T`\>(`idKey`): `object`

Defined in: [src/hooks/ui/useTable.ts:229](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useTable.ts#L229)

選択状態管理フック

## Type Parameters

### T

`T` _extends_ `Record`\<`string`, `any`\>

## Parameters

### idKey

keyof `T` = `'id'`

アイテムのID キー

## Returns

`object`

選択状態と操作関数

### deselect()

> **deselect**: (`id`) => `void`

#### Parameters

##### id

`any`

#### Returns

`void`

### deselectAll()

> **deselectAll**: () => `void`

#### Returns

`void`

### isSelected()

> **isSelected**: (`id`) => `boolean`

#### Parameters

##### id

`any`

#### Returns

`boolean`

### select()

> **select**: (`id`) => `void`

#### Parameters

##### id

`any`

#### Returns

`void`

### selectAll()

> **selectAll**: (`items`) => `void`

#### Parameters

##### items

`T`[]

#### Returns

`void`

### selectedArray

> **selectedArray**: `any`[]

### selectedCount

> **selectedCount**: `number`

### selectedIds

> **selectedIds**: `Set`\<`any`\>

### toggle()

> **toggle**: (`id`) => `void`

#### Parameters

##### id

`any`

#### Returns

`void`

### toggleAll()

> **toggleAll**: (`items`) => `void`

#### Parameters

##### items

`T`[]

#### Returns

`void`

## Example

```tsx
const selection = useSelection("id");

return (
  <Table>
    {items.map((item) => (
      <TableRow
        key={item.id}
        selected={selection.isSelected(item.id)}
        onClick={() => selection.toggle(item.id)}
      />
    ))}
  </Table>
);
```
