import React from 'react'

import './footer.css'

export const Footer = () => {
  return (
    <footer class="footer">
      <div class="container-md">
        <p class="copy">
          <small>
            &copy; <span id="current-year" />
            <a
              class="dark"
              href="https://github.com/omarhoumz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Omar Houmz
            </a>
          </small>
        </p>
        <nav class="navigation">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/omarhoumz/"
                target="_blank"
                rel="noopener noreferer"
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
                rel="noopener noreferer"
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
