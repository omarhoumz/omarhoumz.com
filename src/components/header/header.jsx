import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import './header.css'

const Header = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={(data) => (
      <header className="header">
        <div className="container-md">
          <h1 className="website-title">
            <Link
              to="/"
              className="link-logo"
              aria-label="omar houmz"
              role="heading"
              aria-level="1"
            >
              oh
            </Link>
          </h1>
          <nav className="navigation dark">
            {data.site.siteMetadata.menuLinks.map((menuLink, index) => (
              <Link to={menuLink.link} activeClassName="active" key={index.toString()}>
                {menuLink.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    )}
  />
)

export default Header
