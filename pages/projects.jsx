import React, { memo } from 'react'
import Head from 'next/head'

import allProjects from 'src/components/project-list/projects'
import Layout from 'src/layout/layout'
import ProjectList from 'src/components/project-list/project-list'

function Projects() {
  return (
    <>
      <Head>
        <title key='title'>Omar Houmz</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout mainClassName='py-14 space-y-12'>
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <h1 className='text-3xl font-bold'>All Projects</h1>
            <ProjectList projects={allProjects} />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Projects
