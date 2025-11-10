[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/inventory/api](../README.md) / getLots

# Function: getLots()

> **getLots**(`params?`): `Promise`\<`object`[]\>

Defined in: [src/features/inventory/api.ts:19](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/inventory/api.ts#L19)

ロット一覧取得

## Parameters

### params?

クエリパラメータ（製品、倉庫、期限などでフィルタ可能）

#### expiry_from?

`string` \| `null`

#### expiry_to?

`string` \| `null`

#### limit?

`number`

#### product_code?

`string` \| `null`

#### skip?

`number`

#### supplier_code?

`string` \| `null`

#### warehouse_code?

`string` \| `null`

#### with_stock?

`boolean`

## Returns

`Promise`\<`object`[]\>

ロット一覧
