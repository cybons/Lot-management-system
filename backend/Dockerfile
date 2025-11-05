# backend/Dockerfile
FROM python:3.12-slim

WORKDIR /app

# システムパッケージのインストール
# PostgreSQLドライバーのビルドに必要
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        gcc \
        libpq-dev \
        postgresql-client && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 依存関係ファイルをコピー
COPY requirements.txt .

# 依存関係インストール
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# アプリケーションコードをコピー
COPY . .

# ポート公開
EXPOSE 8000

# アプリケーション起動
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]