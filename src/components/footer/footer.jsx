import React from 'react'

import Link from '../link/link'
import styles from './footer.module.css'

const currentYear = new Date().getFullYear()

const footerNavLinks = [
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/omarhoumz/',
    internal: false,
  },
  {
    label: 'Github',
    link: 'https://github.com/omhoumz',
    internal: false,
  },
  {
    label: 'Email',
    link: 'mailto:omarhoumz@gmail.com',
    internal: false,
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container-md'>
        <p className={styles.copy}>
          <small>
            &copy;&nbsp;
            {currentYear}&nbsp;
            <Link
              href='https://github.com/omarhoumz/omarhoumz.github.io'
              inline
              className={styles.navLink}
              target='_blank'
              nofollow
            >
              by Omar Houmz
            </Link>
          </small>
        </p>
        <nav>
          {footerNavLinks.map(({ link, label, internal }, index) => (
            <Link
              href={link}
              className={styles.navLink}
              internal={internal}
              key={index.toString()}
              target='_blank'
              nofollow
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
