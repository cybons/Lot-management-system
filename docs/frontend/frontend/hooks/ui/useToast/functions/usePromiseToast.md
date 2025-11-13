[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useToast](../README.md) / usePromiseToast

# Function: usePromiseToast()

> **usePromiseToast**(): `object`

Defined in: [src/hooks/ui/useToast.ts:229](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useToast.ts#L229)

Promiseトーストフック
(非同期処理の進行状況を表示)

## Returns

`object`

トースト操作関数

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

### promise()

> **promise**: \<`T`\>(`promiseFn`, `messages`) => `Promise`\<`T`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### promiseFn

`Promise`\<`T`\>

##### messages

###### error

`string`

###### loading

`string`

###### success

`string`

#### Returns

`Promise`\<`T`\>

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
const toast = usePromiseToast();

const handleSave = async () => {
  await toast.promise(saveData(), {
    loading: "保存中...",
    success: "保存しました",
    error: "保存に失敗しました",
  });
};
```
