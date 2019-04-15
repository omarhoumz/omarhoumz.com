import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import { ProjectsList } from '../components/projects-list/projects-list'

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`Omar Houmz`, `Omar Houmz website`, `Home`]}
        />
        <section className="section section-about">
          <div className="container-sm">
            <h2 className="section-title" title="About">
              Hi,
            </h2>
            <div className="about">
              <p>
                I'm <strong>Omar Houmz</strong>, I'm a software engineer based
                in Casablanca, Morocco. I work at{' '}
                <a
                  href="https://www.avito.ma/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="dark p"
                >
                  Avito.ma
                </a>{' '}
                as a <strong>front-end engineer</strong>.
              </p>

              <p>
                Wanna collaborate? <strong>drop me a line</strong>:
                <a
                  href="mailto:omarhoumz@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  omarhoumz@gmail.com
                </a>
              </p>
              <p>
                <a href="./about/">More about me ...</a>
              </p>
            </div>
          </div>
        </section>
        <section className="section section-projects">
          <div className="container-sm">
            <h2 className="section-title">Latest Projects</h2>
            <ProjectsList />

            <Link to="/projects">See all projects</Link>
          </div>
        </section>
      </Layout>
    )
  }
}
