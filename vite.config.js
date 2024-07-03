import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Ensure relative paths are used for assets
  plugins: [
    react(), // Enables React support in Vite
  ],
});
