import React from 'react'

import Link from '../link/link'
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container-md">
        <p className="copy">
          <small>
            &copy; (not really)&nbsp;
            <span id="current-year">{currentYear}</span>
            <Link
              href="https://github.com/omarhoumz/omarhoumz.github.io"
              variant="dark"
            >
              by Omar Houmz
            </Link>
          </small>
        </p>
        <nav className="navigation">
          <Link href="https://www.linkedin.com/in/omarhoumz/">LinkedIn</Link>
          <Link href="https://github.com/omhoumz">Github</Link>
          <Link href="mailto:omarhoumz@gmail.com">Email</Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
