import allProjects from '@/components/project-list/projects'
import ProjectList from '@/components/project-list/project-list'
import PageSeo from '@/components/page-seo/page-seo'
import Layout from 'src/layout/layout'
import { canonical } from 'next-seo.config'
import PageTitle from '@/components/page-title'

function Projects() {
  return (
    <>
      <PageSeo title='Projects' url={canonical.concat('/projects/')} />

      <Layout mainClassName='py-32 space-y-12'>
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <PageTitle>All Projects</PageTitle>
            <ProjectList projects={allProjects} />
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Projects
