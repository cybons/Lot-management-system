#Requires -Version 5.1
<#
  Collect diagnostics from docker services and consolidate into a single UTF-8 file.
  Run from repo root: .\tools\collect-reports.ps1
#>

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$ErrorActionPreference = "Continue"

$ReportsDir = Join-Path (Get-Location) "reports"
$OutFile    = Join-Path $ReportsDir "diagnostics_all.txt"

# recreate reports dir
if (-not (Test-Path $ReportsDir)) { New-Item -ItemType Directory -Path $ReportsDir | Out-Null }

# always recreate consolidated file (UTF-8)
if (Test-Path $OutFile) { Remove-Item -Force $OutFile }
New-Item -ItemType File -Path $OutFile | Out-Null

function Append-UTF8 {
  param([string]$Path,[string]$Content)
  $Content | Add-Content -Path $Path -Encoding utf8
}

function Run-InContainer {
  param([string]$Service,[string]$Cmd)
  # use sh -lc for POSIX features
  & docker compose exec -T $Service sh -lc $Cmd 2>&1
}

function Step {
  param([string]$Title,[string]$Service,[string]$Cmd)
  $output = Run-InContainer -Service $Service -Cmd $Cmd
  Append-UTF8 -Path $OutFile -Content ("`n===== {0} =====`n" -f $Title)
  Append-UTF8 -Path $OutFile -Content ($output | Out-String)
}

Write-Host "== Diagnostics collection started =="

# Backend sanity
Step -Title "pytest (backend)"              -Service "backend"  -Cmd "pytest -q || true"
Step -Title "ruff check (backend)"          -Service "backend"  -Cmd "ruff check || true"
Step -Title "ruff format --check (backend)" -Service "backend"  -Cmd "ruff format --check || true"

# Backend: vulture (install if missing) — avoid PowerShell quoting issues
# use pip show instead of python -c probing
Step -Title "vulture install/probe (backend)" -Service "backend" -Cmd "pip show vulture >/dev/null 2>&1 || pip install --quiet vulture"
Step -Title "vulture (backend)"               -Service "backend" -Cmd "vulture app || true"

# Frontend sanity
Step -Title "tsc --noEmit (frontend)"       -Service "frontend" -Cmd "npm run typecheck || true"
Step -Title "npm run build (frontend)"      -Service "frontend" -Cmd "npm run build || true"

# Frontend unused/deps
Step -Title "ts-prune (frontend)"           -Service "frontend" -Cmd "npx ts-prune -p tsconfig.json --error-first || true"
Step -Title "knip (frontend)"               -Service "frontend" -Cmd "npx knip || true"
Step -Title "depcheck (frontend)"           -Service "frontend" -Cmd "npx depcheck || true"

# Frontend dependency graph (JSON; Graphviz not required)
Step -Title "madge --json (frontend)"       -Service "frontend" -Cmd "npx madge src --json || true"

# ensure only the consolidated file remains
Get-ChildItem $ReportsDir -File | Where-Object { $_.FullName -ne $OutFile } | Remove-Item -Force

Write-Host "== Diagnostics collection completed =="
Write-Host ("Consolidated: {0}" -f $OutFile)
