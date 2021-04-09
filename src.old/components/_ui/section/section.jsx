import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './section.module.css'

const Section = ({ title, classes, rootId, Component, children }) => {
  const ChildrenAs = Component || 'div'

  return (
    <section className={cx(styles.section, classes.root)} id={rootId}>
      <div className={classes.inner || null}>
        {title && <h2 className={styles.title}>{title}</h2>}

        {children && (
          <ChildrenAs className={cx(classes.children)}>{children}</ChildrenAs>
        )}
      </div>
    </section>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
  ]),
  Component: PropTypes.oneOfType([
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
  Component: null,
  classes: {
    root: '',
    title: '',
    inner: '',
    children: '',
  },
  rootId: null,
}

export default Section
