// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { rehypeHeadingIds, unified } from '@astrojs/markdown-remark'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import tailwindcss from '@tailwindcss/vite'

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://omarhoumz.com',
  trailingSlash: 'always',
  // Astro 7 defaults to 'jsx', which drops whitespace between inline elements.
  compressHTML: true,
  // CSS is ~9 KB; inlining saves a render-blocking round trip before first paint.
  build: { inlineStylesheets: 'always' },
  redirects: {
    '/writing/firebase-cloud-functions/': '/blog/firebase-cloud-functions/',
  },
  markdown: {
    // unified() keeps rehype plugins working; Sätteri (the v7 default) does not run them.
    // https://docs.astro.build/en/guides/upgrade-to/v7/
    processor: unified({
      // Astro adds heading ids after user plugins, so run it first for autolink.
      rehypePlugins: [
        rehypeHeadingIds,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    }),
    shikiConfig: { theme: 'github-light-default' },
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !/\/(ui-lib|thumbnail)\/$/.test(page),
    }),
  ],
  vite: { plugins: [tailwindcss()] },
})
