import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        brands: resolve(__dirname, 'brands.html'),
        creators: resolve(__dirname, 'creators.html'),
        orbit: resolve(__dirname, 'orbit.html'),
      },
    },
  },
});
