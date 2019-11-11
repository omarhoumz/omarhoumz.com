import React from 'react'

import Link from '../components/link/link'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ProjectsList from '../components/projects-list/projects-list'
import ShortDescription from '../components/short-description/short-description'

const Home = () => (
  <Layout>
    <SEO title="Home" keywords={['Omar Houmz', 'Omar Houmz website', 'Home']} />
    <section className="section section-home-about">
      <div className="container-md">
        <h2 className="section-title">Hi,</h2>

        <div className="about">
          <ShortDescription />

          <Link href="/about" internal>
            More about me ...
          </Link>
        </div>
      </div>
    </section>
    <section className="section section-home-projects">
      <div className="container-md">
        <h2 className="section-title">Latest Projects</h2>

        <ProjectsList latestOnly />

        <Link href="/projects" internal>
          See all projects
        </Link>
      </div>
    </section>
  </Layout>
)

export default Home
