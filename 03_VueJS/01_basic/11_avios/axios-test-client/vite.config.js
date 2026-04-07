import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  server: {
    proxy: {
      // '/todos': 'http://localhost:3000',
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true, // 원본 서버 주소를 변경하지 않고 프록시 서버 주소로 변경

        // 프록시 서버 주소 변경
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api'로 시작하는 경로를 ''로 변경하여 원본 서버에 전달
        // -> /api를 ''(빈문자열)로 대체
      },
    },
  },
});
