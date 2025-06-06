import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0', // Listen on all available network interfaces
    port: 5173,      // Default Vite port
    strictPort: true // Ensure we use this specific port
  },
});