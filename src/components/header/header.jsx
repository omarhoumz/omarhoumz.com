import React from 'react'

import { useStaticQuery } from 'gatsby'

import MENU_LINKS_QUERY from './header.queries'
import Link from '../link/link'
import './header.css'

const Header = () => {
  const { site } = useStaticQuery(MENU_LINKS_QUERY)

  return (
    <header className="header">
      <div className="container-md">
        <h1 className="website-title">
          <Link
            href="/"
            className="link-logo"
            aria-label="omar houmz"
            role="heading"
            aria-level="1"
          >
            oh
          </Link>
        </h1>
        <nav className="navigation dark">
          {site.siteMetadata.menuLinks.map((menuLink, index) => (
            <Link
              href={menuLink.link}
              internal
              activeClassName="active"
              key={index.toString()}
            >
              {menuLink.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
