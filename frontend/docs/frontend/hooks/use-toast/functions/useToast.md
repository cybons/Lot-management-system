[**lot-management-frontend v1.0.0**](../../../README.md)

---

[lot-management-frontend](../../../README.md) / [hooks/use-toast](../README.md) / useToast

# Function: useToast()

> **useToast**(): `object`

Defined in: [src/hooks/use-toast.ts:162](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/use-toast.ts#L162)

## Returns

`object`

### dismiss()

> **dismiss**: (`toastId?`) => `void`

#### Parameters

##### toastId?

`string`

#### Returns

`void`

### toast()

> **toast**: (`__namedParameters`) => `object`

#### Parameters

##### \_\_namedParameters

[`ToastProps`](../interfaces/ToastProps.md)

#### Returns

`object`

##### dismiss()

> **dismiss**: () => `void`

###### Returns

`void`

##### id

> **id**: `string`

##### update()

> **update**: (`props`) => `void`

###### Parameters

###### props

`ToasterToast`

###### Returns

`void`

### toasts

> **toasts**: `ToasterToast`[]
