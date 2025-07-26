import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), svgr(
    {svgrOptions: {
      exportType:'default', 
      ref:true, 
      svgo: true, 
      titleProp: true
    },
    include:'**/*.svg?react'
  }
  )],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~styled-system': path.resolve(__dirname, './styled-system'),
      '@theme': path.resolve(__dirname, './src/features/shared/theme')
    }
  }
})
