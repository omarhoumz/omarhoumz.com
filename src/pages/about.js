import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { Description } from '../components/description/description'

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="About"
          keywords={[`Omar Houmz`, `Omar Houmz website`, `About`]}
        />
        <section class="section section-about">
          <div class="container-sm">
            <h2 class="section-title" hidden aria-hidden="false">
              About
            </h2>
            <div class="about">
              <Description />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
