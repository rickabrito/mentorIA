import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/cefis-api': {
        target: 'https://cefis.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cefis-api/, ''),
        secure: true,
      },
      '/cefis-v3': {
        target: 'https://api-v3.cefis.com.br',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cefis-v3/, ''),
        secure: true,
      }
    }
  }
});
