import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/layout/layout'
import { ProjectsList } from '../components/projects-list/projects-list'

export default class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Projects"
          keywords={[`Omar Houmz`, `Omar Houmz website`, `Projects`]}
        />
        <section className="section section-projects">
          <div className="container-sm">
            <ProjectsList />
          </div>
        </section>
      </Layout>
    )
  }
}
