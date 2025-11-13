[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useDialog](../README.md) / useMultipleDialogs

# Function: useMultipleDialogs()

> **useMultipleDialogs**\<`T`\>(`dialogNames`): `Record`\<`T`, `ReturnType`\<_typeof_ [`useDialog`](useDialog.md)\>\>

Defined in: [src/hooks/ui/useDialog.ts:200](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useDialog.ts#L200)

複数ダイアログ状態管理フック

## Type Parameters

### T

`T` _extends_ `string`

## Parameters

### dialogNames

readonly `T`[]

ダイアログ名の配列

## Returns

`Record`\<`T`, `ReturnType`\<_typeof_ [`useDialog`](useDialog.md)\>\>

各ダイアログの状態と操作関数

## Example

```tsx
const dialogs = useMultipleDialogs(["create", "edit", "delete"]);

return (
  <>
    <button onClick={dialogs.create.open}>新規作成</button>
    <button onClick={dialogs.edit.open}>編集</button>
    <button onClick={dialogs.delete.open}>削除</button>

    <Dialog open={dialogs.create.isOpen} onOpenChange={dialogs.create.setIsOpen}>
      ...
    </Dialog>
  </>
);
```
