// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://Nbks.github.io',
  base: '/', 
  i18n: {
  defaultLocale: 'es',
  locales: ['es', 'en', 'it'],
  routing: {
    prefixDefaultLocale: false
    }
  }
});