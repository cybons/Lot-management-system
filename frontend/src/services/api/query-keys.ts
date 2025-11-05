/**
 * Query Keys
 * React Queryで使用するクエリキーの定義
 */

import type { LotSearchParams, OrderSearchParams } from '@/utils/validators';

/**
 * ロット関連のクエリキー
 */
export const lotKeys = {
  all: ['lots'] as const,
  lists: () => [...lotKeys.all, 'list'] as const,
  list: (params?: LotSearchParams) => [...lotKeys.lists(), params] as const,
  details: () => [...lotKeys.all, 'detail'] as const,
  detail: (id: number) => [...lotKeys.details(), id] as const,
  withStock: () => [...lotKeys.lists(), { has_stock: true }] as const,
  byProduct: (productCode: string) => [...lotKeys.lists(), { product_code: productCode }] as const,
  bySupplier: (supplierCode: string) => [...lotKeys.lists(), { supplier_code: supplierCode }] as const,
};

/**
 * 受注関連のクエリキー
 */
export const orderKeys = {
  all: ['orders'] as const,
  lists: () => [...orderKeys.all, 'list'] as const,
  list: (params?: OrderSearchParams) => [...orderKeys.lists(), params] as const,
  details: () => [...orderKeys.all, 'detail'] as const,
  detail: (id: number) => [...orderKeys.details(), id] as const,
  byStatus: (status: string) => [...orderKeys.lists(), { status }] as const,
  pending: () => [...orderKeys.byStatus('pending')] as const,
  allocated: () => [...orderKeys.byStatus('allocated')] as const,
  shipped: () => [...orderKeys.byStatus('shipped')] as const,
  byCustomer: (customerCode: string) => [...orderKeys.lists(), { customer_code: customerCode }] as const,
};

/**
 * マスタ関連のクエリキー
 */
export const masterKeys = {
  products: {
    all: ['products'] as const,
    lists: () => [...masterKeys.products.all, 'list'] as const,
    list: (params?: Record<string, unknown>) => [...masterKeys.products.lists(), params] as const,
    details: () => [...masterKeys.products.all, 'detail'] as const,
    detail: (code: string) => [...masterKeys.products.details(), code] as const,
  },
  suppliers: {
    all: ['suppliers'] as const,
    lists: () => [...masterKeys.suppliers.all, 'list'] as const,
    list: (params?: Record<string, unknown>) => [...masterKeys.suppliers.lists(), params] as const,
    details: () => [...masterKeys.suppliers.all, 'detail'] as const,
    detail: (code: string) => [...masterKeys.suppliers.details(), code] as const,
  },
  warehouses: {
    all: ['warehouses'] as const,
    lists: () => [...masterKeys.warehouses.all, 'list'] as const,
    list: (params?: Record<string, unknown>) => [...masterKeys.warehouses.lists(), params] as const,
    details: () => [...masterKeys.warehouses.all, 'detail'] as const,
    detail: (code: string) => [...masterKeys.warehouses.details(), code] as const,
  },
  customers: {
    all: ['customers'] as const,
    lists: () => [...masterKeys.customers.all, 'list'] as const,
    list: (params?: Record<string, unknown>) => [...masterKeys.customers.lists(), params] as const,
    details: () => [...masterKeys.customers.all, 'detail'] as const,
    detail: (code: string) => [...masterKeys.customers.details(), code] as const,
  },
};

/**
 * 全てのクエリキーをインバリデートするための配列
 */
export const allQueryKeys = [
  ...lotKeys.all,
  ...orderKeys.all,
  ...masterKeys.products.all,
  ...masterKeys.suppliers.all,
  ...masterKeys.warehouses.all,
  ...masterKeys.customers.all,
] as const;
