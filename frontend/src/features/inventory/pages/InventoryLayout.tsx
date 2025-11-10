/**
 * InventoryLayout.tsx
 *
 * 在庫管理のルートレイアウトコンポーネント
 * - 固定ヘッダー（sticky）でタイトルと操作ボタンを配置
 * - タブUIは使用せず、ページ遷移はルーティングで実現
 */

import { Outlet, useLocation } from "react-router-dom";

// ============================================
// メインコンポーネント
// ============================================

export function InventoryLayout() {
  const location = useLocation();

  // パスからページタイトルを判定
  const title = getPageTitle(location.pathname);

  return (
    <div className="relative">
      {/* 固定ヘッダー */}
      <header
        role="banner"
        className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* 左側: タイトル */}
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>

            {/* 右側: 操作ボタンエリア（将来的に追加可能） */}
            <div className="flex items-center gap-2">
              {/* 必要に応じてフィルタ開閉ボタンやエクスポートボタンなど */}
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main role="main" className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

// ============================================
// ヘルパー関数
// ============================================

/**
 * パスからページタイトルを取得
 */
function getPageTitle(pathname: string): string {
  if (pathname.includes("/inventory/lots")) {
    return "ロット一覧";
  }
  if (pathname.includes("/inventory/moves")) {
    return "入出庫履歴";
  }
  if (pathname.includes("/inventory/summary")) {
    return "在庫サマリ";
  }
  // デフォルト
  return "在庫管理";
}
