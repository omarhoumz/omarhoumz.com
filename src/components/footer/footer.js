import React from 'react'

import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-md">
        <p className="copy">
          <small>
            &copy; <span id="current-year" />
            <a
              className="dark"
              href="https://github.com/omarhoumz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Omar Houmz
            </a>
          </small>
        </p>
        <nav className="navigation">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/omarhoumz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/omhoumz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="mailto:omarhoumz@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
