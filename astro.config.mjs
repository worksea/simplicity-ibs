// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ibs26.simplicitymedia.com',
  vite: {
    plugins: [tailwindcss()]
  }
});
