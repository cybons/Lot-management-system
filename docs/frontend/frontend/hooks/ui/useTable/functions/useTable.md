[**lot-management-frontend v1.0.0**](../../../../README.md)

---

[lot-management-frontend](../../../../README.md) / [hooks/ui/useTable](../README.md) / useTable

# Function: useTable()

> **useTable**\<`T`\>(`options?`): `object`

Defined in: [src/hooks/ui/useTable.ts:59](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/hooks/ui/useTable.ts#L59)

テーブル状態管理フック

## Type Parameters

### T

`T` _extends_ `string` = `string`

## Parameters

### options?

オプション

#### initialPage?

`number`

#### initialPageSize?

`number`

#### initialSort?

[`SortState`](../interfaces/SortState.md)\<`T`\>

## Returns

`object`

テーブル状態と操作関数

### calculatePagination()

> **calculatePagination**: (`totalItems`) => [`PaginationState`](../interfaces/PaginationState.md)

#### Parameters

##### totalItems

`number`

#### Returns

[`PaginationState`](../interfaces/PaginationState.md)

### firstPage()

> **firstPage**: () => `void`

#### Returns

`void`

### goToPage()

> **goToPage**: (`newPage`, `totalPages`) => `void`

#### Parameters

##### newPage

`number`

##### totalPages

`number`

#### Returns

`void`

### handleSort()

> **handleSort**: (`column`) => `void`

#### Parameters

##### column

`T`

#### Returns

`void`

### lastPage()

> **lastPage**: (`totalPages`) => `void`

#### Parameters

##### totalPages

`number`

#### Returns

`void`

### nextPage()

> **nextPage**: (`totalPages`) => `void`

#### Parameters

##### totalPages

`number`

#### Returns

`void`

### page

> **page**: `number`

### pageSize

> **pageSize**: `number`

### paginateData()

> **paginateData**: \<`D`\>(`data`) => `D`[]

#### Type Parameters

##### D

`D`

#### Parameters

##### data

`D`[]

#### Returns

`D`[]

### previousPage()

> **previousPage**: () => `void`

#### Returns

`void`

### resetSort()

> **resetSort**: () => `void`

#### Returns

`void`

### setPage

> **setPage**: `Dispatch`\<`SetStateAction`\<`number`\>\>

### setPageSize()

> **setPageSize**: (`newSize`) => `void` = `changePageSize`

#### Parameters

##### newSize

`number`

#### Returns

`void`

### setSort

> **setSort**: `Dispatch`\<`SetStateAction`\<[`SortState`](../interfaces/SortState.md)\<`T`\>\>\>

### sort

> **sort**: [`SortState`](../interfaces/SortState.md)\<`T`\>

### sortData()

> **sortData**: \<`D`\>(`data`) => `D`[]

#### Type Parameters

##### D

`D` _extends_ `Record`\<`string`, `any`\>

#### Parameters

##### data

`D`[]

#### Returns

`D`[]

## Example

```tsx
const table = useTable({
  initialPageSize: 25,
  initialSort: { column: "created_at", direction: "desc" },
});

const sortedData = table.sortData(data);
const paginatedData = table.paginateData(sortedData);

return (
  <DataTable
    data={paginatedData}
    onSort={table.handleSort}
    currentSort={table.sort}
    pagination={table.pagination}
    onPageChange={table.setPage}
  />
);
```
