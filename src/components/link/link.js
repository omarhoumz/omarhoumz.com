import React from 'react'

export const Link = ({ href, target, children, ...otherProps }) => {
  const anchorProps = {
    href,
    target: '_blank',
    rel: 'noopener noreferrer',
    children,
    ...otherProps,
  }
  return <a {...anchorProps}>{children}</a>
}
