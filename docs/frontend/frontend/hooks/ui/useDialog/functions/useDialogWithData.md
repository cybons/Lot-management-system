[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useDialog](../README.md) / useDialogWithData

# Function: useDialogWithData()

> **useDialogWithData**\<`T`\>(`defaultData?`): `object`

Defined in: [src/hooks/ui/useDialog.ts:72](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useDialog.ts#L72)

データ付きダイアログ状態管理フック

## Type Parameters

### T

`T` = `unknown`

## Parameters

### defaultData?

`T`

初期データ

## Returns

`object`

ダイアログ状態と操作関数

### close()

> **close**: () => `void`

#### Returns

`void`

### data

> **data**: `T` \| `undefined`

### isOpen

> **isOpen**: `boolean`

### open()

> **open**: (`newData?`) => `void`

#### Parameters

##### newData?

`T`

#### Returns

`void`

### setData

> **setData**: `Dispatch`\<`SetStateAction`\<`T` \| `undefined`\>\>

### setIsOpen

> **setIsOpen**: `Dispatch`\<`SetStateAction`\<`boolean`\>\>

### toggle()

> **toggle**: (`newData?`) => `void`

#### Parameters

##### newData?

`T`

#### Returns

`void`

## Example

```tsx
const editDialog = useDialogWithData<Lot>();

return (
  <>
    <button onClick={() => editDialog.open(selectedLot)}>編集</button>
    <Dialog open={editDialog.isOpen} onOpenChange={editDialog.setIsOpen}>
      <DialogContent>
        <LotForm initialData={editDialog.data} onSubmit={() => editDialog.close()} />
      </DialogContent>
    </Dialog>
  </>
);
```
