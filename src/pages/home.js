import React from 'react'

import Layout from '../components/layout/layout'

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        <section class="section section-about">
          <div class="container-sm">
            <h2 class="section-title" title="About">
              Hi,
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
                Wanna collaborate? <strong>drop me a line</strong>:
                <a
                  href="mailto:omarhoumz@gmail.com"
                  target="_blank"
                  rel="noopener noreferer"
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
        <section class="section section-projects">
          <div class="container-sm">
            <h2 class="section-title">Latest Projects</h2>
            <ul class="all-projects-list">
              <li>
                <a
                  href="https://github.com/omarhoumz/ccp"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="dark"
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
                  class="dark"
                >
                  Aiesec.ma
                </a>
                <p>
                  The official website of the <strong>Mchina</strong> brand of
                  AIESEC in Morocco
                </p>
              </li>
              <li>
                <p>
                  <a href="./projects/">See all projects</a>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </Layout>
    )
  }
}
