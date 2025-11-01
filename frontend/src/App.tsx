import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/query-client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LotsPage } from "@/pages/lots-page"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50">
        {/* ヘッダー */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-gray-900">
                ロット管理システム
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">管理者</span>
                <button className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                  ログアウト
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="lots" className="space-y-6">
            <TabsList>
              <TabsTrigger value="lots">ロット一覧</TabsTrigger>
              <TabsTrigger value="shipping">出荷管理</TabsTrigger>
              <TabsTrigger value="alerts">アラート</TabsTrigger>
            </TabsList>

            <TabsContent value="lots">
              <LotsPage />
            </TabsContent>

            <TabsContent value="shipping">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">出荷管理</h2>

                {/* 統計カード */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      今月の出荷数
                    </div>
                    <div className="text-3xl font-bold text-gray-900">156</div>
                    <div className="text-sm text-green-600 mt-1">
                      ↑ 12% 先月比
                    </div>
                  </div>
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      出荷準備中
                    </div>
                    <div className="text-3xl font-bold text-gray-900">23</div>
                    <div className="text-sm text-gray-500 mt-1">処理待ち</div>
                  </div>
                  <div className="bg-white border rounded-lg p-6 shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-1">
                      配送中
                    </div>
                    <div className="text-3xl font-bold text-gray-900">45</div>
                    <div className="text-sm text-gray-500 mt-1">追跡中</div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <p className="text-center text-muted-foreground py-8">
                    出荷管理機能は今後実装予定です
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="alerts">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">アラート</h2>

                <div className="space-y-4">
                  <div className="bg-white border-l-4 border-red-500 rounded-lg p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-900">
                            期限切れロット検出
                          </h3>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>
                              LOT-2024-003
                              (特製ソース)
                              が期限切れです。廃棄処理を実施してください。
                            </p>
                          </div>
                          <div className="mt-2 text-xs text-gray-400">
                            2024-11-01 09:30
                          </div>
                        </div>
                      </div>
                      <button className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                        確認
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border-l-4 border-yellow-500 rounded-lg p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-6 w-6 text-yellow-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-gray-900">
                            賞味期限警告
                          </h3>
                          <div className="mt-2 text-sm text-gray-500">
                            <p>
                              LOT-2024-002
                              (有機味噌)
                              の賞味期限が30日以内に到来します。
                            </p>
                          </div>
                          <div className="mt-2 text-xs text-gray-400">
                            2024-11-01 08:15
                          </div>
                        </div>
                      </div>
                      <button className="text-sm px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                        確認
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </QueryClientProvider>
  )
}

export default App
