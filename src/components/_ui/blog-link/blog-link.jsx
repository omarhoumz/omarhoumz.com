import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import styles from './blog-link.module.css'

const BlogLink = memo(function BlogLink({ title, date, excerpt, link }) {
  return (
    <GatsbyLink to={link} className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <span className={styles.date}>{date}</span>
      <p>{excerpt}</p>
      <div style={{ color: 'var(--color-secondary)' }}>Read →</div>
    </GatsbyLink>
  )
})

BlogLink.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  excerpt: PropTypes.string,
  link: PropTypes.string,
}

BlogLink.defaultProps = {
  title: null,
  date: null,
  excerpt: null,
  link: null,
}

export default BlogLink
