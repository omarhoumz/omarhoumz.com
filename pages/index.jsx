import Link from '@/components/link/link'
import ProjectList from '@/components/project-list/project-list'
import allProjects from '@/components/project-list/projects'

import Layout from 'src/layout/layout'

export default function Home() {
  return (
    <>
      <Layout mainClassName='py-14 space-y-12'>
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <p className='text-3xl font-bold'>Hi,</p>
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
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
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
