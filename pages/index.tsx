import BlogListItem from '@/components/blog-list-item/blog-list-item'
import Link from '@/components/link/link'
import PageTitle from '@/components/page-title'
import ProjectList from '@/components/project-list/project-list'
import allProjects from '@/components/project-list/projects'
import { getPosts } from '@/lib/get-posts'

import Layout from 'src/layout/layout'

export default function Home({ posts }) {
  return (
    <>
      <Layout mainClassName='py-32 flex flex-col gap-32'>
        <section className='xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <PageTitle as='p'>Hi,</PageTitle>
            <p className='text-lg max-w-xl'>
              I’m <strong>Omar Houmz</strong>, I’m a software engineer based in
              Casablanca, Morocco. I work at{' '}
              <Link
                href='https://remotepass.com'
                nofollow
                external
                color='dark'
                className=''
                activeClassName=''
              >
                RemotePass.com
              </Link>{' '}
              as a <strong>front-end engineer</strong>.
            </p>
            <Link href='/about' btnStyle className='' activeClassName=''>
              More About Me ...
            </Link>
          </div>
        </section>
        <section className='xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start px-5 xl:px-0'>
            <h2 className='text-3xl font-bold'>Latest blog posts</h2>
            <div className='flex flex-col gap-y-4 py-4'>
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
            <Link href='/blog' btnStyle className='' activeClassName=''>
              See all posts
            </Link>
          </div>
        </section>
        <section className='xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <h2 className='text-3xl font-bold'>Latest projects</h2>
            <ProjectList projects={allProjects.slice(0, 2)} />
            <Link href='/projects' btnStyle className='' activeClassName=''>
              See all projects
            </Link>
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()).slice(0, 2)

  return { props: { posts } }
}
