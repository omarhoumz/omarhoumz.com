import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout/layout'
import ProjectsList from '../components/projects-list/projects-list'
import Section from '../components/_ui/section/section'

export default React.memo(function Project() {
  return (
    <Layout>
      <SEO
        title='Projects'
        keywords={['Omar Houmz', 'Omar Houmz website', 'Projects']}
      />
      <Section
        title='All Projects'
        classes={{
          inner: 'container-md',
        }}
      >
        <ProjectsList />
      </Section>
    </Layout>
  )
})
