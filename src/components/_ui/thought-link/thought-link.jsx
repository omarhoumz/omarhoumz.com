import React from 'react'
import PropTypes from 'prop-types'

import Link from '../../link/link'
import styles from './thought-link.module.css'

const ThoughtLink = ({ key, title, date, excerpt, link }) => (
  <div className={styles.container} key={key}>
    <h3 className={styles.title}>{title}</h3>
    <span className={styles.date}>{date}</span>
    <p>{excerpt}</p>
    <Link href={link} internal>
      Read →
    </Link>
  </div>
)

ThoughtLink.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.string,
}

ThoughtLink.defaultProps = {
  key: null,
  title: null,
  date: null,
  excerpt: null,
  link: null,
}

export default ThoughtLink
