/**
 * Zod Validation Schemas - Order
 * 受注関連のバリデーションスキーマ
 */

import { z } from 'zod';

/**
 * 受注明細スキーマ
 */
export const orderLineSchema = z.object({
  line_number: z.number().min(1, '明細番号は1以上である必要があります'),
  product_code: z.string().min(1, '製品コードは必須です'),
  quantity: z.number().min(0.01, '数量は0より大きい必要があります'),
  unit: z.string().optional(),
});

/**
 * 受注作成用スキーマ
 */
export const orderCreateSchema = z.object({
  order_number: z.string().min(1, '受注番号は必須です'),
  order_date: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    '有効な日付を入力してください'
  ),
  customer_code: z.string().min(1, '得意先コードは必須です'),
  lines: z.array(orderLineSchema).min(1, '少なくとも1つの明細が必要です'),
});

/**
 * 受注ステータス更新用スキーマ
 */
export const orderStatusUpdateSchema = z.object({
  new_status: z.enum(['pending', 'allocated', 'shipped', 'cancelled'], {
    errorMap: () => ({ message: '無効なステータスです' }),
  }),
});

/**
 * 受注検索用スキーマ
 */
export const orderSearchSchema = z.object({
  status: z.string().optional(),
  customer_code: z.string().optional(),
  skip: z.number().min(0).optional(),
  limit: z.number().min(1).max(100).optional(),
});

/**
 * 型推論
 */
export type OrderLineInput = z.infer<typeof orderLineSchema>;
export type OrderCreateInput = z.infer<typeof orderCreateSchema>;
export type OrderStatusUpdate = z.infer<typeof orderStatusUpdateSchema>;
export type OrderSearchParams = z.infer<typeof orderSearchSchema>;
