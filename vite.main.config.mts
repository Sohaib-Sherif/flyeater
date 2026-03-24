import path from 'node:path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config
export default defineConfig({
  envDir: path.resolve(__dirname, '.'),
  publicDir: './resources',
  build: {
    copyPublicDir: true
  }, 
});
