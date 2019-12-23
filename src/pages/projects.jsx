import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout/layout'
import ProjectsList from '../components/projects-list/projects-list'

export default React.memo(() => (
  <Layout>
    <SEO
      title="Projects"
      keywords={['Omar Houmz', 'Omar Houmz website', 'Projects']}
    />
    <section className="section section-projects">
      <div className="container-md">
        <ProjectsList />
      </div>
    </section>
  </Layout>
))
