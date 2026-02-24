import type { APIRoute } from 'astro';

const baseUrl = 'https://mostro.network';
const locales = ['en', 'es', 'it', 'pt', 'fr'];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <!-- Default English page -->
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    ${locales.map(locale => 
      locale === 'en' 
        ? `<xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/" />`
        : `<xhtml:link rel="alternate" hreflang="${locale}" href="${baseUrl}/${locale}/" />`
    ).join('\n    ')}
  </url>
  
  <!-- Localized pages -->
  ${locales.filter(locale => locale !== 'en').map(locale => `
  <url>
    <loc>${baseUrl}/${locale}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    ${locales.map(l => 
      l === 'en' 
        ? `<xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/" />`
        : `<xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}/" />`
    ).join('\n    ')}
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};