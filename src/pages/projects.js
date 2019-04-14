import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'

export default class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Projects"
          keywords={[`Omar Houmz`, `Omar Houmz website`, `Projects`]}
        />
        <section className="section section-projects">
          <div className="container-sm">
            <ul className="all-projects-list">
              <li>
                <a
                  href="https://github.com/omarhoumz/ccp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark"
                >
                  CC Platform
                </a>
                <p>
                  Get free and high res photos from around the web. An
                  agregation of APIs for CC images.
                </p>
              </li>
              <li>
                <a
                  href="http://www.aiesec.ma/AIESEC/p/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark"
                >
                  Aiesec.ma
                </a>
                <p>
                  The official website of the <strong>Mchina</strong> brand of
                  AIESEC in Morocco
                </p>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}
