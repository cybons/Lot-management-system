/**
 * MSW Handlers Index
 * 全てのMSWハンドラーを統合
 */

import { lotHandlers } from './lot-handlers';
import { orderHandlers } from './order-handlers';

/**
 * 全てのハンドラーを結合
 */
export const handlers = [...lotHandlers, ...orderHandlers];
