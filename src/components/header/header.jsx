import React from 'react'

import menuLinks from './header.queries'
import Link from '../link/link'
import './header.css'

const Header = () => {
  const { site } = menuLinks()

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
              key={index.toString()}
              activeClassName="active"
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
