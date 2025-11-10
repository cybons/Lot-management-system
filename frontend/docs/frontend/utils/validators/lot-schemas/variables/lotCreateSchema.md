[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [utils/validators/lot-schemas](../README.md) / lotCreateSchema

# Variable: lotCreateSchema

> `const` **lotCreateSchema**: `ZodObject`\<\{ `expiry_date`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; `initial_quantity`: `ZodOptional`\<`ZodNumber`\>; `lot_number`: `ZodString`; `product_code`: `ZodString`; `receipt_date`: `ZodString`; `supplier_code`: `ZodString`; `warehouse_code`: `ZodOptional`\<`ZodNullable`\<`ZodString`\>\>; \}, `$strip`\>

Defined in: [src/utils/validators/lot-schemas.ts:11](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/utils/validators/lot-schemas.ts#L11)

ロット作成用スキーマ
