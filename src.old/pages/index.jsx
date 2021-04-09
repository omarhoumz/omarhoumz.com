import React from 'react'

import Link from '../components/link/link'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import ProjectsList from '../components/projects-list/projects-list'
import ShortDescription from '../components/short-description/short-description'
import Section from '../components/_ui/section/section'

const Home = () => (
  <Layout>
    <SEO title='Home' keywords={['Omar Houmz', 'Omar Houmz website', 'Home']} />
    <Section
      title='Hi,'
      classes={{
        inner: 'container-md',
      }}
    >
      <ShortDescription />

      <Link href='/about' btnStyle>
        More about me ...
      </Link>
    </Section>
    <Section
      title='Latest Projects'
      classes={{
        inner: 'container-md',
      }}
    >
      <ProjectsList latestOnly />

      <Link href='/projects' btnStyle>
        See all projects
      </Link>
    </Section>
  </Layout>
)

export default Home
