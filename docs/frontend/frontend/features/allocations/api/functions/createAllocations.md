[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [features/allocations/api](../README.md) / createAllocations

# Function: createAllocations()

> **createAllocations**(`payload`): `Promise`\<[`AllocationResult`](../type-aliases/AllocationResult.md)\>

Defined in: [src/features/allocations/api.ts:24](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/features/allocations/api.ts#L24)

実APIの戻りが success 等でも、UIをブロックしないため order_id を返す

## Parameters

### payload

[`CreateAllocationPayload`](../type-aliases/CreateAllocationPayload.md)

## Returns

`Promise`\<[`AllocationResult`](../type-aliases/AllocationResult.md)\>
