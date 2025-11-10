[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/orders/api](../README.md) / getOrder

# Function: getOrder()

> **getOrder**(`orderId`): `Promise`\<\{ `created_at`: `string`; `customer_code`: `string`; `customer_order_no?`: `string` \| `null`; `customer_order_no_last6?`: `string` \| `null`; `delivery_mode?`: `string` \| `null`; `id`: `number`; `lines?`: `object`[]; `order_date`: `string`; `order_no`: `string`; `sap_error_msg?`: `string` \| `null`; `sap_order_id?`: `string` \| `null`; `sap_sent_at?`: `string` \| `null`; `sap_status?`: `string` \| `null`; `status`: `string`; `updated_at?`: `string` \| `null`; \}\>

Defined in: [src/features/orders/api.ts:43](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/api.ts#L43)

受注詳細取得

## Parameters

### orderId

`number`

## Returns

`Promise`\<\{ `created_at`: `string`; `customer_code`: `string`; `customer_order_no?`: `string` \| `null`; `customer_order_no_last6?`: `string` \| `null`; `delivery_mode?`: `string` \| `null`; `id`: `number`; `lines?`: `object`[]; `order_date`: `string`; `order_no`: `string`; `sap_error_msg?`: `string` \| `null`; `sap_order_id?`: `string` \| `null`; `sap_sent_at?`: `string` \| `null`; `sap_status?`: `string` \| `null`; `status`: `string`; `updated_at?`: `string` \| `null`; \}\>
