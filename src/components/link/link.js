import React from 'react'

export const Link = ({ href, target, children, ...otherProps }) => {
  const anchorProps = {
    href,
    target,
    rel: target === '_blank' && 'noopener noreferrer',
    children,
    ...otherProps,
  }
  return <a {...anchorProps}>{children}</a>
}
