[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [features/orders/hooks/useMasters](../README.md) / useCustomerDefaultWarehouses

# Function: useCustomerDefaultWarehouses()

> **useCustomerDefaultWarehouses**(`customerCode?`): `UseQueryResult`\<`any`[], `Error`\>

Defined in: [src/features/orders/hooks/useMasters.ts:10](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/orders/hooks/useMasters.ts#L10)

得意先のデフォルト出荷倉庫を取得する将来拡張用フック。
現状は API 未実装でも落ちないようにフェールセーフで空配列を返します。

## Parameters

### customerCode?

`string`

## Returns

`UseQueryResult`\<`any`[], `Error`\>
