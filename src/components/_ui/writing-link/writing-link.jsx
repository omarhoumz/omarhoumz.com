import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import styles from './writing-link.module.css'

const WritingLink = memo(function WritingLink({ title, date, excerpt, link }) {
  return (
    <GatsbyLink to={link} className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.date}>{date}</span>
      <p>{excerpt}</p>
      <div style={{ color: 'var(--color-secondary)' }}>Read →</div>
    </GatsbyLink>
  )
})

WritingLink.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.string,
}

WritingLink.defaultProps = {
  title: null,
  date: null,
  excerpt: null,
  link: null,
}

export default WritingLink
