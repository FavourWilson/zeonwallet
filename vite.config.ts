import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      protocolImports: true, // for "node:" imports (e.g., node:buffer)
    }),
  ],
  resolve: {
    alias: {
      buffer: 'buffer',
      process: 'process/browser',
    },
  },
});
