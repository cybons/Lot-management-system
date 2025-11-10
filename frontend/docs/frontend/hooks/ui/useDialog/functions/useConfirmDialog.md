[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useDialog](../README.md) / useConfirmDialog

# Function: useConfirmDialog()

> **useConfirmDialog**(): `object`

Defined in: [src/hooks/ui/useDialog.ts:128](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useDialog.ts#L128)

確認ダイアログ状態管理フック

## Returns

`object`

確認ダイアログ状態と操作関数

### close()

> **close**: () => `void`

#### Returns

`void`

### config

> **config**: \{ `cancelText?`: `string`; `confirmText?`: `string`; `message`: `string`; `onCancel?`: () => `void`; `onConfirm?`: () => `void`; `title`: `string`; \} \| `null`

### confirm()

> **confirm**: (`options`) => `Promise`\<`boolean`\>

#### Parameters

##### options

###### cancelText?

`string`

###### confirmText?

`string`

###### message

`string`

###### title

`string`

#### Returns

`Promise`\<`boolean`\>

### isOpen

> **isOpen**: `boolean`

## Example

```tsx
const confirmDialog = useConfirmDialog();

const handleDelete = async () => {
  const confirmed = await confirmDialog.confirm({
    title: "削除確認",
    message: "本当に削除しますか?",
  });

  if (confirmed) {
    // 削除処理
  }
};
```
