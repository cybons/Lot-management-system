[**lot-management-frontend v1.0.0**](../../../../../README.md)

---

[lot-management-frontend](../../../../../README.md) / [components/shared/data/TablePagination](../README.md) / TablePaginationProps

# Interface: TablePaginationProps

Defined in: [src/components/shared/data/TablePagination.tsx:26](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/TablePagination.tsx#L26)

## Properties

### className?

> `optional` **className**: `string`

Defined in: [src/components/shared/data/TablePagination.tsx:40](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/TablePagination.tsx#L40)

クラス名

---

### currentPage

> **currentPage**: `number`

Defined in: [src/components/shared/data/TablePagination.tsx:28](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/TablePagination.tsx#L28)

現在のページ番号(1始まり)

---

### onPageChange()

> **onPageChange**: (`page`) => `void`

Defined in: [src/components/shared/data/TablePagination.tsx:34](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/TablePagination.tsx#L34)

ページ変更時のコールバック

#### Parameters

##### page

`number`

#### Returns

`void`

---

### onPageSizeChange()

> **onPageSizeChange**: (`pageSize`) => `void`

Defined in: [src/components/shared/data/TablePagination.tsx:36](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/TablePagination.tsx#L36)

ページサイズ変更時のコールバック

#### Parameters

##### pageSize

`number`

#### Returns

`void`

---

### pageSize

> **pageSize**: `number`

Defined in: [src/components/shared/data/TablePagination.tsx:30](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/TablePagination.tsx#L30)

1ページあたりの表示件数

---

### pageSizeOptions?

> `optional` **pageSizeOptions**: `number`[]

Defined in: [src/components/shared/data/TablePagination.tsx:38](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/TablePagination.tsx#L38)

ページサイズのオプション

---

### totalCount

> **totalCount**: `number`

Defined in: [src/components/shared/data/TablePagination.tsx:32](https://github.com/cybons-lab/Lot-management-system/blob/27136a70bad131ce7a63fc3b65b7329cb546f591/frontend/src/components/shared/data/TablePagination.tsx#L32)

総件数
