// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    watch: {
      usePolling: true,   // Force polling to detect changes
      interval: 100,      // Check every 100ms
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    devSourcemap: true,
  },
});
