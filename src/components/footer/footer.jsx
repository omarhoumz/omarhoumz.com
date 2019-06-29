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
            &copy;
            <span id="current-year">{currentYear}</span>
            <Link href="https://github.com/omarhoumz" className="dark">
              Omar Houmz
            </Link>
          </small>
        </p>
        <nav className="navigation">
          <ul>
            <li>
              <Link href="https://www.linkedin.com/in/omarhoumz/">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://github.com/omhoumz">Github</Link>
            </li>
            <li>
              <Link href="mailto:omarhoumz@gmail.com">Email</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
