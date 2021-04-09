import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../link/link'
import styles from './contact-page.module.css'

const contactLinks = [
  {
    label: 'Through email:',
    links: [
      {
        label: 'omarhoumz@gmail.com',
        link: 'mailto:omarhoumz@gmail.com',
        external: true,
      },
      {
        label: 'contact@omarhoumz.com',
        link: 'mailto:contact@omarhoumz.com',
        external: true,
      },
    ],
  },
  {
    label: 'Twitter:',
    links: [
      {
        label: '@omarhoumz',
        link: 'https://twitter.com/omarhoumz',
        external: true,
      },
    ],
  },
  {
    label: 'Or LinkedIn:',
    links: [
      {
        label: '/in/omarhoumz',
        link: 'https://www.linkedin.com/in/omarhoumz/',
        external: true,
      },
    ],
  },
]

const ContactPage = () => (
  <ul className={styles.contactInfo}>
    {contactLinks.map(({ label, links }, index) => (
      <ContactItem label={label} links={links} key={index.toString()} />
    ))}
  </ul>
)

const linkType = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  external: PropTypes.bool.isRequired,
}

const ContactItem = ({ label: title, links }) => (
  <li className={styles.contactItem}>
    <h3 className={styles.linksTitle}>{title}</h3>
    <ul className={styles.linksList}>
      {links.map(({ label, link, external }, index) => (
        <ContactLink
          link={link}
          label={label}
          external={external}
          key={index.toString()}
        />
      ))}
    </ul>
  </li>
)

ContactItem.propTypes = {
  label: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape(linkType)).isRequired,
}

const ContactLink = ({ label, link, external }) => (
  <li className={styles.linkItem}>
    <Link
      href={link}
      external={external}
      className={styles.link}
      target='_blank'
    >
      {label}
    </Link>
  </li>
)

ContactLink.propTypes = linkType

export default ContactPage
