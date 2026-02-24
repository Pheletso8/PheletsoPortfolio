import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path" // 1. Add this import

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174,
    strictPort: false, // Or any other available port
    // Proxy API requests to your deployed Vercel function or local API server.
    proxy: {
      '/api': {
        target: process.env.VERCEL_DEPLOYMENT_URL || 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 2. Define the @ alias
    },
  },
})