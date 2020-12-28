import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
// import renderToString from 'next-mdx-remote/render-to-string'

// import hydrate from 'next-mdx-remote/hydrate'
import BlogListItem from '@/components/blog-list-item/blog-list-item'

import Layout from 'src/layout/layout'
import PageSeo from '@/components/page-seo/page-seo'
import { canonical } from 'next-seo.config'

function Blog({ posts }) {
  return (
    <>
      <PageSeo title='Blog' url={canonical.concat('/blog/')} />

      <Layout mainClassName='py-14 space-y-12'>
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <h1 className='text-3xl font-bold'>Blog</h1>
            <div className='divide-y divide-brand-500 divide-opacity-10'>
              {posts.map(({ title, excerpt, href, date }, index) => {
                return (
                  <BlogListItem
                    title={title}
                    excerpt={excerpt}
                    href={href}
                    date={date}
                    key={index.toString()}
                  />
                )
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export const contentFolder = 'content'

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), contentFolder)
  const filenames = fs.readdirSync(postsDirectory)

  const asyncPosts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename, 'index.mdx')
    const slug = filename.replace(/\.mdx?$/, '')
    const source = fs.readFileSync(filePath, 'utf8')

    const {
      //content,
      data,
    } = matter(source)

    // const mdxSource = await renderToString(content, { scope: data })

    return {
      title: data?.title,
      excerpt: data?.description,
      href: `/blog/${slug}`,
      date: formatDate(data?.date),
    }
  })

  const posts = await Promise.all(asyncPosts)

  return { props: { posts } }
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function formatDate(d) {
  const date = new Date(d)

  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()

  // "MMMM DD, YYYY"
  return `${month} ${day}, ${year}`
}

export default Blog
