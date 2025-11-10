[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useDialog](../README.md) / useDialog

# Function: useDialog()

> **useDialog**(`defaultOpen`): `object`

Defined in: [src/hooks/ui/useDialog.ts:31](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useDialog.ts#L31)

ダイアログ状態管理フック

## Parameters

### defaultOpen

`boolean` = `false`

初期表示状態

## Returns

`object`

ダイアログ状態と操作関数

### close()

> **close**: () => `void`

#### Returns

`void`

### isOpen

> **isOpen**: `boolean`

### open()

> **open**: () => `void`

#### Returns

`void`

### setIsOpen

> **setIsOpen**: `Dispatch`\<`SetStateAction`\<`boolean`\>\>

### toggle()

> **toggle**: () => `void`

#### Returns

`void`

## Example

```tsx
const dialog = useDialog();

return (
  <>
    <button onClick={dialog.open}>開く</button>
    <Dialog open={dialog.isOpen} onOpenChange={dialog.setIsOpen}>
      <DialogContent>
        <button onClick={dialog.close}>閉じる</button>
      </DialogContent>
    </Dialog>
  </>
);
```
