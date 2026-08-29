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
  // /disclaimer is an alias kept for people looking for the classic
  // lnp2pbot-style disclaimer; the text lives in the Terms of Service page.
  redirects: {
    '/disclaimer': '/terms#disclaimer',
    '/es/disclaimer': '/es/terms#disclaimer',
    '/it/disclaimer': '/it/terms#disclaimer',
    '/pt/disclaimer': '/pt/terms#disclaimer',
    '/fr/disclaimer': '/fr/terms#disclaimer',
  },
  build: {
    format: 'directory',
  },
});