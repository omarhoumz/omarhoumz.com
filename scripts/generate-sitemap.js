const fs = require('fs')
const globby = require('globby')
const RSS = require('rss')
const matter = require('gray-matter')

const { contentFolder } = require('../config/content-folder')

function getBlogPath(postFolderPath) {
  return postFolderPath.replace(/\/index\.mdx?$/, '').replace(/content/, 'blog')
}

;(async () => {
  const siteUrl = 'https://omarhoumz.com'

  /**
   * Let's start with the Sitemap!
   */

  // Start with posts
  const posts = await globby([`${contentFolder}/**/*{.mdx,.md}`])

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  posts.forEach((post) => {
    const path = getBlogPath(post)
    sitemap += `  <url>
    <loc>${siteUrl}/${path}</loc>
  </url>`
  })

  sitemap += `
</urlset>
`
  // Didn't format well for me
  // const formatted = prettier.format(sitemap, {
  //   ...prettierConfig,
  //   parser: 'html',
  // })

  fs.writeFileSync('public/sitemap.xml', sitemap)

  /**
   * Next: The RSS feed.
   */

  const rss = new RSS({
    title: 'Omar Houmz',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
  })

  posts.forEach((p) => {
    const postPath = getBlogPath(p)
    const body = fs.readFileSync(p, 'utf-8')
    const { data: post } = matter(body)

    rss.item({
      title: post.title,
      url: `${siteUrl}/${postPath}`,
      author: 'Omar Houmz',
      date: post.date,
    })
  })

  const xmlFeed = rss.xml({ indent: true })

  fs.writeFileSync('public/rss-feed.xml', xmlFeed)
})()
