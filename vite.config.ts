import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  root: path.resolve(__dirname, "client"),
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@assets": path.resolve(__dirname, "client", "public")
    }
  },
  build: {
  target: ["safari13", "es2018"],
  outDir: path.resolve(__dirname, "dist"),
  emptyOutDir: true
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      '.ngrok-free.dev',
      '.ngrok.io',
      '.ngrok-free.app',
      '.trycloudflare.com'
    ]
  }
});
