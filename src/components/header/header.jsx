import React, { useState, useCallback } from 'react'
import cx from 'classnames'

import menuLinks from './header.queries'
import Link from '../link/link'
import styles from './header.module.css'

const Header = () => {
  const [showNav, setShowNav] = useState(false)
  const { site } = menuLinks()

  const handleMenuClick = useCallback(() => {
    setShowNav((o) => !o)
  }, [])

  return (
    <header className={styles.header}>
      <div className={cx('container-md', styles.innerHeader)}>
        <h1 className={styles.websiteTitle}>
          <Link
            href='/'
            className={styles.linkLogo}
            aria-label='Omar Houmz'
            role='heading'
            aria-level='1'
            internal
          >
            omar{` `}
            <strong>houmz</strong>
          </Link>
        </h1>

        <button
          type='button'
          onClick={handleMenuClick}
          className={cx(styles.menuBtn)}
        >
          Menu
        </button>

        <nav
          className={cx(styles.navigation, styles.dark, {
            [styles.showNav]: showNav,
          })}
        >
          {site.siteMetadata.menuLinks.map(
            ({ link, label, partiallyActive }, index) => (
              <Link
                href={link}
                internal
                key={index.toString()}
                activeClassName={styles.active}
                className={styles.navAnchor}
                partiallyActive={partiallyActive}
              >
                {label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header
