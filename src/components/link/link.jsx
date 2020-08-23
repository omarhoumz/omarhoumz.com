import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import cx from 'classnames'

import styles from './link.module.css'

const Link = ({
  href,
  target,
  nofollow,
  children,
  external,
  className,
  variant,
  inline,
  btnStyle,
  ...otherProps
}) => {
  const classes = cx(
    styles.link,
    {
      [styles.dark]: variant === 'dark',
      [styles.btnStyle]: btnStyle,
      [styles.inline]: inline,
    },
    className,
  )

  if (external) {
    const relProp = ['noopener', 'noreferrer', nofollow && 'nofollow']
      .filter(Boolean)
      .join(' ')

    return (
      <a
        href={href}
        // eslint-disable-next-line react/jsx-no-target-blank
        target='_blank'
        rel={relProp}
        className={classes}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...otherProps}
      >
        {children}
      </a>
    )
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <GatsbyLink to={href} className={classes} {...otherProps}>
      {children}
    </GatsbyLink>
  )
}

Link.defaultProps = {
  href: '#!',
  target: null,
  nofollow: false,
  children: null,
  internal: false,
  className: '',
  variant: 'default',
  inline: false,
  btnStyle: false,
}

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  nofollow: PropTypes.bool,
  children: PropTypes.node,
  internal: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'dark']),
  inline: PropTypes.bool,
  btnStyle: PropTypes.bool,
}

export default Link
