import PropTypes from 'prop-types'
import NextLink from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/router'

const colors = {
  blue: 'text-brand-500 hover:text-brand-700 hover:border-brand-700 text-current no-underline',
  dark: 'text-gray-800 hover:text-gray-900 hover:border-gray-900',
  current: 'hover:border-current text-current no-underline',
}

const btnBgColors = {
  blue: 'hover:text-brand-700 hover:bg-brand-50 focus:ring-brand-50',
  dark: 'hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-100',
}

const Link = ({
  activeClassName,
  btnStyle,
  children,
  className,
  color,
  external,
  href,
  nofollow,
  unstyled,
}) => {
  const router = useRouter()
  const { asPath } = router ?? {}

  const isActive = href.startsWith('/blog/')
    ? asPath.startsWith('/blog/')
    : asPath === href

  const classes = unstyled
    ? cx(className, { [activeClassName]: isActive && activeClassName })
    : cx(
        {
          'pb-0.5 pt-1 border-b-2 border-transparent': !btnStyle,
          'inline-flex items-center h-8 px-3 uppercase text-sm font-bold rounded border border-current focus:outline-none ring ring-transparent':
            btnStyle,
          [btnBgColors[color]]: btnStyle,
          [activeClassName]: isActive && activeClassName,
        },
        colors[color],
        'transition-color duration-75',
        className,
      )

  if (external) {
    const relProp = ['noopener', 'noreferrer', nofollow && 'nofollow']
      .filter(Boolean)
      .join(' ')

    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a href={href} target='_blank' rel={relProp} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a className={classes}>{children}</a>
    </NextLink>
  )
}

Link.defaultProps = {
  btnStyle: false,
  color: 'blue',
  external: false,
  nofollow: false,
  unstyled: false,
}

Link.propTypes = {
  activeClassName: PropTypes.string,
  btnStyle: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colors)),
  external: PropTypes.bool,
  href: PropTypes.string,
  nofollow: PropTypes.bool,
  unstyled: PropTypes.bool,
}

export default Link
