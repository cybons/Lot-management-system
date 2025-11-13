[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useToast](../README.md) / useToast

# Function: useToast()

> **useToast**(`defaultDuration`): `object`

Defined in: [src/hooks/ui/useToast.ts:51](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useToast.ts#L51)

トースト通知フック

## Parameters

### defaultDuration

`number` = `3000`

デフォルト表示時間(ミリ秒)

## Returns

`object`

トースト状態と操作関数

### dismiss()

> **dismiss**: (`id`) => `void`

#### Parameters

##### id

`string`

#### Returns

`void`

### dismissAll()

> **dismissAll**: () => `void`

#### Returns

`void`

### error()

> **error**: (`message`, `duration?`) => `string`

#### Parameters

##### message

`string`

##### duration?

`number`

#### Returns

`string`

### info()

> **info**: (`message`, `duration?`) => `string`

#### Parameters

##### message

`string`

##### duration?

`number`

#### Returns

`string`

### show()

> **show**: (`message`, `variant`, `duration?`) => `string`

#### Parameters

##### message

`string`

##### variant

[`ToastVariant`](../type-aliases/ToastVariant.md) = `'info'`

##### duration?

`number`

#### Returns

`string`

### success()

> **success**: (`message`, `duration?`) => `string`

#### Parameters

##### message

`string`

##### duration?

`number`

#### Returns

`string`

### toasts

> **toasts**: [`Toast`](../interfaces/Toast.md)[]

### warning()

> **warning**: (`message`, `duration?`) => `string`

#### Parameters

##### message

`string`

##### duration?

`number`

#### Returns

`string`

## Example

```tsx
const toast = useToast();

const handleSave = async () => {
  try {
    await saveData();
    toast.success("保存しました");
  } catch (error) {
    toast.error("保存に失敗しました");
  }
};

return (
  <div>
    <button onClick={handleSave}>保存</button>
    <ToastContainer toasts={toast.toasts} onClose={toast.dismiss} />
  </div>
);
```
