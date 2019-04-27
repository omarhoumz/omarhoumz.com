import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { ProjectsList } from '../components/projects-list/projects-list'
import { ShortDescription } from '../components/short-description/short-description'

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`Omar Houmz`, `Omar Houmz website`, `Home`]}
        />
        <section className="section section-about">
          <div className="container-sm">
            <h2 className="section-title" title="About">
              Hi,
            </h2>
            <div className="about">
              <ShortDescription />
              <p>
                <Link to="/about">More about me ...</Link>
              </p>
            </div>
          </div>
        </section>
        <section className="section section-projects">
          <div className="container-sm">
            <h2 className="section-title">Latest Projects</h2>

            <ProjectsList />

            <Link to="/projects">See all projects</Link>
          </div>
        </section>
      </Layout>
    )
  }
}
