import { getCollection, type CollectionEntry } from 'astro:content'

/** A blog post, with everything pages, feeds and OG cards need about it. */
export interface Post {
  slug: string
  title: string
  description: string
  author: string
  date: Date
  /** "April 7, 2021", in UTC so the build machine's timezone doesn't shift it. */
  dateLabel: string
  /** Page path, e.g. `/blog/firebase-hosting/`. */
  url: string
  /** Absolute URL of the post's OG card. */
  ogCardUrl: string
  /** Collection entry, for `render()`. */
  entry: CollectionEntry<'blog'>
}

const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
})

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection('blog')
  return entries
    .map((entry): Post => {
      const { title, description, author, date } = entry.data
      return {
        slug: entry.id,
        title,
        description,
        author,
        date,
        dateLabel: dateFormat.format(date),
        url: `/blog/${entry.id}/`,
        ogCardUrl: new URL(`/og/${entry.id}.png`, import.meta.env.SITE).href,
        entry,
      }
    })
    .sort((a, b) => b.date.valueOf() - a.date.valueOf())
}
