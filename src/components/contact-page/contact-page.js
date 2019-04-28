import React from 'react'

import { Link } from '../link/link'
import './contact-page.css'

export const ContactPage = () => {
  return (
    <React.Fragment>
      <h2 className="section-title">Contact</h2>
      <ul className="contact-info">
        <li>
          <span>Through email:</span>
          <ul>
            <li>
              <Link href="mailto:omarhoumz@gmail.com">omarhoumz@gmail.com</Link>
            </li>
            <li>
              <Link href="mailto:contact@omarhoumz.com">
                contact@omarhoumz.com
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <span>Twitter: </span>
          <Link href="https://twitter.com/omarhoumz">@omarhoumz</Link>
        </li>
        <li>
          <span>Or LinkedIn: </span>
          <Link href="https://www.linkedin.com/in/omarhoumz/">@omarhoumz</Link>
        </li>
      </ul>
    </React.Fragment>
  )
}
