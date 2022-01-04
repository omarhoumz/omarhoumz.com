import BlogListItem from 'components/blog-list-item/blog-list-item'
import Link from 'components/link/link'
import PageTitle from 'components/page-title'
import ProjectList from 'components/project-list/project-list'
import allProjects from 'components/project-list/projects'
import { getPosts } from 'lib/get-posts'

import Layout from 'src/layout/layout'

export default function Home({ posts }) {
  console.log(posts)
  return (
    <>
      <Layout mainClassName='py-32 flex flex-col gap-32'>
        <section className='xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <p className='text-3xl text-blueGray-800 font-bold'>Hi,</p>
            <PageTitle as='p'>Hi,</PageTitle>
            <p className='text-lg max-w-xl'>
              I’m <strong>Omar Houmz</strong>, I’m a software engineer based in
              Casablanca, Morocco. I work at{' '}
              <Link href='https://avito.ma' nofollow external color='dark'>
                Avito.ma
              </Link>{' '}
              as a <strong>front-end engineer</strong>.
            </p>
            <p className='text-lg max-w-xl'>
              Wanna collaborate? <strong>drop me a line</strong>:
              omarhoumz[at]gmail.com
            </p>
            <Link href='/about' btnStyle>
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
            <Link href='/blog' btnStyle>
              See all posts
            </Link>
          </div>
        </section>
        <section className='xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <h2 className='text-3xl font-bold'>Latest projects</h2>
            <ProjectList projects={allProjects.slice(0, 2)} />
            <Link href='/projects' btnStyle>
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
