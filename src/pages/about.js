import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <section class="section section-about">
          <div class="container-sm">
            <h2 class="section-title" hidden aria-hidden="false">
              About
            </h2>
            <div class="about">
              <p>
                I'm <strong>Omar Houmz</strong>, I'm a software engineer based
                in Casablanca, Morocco. I work at
                <a
                  href="https://www.avito.ma/"
                  rel="noopener noreferrer"
                  target="_blank"
                  class="dark p"
                >
                  Avito.ma
                </a>
                as a <strong>front-end engineer</strong>.
              </p>

              <p>
                I studied a lot of disciplines in computer and data sciences.
                But I always liked <strong>front-end development</strong> and I
                still do.
              </p>

              <p>
                I'm actively helping my <strong>dev community</strong> to get
                better through events and conferences.
              </p>

              <p>
                If you want to help, or know someone that can support the work
                we do in our community, <strong>drop me a line</strong>:
                <a
                  href="mailto:omarhoumz@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  omarhoumz@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
