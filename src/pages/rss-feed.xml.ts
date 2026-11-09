import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getPosts } from '@/lib/posts'
import { siteTitle } from '@/lib/site'

// Kept at /rss-feed.xml, the URL the old generated feed used.
export async function GET(context: APIContext) {
  const posts = await getPosts()
  return rss({
    title: siteTitle,
    description: 'Blog posts by Omar Houmz',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      author: 'Omar Houmz',
      link: `/blog/${post.id}/`,
    })),
  })
}
