import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './section.module.css'

const Section = ({ title, classes, rootId, children }) => (
  <section className={cx(styles.section, classes.root)} id={rootId}>
    <div className={classes.inner}>
      {title && <h2 className={styles.title}>{title}</h2>}

      {children && (
        <div className={cx(styles.children, classes.children)}>{children}</div>
      )}
    </div>
  </section>
)

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  classes: PropTypes.shape({
    root: PropTypes.string,
    title: PropTypes.string,
    inner: PropTypes.string,
    children: PropTypes.string,
  }),
  rootId: PropTypes.string,
}

Section.defaultProps = {
  title: '',
  children: null,
  classes: {
    root: '',
    title: '',
    inner: '',
    children: '',
  },
  rootId: null,
}

export default Section
