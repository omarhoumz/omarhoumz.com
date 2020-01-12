import React from 'react'
import cx from 'classnames'

import menuLinks from './header.queries'
import Link from '../link/link'
import styles from './header.module.css'

const Header = () => {
  const { site } = menuLinks()

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
            oh
          </Link>
        </h1>
        <nav className={cx(styles.navigation, styles.dark)}>
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
