import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Description from '../components/description/description'

export default React.memo(() => (
  <Layout>
    <SEO
      title="About"
      keywords={['Omar Houmz', 'Omar Houmz website', 'About']}
    />
    <section className="section section-about">
      <div className="container-md">
        <h2 className="section-title">About me</h2>
        <Description />
      </div>
    </section>
  </Layout>
))
