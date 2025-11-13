[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useToast](../README.md) / useSingleToast

# Function: useSingleToast()

> **useSingleToast**(`defaultDuration`): `object`

Defined in: [src/hooks/ui/useToast.ts:144](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useToast.ts#L144)

シングルトーストフック
(一度に1つのトーストのみ表示)

## Parameters

### defaultDuration

`number` = `3000`

デフォルト表示時間(ミリ秒)

## Returns

`object`

トースト状態と操作関数

### current

> **current**: [`Toast`](../interfaces/Toast.md) \| `null`

### dismiss()

> **dismiss**: () => `void`

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
const toast = useSingleToast();

return (
  <div>
    <button onClick={() => toast.success("成功しました")}>実行</button>
    {toast.current && (
      <ToastMessage
        message={toast.current.message}
        variant={toast.current.variant}
        onClose={toast.dismiss}
      />
    )}
  </div>
);
```
