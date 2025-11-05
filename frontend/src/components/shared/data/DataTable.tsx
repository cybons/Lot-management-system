/**
 * 汎用データテーブルコンポーネント
 * 
 * ソート、ページネーション、選択機能を持つテーブル
 */

import React from 'react';
import type { SortState } from '@/hooks/ui/useTable';

/**
 * カラム定義
 */
export interface Column<T> {
  /** カラムID (ソート用) */
  id: string;
  /** カラムヘッダー表示名 */
  header: string;
  /** セル値を取得・表示する関数 */
  cell: (row: T) => React.ReactNode;
  /** ソート可能か */
  sortable?: boolean;
  /** カラム幅 */
  width?: string;
  /** テキスト揃え */
  align?: 'left' | 'center' | 'right';
}

interface DataTableProps<T> {
  /** 表示するデータ */
  data: T[];
  /** カラム定義 */
  columns: Column<T>[];
  /** 行のキー取得関数 */
  getRowKey: (row: T) => string | number;
  /** ソート状態 */
  sort?: SortState;
  /** ソート変更ハンドラー */
  onSort?: (columnId: string) => void;
  /** 行クリックハンドラー */
  onRowClick?: (row: T) => void;
  /** 選択された行 */
  selectedRows?: Set<string | number>;
  /** ローディング状態 */
  isLoading?: boolean;
  /** エラー状態 */
  error?: Error | null;
  /** 空状態メッセージ */
  emptyMessage?: string;
  /** 追加のクラス名 */
  className?: string;
}

/**
 * 汎用データテーブルコンポーネント
 * 
 * @example
 * ```tsx
 * const columns: Column<Lot>[] = [
 *   {
 *     id: 'lot_no',
 *     header: 'ロット番号',
 *     cell: (lot) => lot.lot_no,
 *     sortable: true,
 *   },
 *   {
 *     id: 'product_name',
 *     header: '製品名',
 *     cell: (lot) => lot.product_name,
 *   },
 * ];
 * 
 * <DataTable
 *   data={lots}
 *   columns={columns}
 *   getRowKey={(lot) => lot.id}
 *   sort={sort}
 *   onSort={handleSort}
 * />
 * ```
 */
export function DataTable<T>({
  data,
  columns,
  getRowKey,
  sort,
  onSort,
  onRowClick,
  selectedRows,
  isLoading,
  error,
  emptyMessage = 'データがありません',
  className = '',
}: DataTableProps<T>) {
  // ローディング状態
  if (isLoading) {
    return (
      <div className="rounded-lg border">
        <div className="p-8 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent" />
          <p className="mt-2 text-sm text-gray-600">読み込み中...</p>
        </div>
      </div>
    );
  }
  
  // エラー状態
  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-8">
        <p className="text-center text-sm text-red-600">
          エラーが発生しました: {error.message}
        </p>
      </div>
    );
  }
  
  // 空状態
  if (data.length === 0) {
    return (
      <div className="rounded-lg border">
        <div className="p-8 text-center">
          <p className="text-sm text-gray-600">{emptyMessage}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`overflow-x-auto rounded-lg border ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                scope="col"
                className={`px-6 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 ${
                  column.align === 'center' ? 'text-center' : 
                  column.align === 'right' ? 'text-right' : 
                  'text-left'
                } ${column.sortable && onSort ? 'cursor-pointer select-none hover:bg-gray-100' : ''}`}
                style={{ width: column.width }}
                onClick={() => column.sortable && onSort?.(column.id)}
              >
                <div className="flex items-center justify-between">
                  <span>{column.header}</span>
                  
                  {column.sortable && onSort && (
                    <span className="ml-2">
                      {sort?.column === column.id ? (
                        sort.direction === 'asc' ? '↑' : 
                        sort.direction === 'desc' ? '↓' : 
                        '⇅'
                      ) : (
                        '⇅'
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        
        <tbody className="divide-y divide-gray-200 bg-white">
          {data.map((row) => {
            const rowKey = getRowKey(row);
            const isSelected = selectedRows?.has(rowKey);
            
            return (
              <tr
                key={rowKey}
                className={`
                  ${onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}
                  ${isSelected ? 'bg-blue-50' : ''}
                `}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className={`whitespace-nowrap px-6 py-4 text-sm ${
                      column.align === 'center' ? 'text-center' : 
                      column.align === 'right' ? 'text-right' : 
                      'text-left'
                    }`}
                  >
                    {column.cell(row)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/**
 * テーブルのページネーションコンポーネント
 */
interface TablePaginationProps {
  /** 現在のページ */
  page: number;
  /** ページサイズ */
  pageSize: number;
  /** 総アイテム数 */
  totalItems: number;
  /** 総ページ数 */
  totalPages: number;
  /** ページ変更ハンドラー */
  onPageChange: (page: number) => void;
  /** ページサイズ変更ハンドラー */
  onPageSizeChange?: (pageSize: number) => void;
  /** ページサイズの選択肢 */
  pageSizeOptions?: number[];
}

export function TablePagination({
  page,
  pageSize,
  totalItems,
  totalPages,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50, 100],
}: TablePaginationProps) {
  const startItem = (page - 1) * pageSize + 1;
  const endItem = Math.min(page * pageSize, totalItems);
  
  return (
    <div className="flex items-center justify-between border-t bg-white px-4 py-3">
      <div className="flex items-center space-x-2">
        {onPageSizeChange && (
          <>
            <span className="text-sm text-gray-700">表示件数:</span>
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="rounded-md border border-gray-300 py-1 pl-2 pr-8 text-sm focus:border-blue-500 focus:outline-none"
            >
              {pageSizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}件
                </option>
              ))}
            </select>
          </>
        )}
        
        <span className="text-sm text-gray-700">
          {totalItems}件中 {startItem}～{endItem}件を表示
        </span>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          className="rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          最初
        </button>
        
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className="rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          前へ
        </button>
        
        <span className="text-sm text-gray-700">
          {page} / {totalPages}
        </span>
        
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className="rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          次へ
        </button>
        
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
          className="rounded-md px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          最後
        </button>
      </div>
    </div>
  );
}
