import Head from 'next/head'

import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'

import Link from '@/components/link/link'
import ProjectItem from '@/components/project-list/project-item'
import ProjectList from '@/components/project-list/project-list'
import allProjects from '@/components/project-list/projects'
import Layout from 'src/layout/layout'

export default function UiLib() {
  return (
    <div className='p-12'>
      <Head>
        <title key='title'>UI Lib</title>
      </Head>

      <section className='mt-6'>
        <h3 className='text-xl font-extralight mb-2 text-brand-800'>
          Default Layout
        </h3>
        <div className='grid gap-4 p-4 border-l-2 border-gray-300 bg-gray-50'>
          <Layout>This is my main content</Layout>
        </div>
      </section>
      <section className='mt-6'>
        <h3 className='text-xl font-extralight mb-2 text-brand-800'>Layout</h3>
        <div className='grid gap-4 p-4 border-l-2 border-gray-300 bg-gray-50'>
          <h4 className='text-lg font-extralight mb-2 text-brand-800'>
            Header
          </h4>
          <Header />
          <br />
          <h4 className='text-lg font-extralight mb-2 text-brand-800'>
            Footer
          </h4>
          <Footer />
        </div>
      </section>
      <section className='mt-6'>
        <h3 className='text-xl font-extralight mb-2 text-brand-800'>Links</h3>

        <div className='grid gap-4 p-4 border-l-2 border-gray-300 bg-gray-50'>
          <Link className='justify-self-start' href='/'>
            Go home
          </Link>
          <Link
            className='justify-self-start'
            href='https://google.com'
            external
          >
            Gooogle
          </Link>
          <Link className='justify-self-start' href='/' color='dark'>
            Go home
          </Link>
          <Link className='justify-self-start' href='/' btnStyle>
            Go home
          </Link>
          <Link className='justify-self-start' href='/' color='dark' btnStyle>
            Go home
          </Link>
          <Link
            className='justify-self-start'
            activeClassName='bg-brand-200'
            href='/ui-lib'
          >
            Go home
          </Link>
          <p className='max-w-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            sit illo commodi praesentium{' '}
            <Link className='justify-self-start' href='/'>
              go home
            </Link>{' '}
            voluptatum. Maxime qui similique, suscipit unde doloribus voluptates
            quasi ipsam voluptatum! Perferendis modi voluptatum esse laboriosam!
          </p>
        </div>
      </section>

      <section className='mt-6'>
        <h3 className='text-xl font-extralight mb-2 text-brand-800'>
          Project Item
        </h3>

        <div className='grid gap-4 p-4 border-l-2 border-gray-300 bg-gray-50'>
          <ProjectItem
            title='devfest.gdgcasablanca.com'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque suscipit, autem distinctio quod amet praesentium sequi inventore, tempore obcaecati, voluptatibus assumenda neque? Quidem laboriosam ratione doloribus reiciendis nobis veritatis! Nam.'
            link={{ href: 'https://google.com', external: true }}
          />
          <ProjectList projects={allProjects.splice(0, 2)} />
        </div>
      </section>
    </div>
  )
}
