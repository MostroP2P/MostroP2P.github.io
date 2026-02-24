import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mostro.network',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'it', 'pt', 'fr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    format: 'directory',
  },
});