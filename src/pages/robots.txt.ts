import type { APIRoute } from 'astro'

// Generated so the sitemap URL follows `site` in astro.config.mjs.
export const GET: APIRoute = ({ site }) =>
  new Response(
    [
      'User-agent: *',
      'Allow: /',
      `Sitemap: ${new URL('/sitemap-index.xml', site)}`,
      '',
    ].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  )
