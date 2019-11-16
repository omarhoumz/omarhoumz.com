import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Link from '../components/link/link'

const NotFoundPage = () => (
  <Layout>
    <div className="container-md">
      <SEO title="404: Not found" />
      <h1
        style={{
          fontSize: '1rem',
          color: 'var(--secondary-200)',
        }}
      >
        NOT FOUND
      </h1>
      <p
        style={{
          fontSize: '1.5rem',
          color: 'color: var(--color-primary, #0f0a84);',
        }}
      >
        You just found a page that doesn&#39;t exist...
        <br />
        The sadness.
      </p>
      <p>
        If you think this page should exist,&nbsp;
        <Link href="/contact" internal btnStyle>
          Contact me
        </Link>
      </p>
      <p>
        Or, just go&nbsp;
        <Link href="/" internal btnStyle>
          Home
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
