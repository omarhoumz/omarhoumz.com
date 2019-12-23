import React from 'react'

import Layout from '../components/layout/layout'
import ContactPage from '../components/contact-page/contact-page'
import SEO from '../components/seo'

export default React.memo(() => (
  <Layout>
    <SEO
      title="Contact"
      keywords={['Omar Houmz', 'Contact', 'Contact Omar Houmz']}
    />
    <section className="section section-contact">
      <div className="container-md">
        <ContactPage />
      </div>
    </section>
  </Layout>
))
