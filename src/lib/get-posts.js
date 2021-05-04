import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
// import renderToString from 'next-mdx-remote/render-to-string'

import formatDate from 'utils/format-date'
import { contentFolder } from 'config/content-folder'

export async function getPosts() {
  const postsDirectory = path.join(process.cwd(), contentFolder)
  const filenames = fs.readdirSync(postsDirectory)

  const asyncPosts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename, 'index.mdx')
    const slug = filename.replace(/\.mdx?$/, '')
    const source = fs.readFileSync(filePath, 'utf8')

    const { /*content, */ data } = matter(source)

    // const mdxSource = await renderToString(content, { scope: data })

    return {
      title: data?.title,
      excerpt: data?.description,
      href: `/blog/${slug}`,
      rawDate: data?.date,
      date: formatDate(data?.date),
    }
  })

  const posts = (await Promise.all(asyncPosts)).sort((a, b) => {
    const dateA = new Date(a.rawDate)
    const dateB = new Date(b.rawDate)

    return dateB - dateA
  })

  return posts
}
