// import hydrate from 'next-mdx-remote/hydrate'
import BlogListItem from '@/components/blog-list-item/blog-list-item'

import Layout from 'src/layout/layout'
import PageSeo from '@/components/page-seo/page-seo'
import { canonical } from 'next-seo.config'
import { getPosts } from '@/lib/get-posts'
import PageTitle from '@/components/page-title'

function Blog({ posts }) {
  return (
    <>
      <PageSeo title='Blog' url={canonical.concat('/blog/')} />

      <Layout mainClassName='py-32 space-y-12'>
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 xl:px-0'>
            <PageTitle className='px-5'>Blog</PageTitle>
            <div>
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

export async function getStaticProps() {
  const posts = await getPosts()

  return { props: { posts } }
}

export default Blog
