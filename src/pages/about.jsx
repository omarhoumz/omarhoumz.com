import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Description from '../components/description/description'
import Section from '../components/_ui/section/section'

export default React.memo(() => (
  <Layout>
    <SEO
      title='About me'
      keywords={['Omar Houmz', 'Omar Houmz website', 'About']}
    />
    <Section
      title='About me'
      classes={{
        inner: 'container-md',
      }}
    >
      <Description />
    </Section>
  </Layout>
))
