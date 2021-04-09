import React from 'react'

import Link from '../link/link'
import styles from './footer.module.css'

const currentYear = new Date().getFullYear()

// const footerNavLinks = [
//   {
//     label: 'LinkedIn',
//     link: 'https://www.linkedin.com/in/omarhoumz/',
//     internal: false,
//   },
//   {
//     label: 'Github',
//     link: 'https://github.com/omhoumz',
//     internal: false,
//   },
//   {
//     label: 'Email',
//     link: 'mailto:omarhoumz@gmail.com',
//     internal: false,
//   },
// ]

const NotesLink = ({ href, children }) => (
  <Link inline variant='dark' href={href} target='_blank' nofollow>
    {children}
  </Link>
)

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={['container-md', styles.innerFooter].join(' ')}>
        {/* <nav>
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
        </nav> */}
        <p className={styles.copy}>Omar Houmz &copy; {currentYear}</p>
        <small>
          This site is built with{' '}
          <NotesLink href='https://www.gatsbyjs.org/'>Gatsby</NotesLink> and
          hosted on <NotesLink href='https://netlify.com/'>Netlify</NotesLink>.
          The source code is hosted on{' '}
          <NotesLink href='https://github.com/omarhoumz/omarhoumz.github.io'>
            Github
          </NotesLink>
          .
        </small>
      </div>
    </footer>
  )
}

export default Footer
