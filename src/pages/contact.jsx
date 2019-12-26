import React from 'react'

import Layout from '../components/layout/layout'
import ContactPage from '../components/contact-page/contact-page'
import SEO from '../components/seo'
import Section from '../components/_ui/section/section'

export default React.memo(() => (
  <Layout>
    <SEO
      title='Contact'
      keywords={['Omar Houmz', 'Contact', 'Contact Omar Houmz']}
    />
    <Section
      title='Contact'
      classes={{
        inner: 'container-md',
      }}
    >
      <ContactPage />
    </Section>
  </Layout>
))
