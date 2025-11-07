import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

const target = process.env.VITE_BACKEND_ORIGIN || "http://lot-backend:8000";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5173,
    strictPort: true,
    hmr: {
      host: "localhost", // ホスト側からHMRする
      port: 5173,
    },
    watch: {
      usePolling: true, // Docker環境でのファイル監視安定化
    },
    proxy: {
      "/api": {
        target,
        changeOrigin: true,
      },
    },
  },
});
