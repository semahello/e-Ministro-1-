import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // or '@vitejs/plugin-react' if you prefer
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // IMPORTANT for GitHub Pages (repo is served under /e-Ministro-1-/)
  base: '/e-Ministro-1-/',

  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: true,
    port: 8080,     // dev: http://localhost:8080
  },

  preview: {
    port: 4173,     // preview: http://localhost:4173 (after build)
  },

  build: {
    outDir: 'dist', // default but explicit; Pages will deploy this
  },
}))
