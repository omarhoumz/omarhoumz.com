import React from 'react'

import Link from '../link/link'
import styles from './footer.module.css'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <footer className={styles.footer}>
    <div className='container-md'>
      <p className={styles.copy}>
        <small>
          &copy; (not really)&nbsp;
          {currentYear}
          <Link
            href='https://github.com/omarhoumz/omarhoumz.github.io'
            variant='dark'
          >
            by Omar Houmz
          </Link>
        </small>
      </p>
      <nav className={styles.navigation}>
        <Link href='https://www.linkedin.com/in/omarhoumz/'>LinkedIn</Link>
        <Link href='https://github.com/omhoumz'>Github</Link>
        <Link href='mailto:omarhoumz@gmail.com'>Email</Link>
      </nav>
    </div>
  </footer>
)

export default Footer
