# tools/sync-deps.ps1
param(
  [ValidateSet('minor','latest')] [string]$FrontendTarget = 'minor',
  [switch]$BackendOnly,
  [switch]$FrontendOnly
)

$doBackend = -not $FrontendOnly
$doFrontend = -not $BackendOnly

if ($doBackend) {
  docker compose exec -T backend sh -lc "
    set -e
    python -V
    pip install -U pip setuptools wheel
    pip install -U pip-review
    pip-review --auto || true
    pip check || true
    pip freeze > /app/requirements.txt
  "
}

if ($doFrontend) {
  docker compose exec -T frontend sh -lc "
    set -e
    corepack enable || true
    (npm ci || npm install)
    npx npm-check-updates --target $FrontendTarget -u
    npm install
    npm audit fix || true
    npx tsc --noEmit
  "
}

# 反映
docker compose build backend
docker compose up -d
