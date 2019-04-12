import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const divStyles = {
  maxWidth: `300px`,
  marginBottom: `1.45rem`,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={divStyles}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
