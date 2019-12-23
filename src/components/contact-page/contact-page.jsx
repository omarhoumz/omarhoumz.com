import React from 'react'

import Link from '../link/link'
import styles from './contact-page.module.css'
import Section from '../_ui/section/section'

const ContactPage = () => (
  <Section title="Contact">
    <ul className={styles.contactInfo}>
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
  </Section>
)

export default ContactPage
