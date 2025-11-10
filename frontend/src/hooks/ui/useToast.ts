/**
 * トースト通知フック
 *
 * スナックバー形式の通知メッセージを管理
 */

import { useState, useCallback } from "react";

/**
 * トーストの種類
 */
export type ToastVariant = "success" | "error" | "warning" | "info";

/**
 * トーストメッセージの型
 */
export interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
}

/**
 * トースト通知フック
 *
 * @param defaultDuration - デフォルト表示時間(ミリ秒)
 * @returns トースト状態と操作関数
 *
 * @example
 * ```tsx
 * const toast = useToast();
 *
 * const handleSave = async () => {
 *   try {
 *     await saveData();
 *     toast.success('保存しました');
 *   } catch (error) {
 *     toast.error('保存に失敗しました');
 *   }
 * };
 *
 * return (
 *   <div>
 *     <button onClick={handleSave}>保存</button>
 *     <ToastContainer toasts={toast.toasts} onClose={toast.dismiss} />
 *   </div>
 * );
 * ```
 */
export function useToast(defaultDuration = 3000) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const show = useCallback(
    (message: string, variant: ToastVariant = "info", duration?: number) => {
      const id = Math.random().toString(36).substring(7);
      const newToast: Toast = {
        id,
        message,
        variant,
        duration: duration ?? defaultDuration,
      };

      setToasts((prev) => [...prev, newToast]);

      // 自動削除
      const timeoutDuration = duration ?? defaultDuration;
      if (timeoutDuration > 0) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, timeoutDuration);
      }

      return id;
    },
    [defaultDuration],
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const dismissAll = useCallback(() => {
    setToasts([]);
  }, []);

  const success = useCallback(
    (message: string, duration?: number) => show(message, "success", duration),
    [show],
  );

  const error = useCallback(
    (message: string, duration?: number) => show(message, "error", duration),
    [show],
  );

  const warning = useCallback(
    (message: string, duration?: number) => show(message, "warning", duration),
    [show],
  );

  const info = useCallback(
    (message: string, duration?: number) => show(message, "info", duration),
    [show],
  );

  return {
    toasts,
    show,
    dismiss,
    dismissAll,
    success,
    error,
    warning,
    info,
  };
}

/**
 * シングルトーストフック
 * (一度に1つのトーストのみ表示)
 *
 * @param defaultDuration - デフォルト表示時間(ミリ秒)
 * @returns トースト状態と操作関数
 *
 * @example
 * ```tsx
 * const toast = useSingleToast();
 *
 * return (
 *   <div>
 *     <button onClick={() => toast.success('成功しました')}>実行</button>
 *     {toast.current && (
 *       <ToastMessage
 *         message={toast.current.message}
 *         variant={toast.current.variant}
 *         onClose={toast.dismiss}
 *       />
 *     )}
 *   </div>
 * );
 * ```
 */
export function useSingleToast(defaultDuration = 3000) {
  const [current, setCurrent] = useState<Toast | null>(null);

  const show = useCallback(
    (message: string, variant: ToastVariant = "info", duration?: number) => {
      const id = Math.random().toString(36).substring(7);
      const newToast: Toast = {
        id,
        message,
        variant,
        duration: duration ?? defaultDuration,
      };

      setCurrent(newToast);

      // 自動削除
      const timeoutDuration = duration ?? defaultDuration;
      if (timeoutDuration > 0) {
        setTimeout(() => {
          setCurrent(null);
        }, timeoutDuration);
      }

      return id;
    },
    [defaultDuration],
  );

  const dismiss = useCallback(() => {
    setCurrent(null);
  }, []);

  const success = useCallback(
    (message: string, duration?: number) => show(message, "success", duration),
    [show],
  );

  const error = useCallback(
    (message: string, duration?: number) => show(message, "error", duration),
    [show],
  );

  const warning = useCallback(
    (message: string, duration?: number) => show(message, "warning", duration),
    [show],
  );

  const info = useCallback(
    (message: string, duration?: number) => show(message, "info", duration),
    [show],
  );

  return {
    current,
    show,
    dismiss,
    success,
    error,
    warning,
    info,
  };
}

/**
 * Promiseトーストフック
 * (非同期処理の進行状況を表示)
 *
 * @returns トースト操作関数
 *
 * @example
 * ```tsx
 * const toast = usePromiseToast();
 *
 * const handleSave = async () => {
 *   await toast.promise(
 *     saveData(),
 *     {
 *       loading: '保存中...',
 *       success: '保存しました',
 *       error: '保存に失敗しました',
 *     }
 *   );
 * };
 * ```
 */
export function usePromiseToast() {
  const toast = useToast();

  const promise = useCallback(
    async <T>(
      promiseFn: Promise<T>,
      messages: {
        loading: string;
        success: string;
        error: string;
      },
    ): Promise<T> => {
      const loadingId = toast.info(messages.loading, 0); // 無期限表示

      try {
        const result = await promiseFn;
        toast.dismiss(loadingId);
        toast.success(messages.success);
        return result;
      } catch (error) {
        toast.dismiss(loadingId);
        toast.error(messages.error);
        throw error;
      }
    },
    [toast],
  );

  return {
    ...toast,
    promise,
  };
}
