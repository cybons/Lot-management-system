# scripts/audit/test_audit.ps1
param(
  [string]$ServiceName = "db-postgres",
  [string]$DbName      = "lot_management",
  [string]$DbUser      = "admin",

  # 監査テスト対象（デフォルトは warehouses）
  [string]$Table       = "warehouses",
  [string]$KeyColumn   = "warehouse_code",
  [string]$KeyValue    = "ZZ-AUDIT",
  [string]$NameColumn  = "warehouse_name",
  [string]$InitName    = "監査テスト倉庫",
  [string]$UpdatedName = "監査テスト倉庫(改)"
)

$ErrorActionPreference = "Stop"

Write-Host "== Audit test start =="

# 1) トリガ数・履歴テーブル一覧（ざっくりヘルスチェック）
docker compose exec -T $ServiceName psql -U $DbUser -d $DbName -c @"
SELECT count(*) AS trigger_count
  FROM pg_trigger t
  JOIN pg_proc p ON t.tgfoid=p.oid
 WHERE NOT t.tgisinternal AND p.proname='audit_write';
"@

docker compose exec -T $ServiceName psql -U $DbUser -d $DbName -c @"
SELECT n.nspname AS schema, c.relname AS history_table
  FROM pg_class c
  JOIN pg_namespace n ON n.oid=c.relnamespace
 WHERE n.nspname='public' AND c.relname LIKE '%\_history' ESCAPE '\'
 ORDER BY c.relname;
"@

# 2) 既存のテストデータを掃除
docker compose exec -T $ServiceName psql -U $DbUser -d $DbName -c @"
DELETE FROM public.$Table WHERE $KeyColumn = '$KeyValue';
"@ | Out-Null

# 3) I/U/D 実行
$insertSql = @"
INSERT INTO public.$Table ($KeyColumn, $NameColumn)
VALUES ('$KeyValue', '$InitName');
"@

$updateSql = @"
UPDATE public.$Table SET $NameColumn = '$UpdatedName'
 WHERE $KeyColumn = '$KeyValue';
"@

$deleteSql = @"
DELETE FROM public.$Table WHERE $KeyColumn = '$KeyValue';
"@

Write-Host "`n-- INSERT --"
docker compose exec -T $ServiceName psql -U $DbUser -d $DbName -c $insertSql

Write-Host "`n-- UPDATE --"
docker compose exec -T $ServiceName psql -U $DbUser -d $DbName -c $updateSql

Write-Host "`n-- DELETE --"
docker compose exec -T $ServiceName psql -U $DbUser -d $DbName -c $deleteSql

# 4) 履歴テーブルの確認
$histTable = "${Table}_history"
$selectHistSql = @"
SELECT op, changed_by, changed_at,
       (row_data->>'$KeyColumn')  AS key_value,
       (row_data->>'$NameColumn') AS name
  FROM public.$histTable
 WHERE row_data->>'$KeyColumn' = '$KeyValue'
 ORDER BY changed_at;
"@

Write-Host "`n== History =="
docker compose exec -T $ServiceName psql -U $DbUser -d $DbName -c $selectHistSql

Write-Host "== Audit test done =="
