import React from 'react'
import PropTypes from 'prop-types'

const Link = ({
  href,
  target,
  children,
  ...otherProps
}) => {
  const anchorProps = {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
    children,
    ...otherProps,
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <a {...anchorProps}>{children}</a>
}

Link.defaultProps = {
  href: '#!',
  target: null,
  children: null,
}

Link.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node,
}

export default Link
