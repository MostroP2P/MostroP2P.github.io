import type { APIRoute } from 'astro';
import { locales, getLocalePath } from '../i18n/translations';

const baseUrl = 'https://mostro.network';

/** Every indexable route, expressed as its English (unprefixed) path. */
const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/terms/', changefreq: 'monthly', priority: '0.5' },
] as const;

const lastmod = new Date().toISOString().split('T')[0];

const url = (locale: (typeof locales)[number], path: string) =>
  `${baseUrl}${getLocalePath(locale, path)}`;

export const GET: APIRoute = () => {
  const entries = routes.flatMap(route =>
    locales.map(locale => {
      const alternates = [
        ...locales.map(
          l => `<xhtml:link rel="alternate" hreflang="${l}" href="${url(l, route.path)}" />`
        ),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${url('en', route.path)}" />`,
      ].join('\n    ');

      // Localized variants rank below the English original.
      const priority =
        locale === 'en' ? route.priority : (Number(route.priority) - 0.1).toFixed(1);

      return `  <url>
    <loc>${url(locale, route.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${priority}</priority>
    ${alternates}
  </url>`;
    })
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
