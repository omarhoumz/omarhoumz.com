import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  // Posts live at content/<slug>/index.mdx; the folder name is the slug.
  loader: glob({
    base: './content',
    pattern: '*/index.mdx',
    generateId: ({ entry }) => entry.replace(/\/index\.mdx$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    description: z.string(),
    tags: z.string().optional(),
    status: z.string().optional(),
  }),
})

export const collections = { blog }
