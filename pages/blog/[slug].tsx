import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'

import SEO from 'next-seo.config'

import Link from '@/components/link/link'
import { components } from '@/components/mdx/components/components'
import PageSeo from '@/components/page-seo/page-seo'
import Pill from '@/components/pill/pill'
import Sharer from '@/components/sharer/sharer'

import Layout from 'src/layout/layout'
import formatDate from 'utils/format-date'
import { contentFolder } from 'config/content-folder'

export default function Singlepost({ title, content, date, author, baseUrl }) {
  const router = useRouter()

  const currentUrl = `https://omarhoumz.com${router.asPath}`

  const basePath = `${baseUrl}/api/og-image/`
  const params = new URLSearchParams({ title, url: router.asPath })
  const url = basePath.concat(`?${params.toString()}`)

  return (
    <Layout>
      <PageSeo
        title={title}
        url={currentUrl}
        images={[{ url, alt: title, width: 1200, height: 630 }]}
      />

      <div className='py-8 lg:py-12 px-4 lg:px-0 max-w-2xl mx-auto'>
        <Link href='/blog' className='inline-block text-xl mb-2'>
          ← Back
        </Link>
        <h1 className='text-4xl md:text-5xl text-blueGray-800 font-bold'>
          {title}
        </h1>
        <div className='mt-4 mb-8'>
          <span className='text-blueGray-500 mr-2'>
            ✍🏻 by <span className='capitalize'>{author}</span>
          </span>
          <Pill label={date} />
        </div>

        <article className='prose lg:prose-xl prose-slate'>
          <MDXRemote {...content} components={components} />
        </article>

        <Sharer
          url={currentUrl}
          title={title}
          twitterHandle={SEO.twitter.handle}
        />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const postsDirectory = path.join(process.cwd(), contentFolder)
  const filenames = fs.readdirSync(postsDirectory)

  if (!filenames.includes(slug)) {
    return { notFound: true }
  }

  const filePath = path.join(postsDirectory, slug, 'index.mdx')
  const source = fs.readFileSync(filePath, 'utf-8')

  const { content, data } = matter(source)

  const mdxSource = await serialize(content)

  const { title = '', date = '', author = '', status = '' } = data
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_VERCEL_URL
      : `http://localhost:3000`

  return {
    props: {
      title,
      content: mdxSource,
      date: formatDate(date),
      author,
      status,
      slug,
      baseUrl,
    },
  }
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), contentFolder)
  const paths = fs
    .readdirSync(postsDirectory)
    .map((slug) => ({ params: { slug } }))

  return { paths, fallback: false }
}
