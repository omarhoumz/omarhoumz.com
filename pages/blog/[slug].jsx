import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'

import PropTypes from 'prop-types'
import { contentFolder, formatDate } from '.'
import Layout from 'src/layout/layout'
import Link from 'src/components/link/link'
import Pill from 'src/components/pill/pill'
import Head from 'next/head'

function Singlepost({ title, content, date, author, ...props }) {
  const source = hydrate(content)
  return (
    <Layout>
      <Head>
        <title key='title'>{title} | Omar Houmz</title>
      </Head>
      <div className='py-8 lg:py-12 px-4 lg:px-0 max-w-2xl mx-auto'>
        <Link href='/blog' className='inline-block text-xl mb-8'>
          ← Back
        </Link>
        <h1 className='text-5xl text-blueGray-700 font-bold'>{title}</h1>
        <div className='mt-4 mb-8'>
          <span className='text-blueGray-500 mr-2'>
            ✍🏻 by <span className='capitalize'>{author}</span>
          </span>
          <Pill label={date} />
        </div>
        <div>{source}</div>
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

  const mdxSource = await renderToString(content, { scope: data })

  return {
    props: {
      title: data?.title,
      content: mdxSource,
      date: formatDate(data?.date),
      author: data?.author,
      status: data?.status,
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

Singlepost.propTypes = {}

export default Singlepost
