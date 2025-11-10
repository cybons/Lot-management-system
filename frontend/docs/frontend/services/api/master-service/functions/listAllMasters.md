[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [services/api/master-service](../README.md) / listAllMasters

# Function: listAllMasters()

> **listAllMasters**(): `Promise`\<\{ `customers`: [`Customer`](../../../../utils/validators/master-schemas/type-aliases/Customer.md)[]; `products`: [`Product`](../../../../utils/validators/master-schemas/type-aliases/Product.md)[]; `suppliers`: [`Supplier`](../../../../utils/validators/master-schemas/type-aliases/Supplier.md)[]; `warehouses`: [`Warehouse`](../../../../utils/validators/master-schemas/type-aliases/Warehouse.md)[]; \}\>

Defined in: [src/services/api/master-service.ts:52](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/services/api/master-service.ts#L52)

全マスタをまとめて取得

- 製品、仕入先、倉庫、得意先を同時に取得

## Returns

`Promise`\<\{ `customers`: [`Customer`](../../../../utils/validators/master-schemas/type-aliases/Customer.md)[]; `products`: [`Product`](../../../../utils/validators/master-schemas/type-aliases/Product.md)[]; `suppliers`: [`Supplier`](../../../../utils/validators/master-schemas/type-aliases/Supplier.md)[]; `warehouses`: [`Warehouse`](../../../../utils/validators/master-schemas/type-aliases/Warehouse.md)[]; \}\>
