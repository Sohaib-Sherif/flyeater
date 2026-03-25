import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  envDir: path.resolve(__dirname, '..'), // root .env file
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, '../ui'),
      '@flysdk': path.resolve(__dirname, '../flysdk'),
      '@resources': path.resolve(__dirname, '../resources'),
    }
  }
})
