import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~styled-system': path.resolve(__dirname, './styled-system'),
      '@theme': path.resolve(__dirname, './src/theme')
    }
  }
})
