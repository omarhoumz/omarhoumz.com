import PropTypes from 'prop-types'
import NextLink from 'next/link'
import cx from 'classnames'
import { useRouter } from 'next/router'

const colors = {
  blue: 'text-brand-500 hover:text-brand-700 hover:border-brand-700',
  dark: 'text-gray-800 hover:text-gray-900 hover:border-gray-900',
}

const btnBgColors = {
  blue: 'hover:text-brand-700 hover:bg-brand-50 focus:ring-brand-50',
  dark: 'hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-100',
}

const Link = ({
  href,
  as,
  target,
  external,
  nofollow,
  children,
  className,
  activeClassName,
  color,
  btnStyle,
  unstyled,
}) => {
  const router = useRouter()
  const { asPath } = router ?? {}

  const classes = unstyled
    ? cx(className, { [activeClassName]: asPath === href || asPath === as })
    : cx(
        {
          'pb-0.5 pt-1 border-b-2 border-transparent': !btnStyle,
          'inline-flex items-center h-8 px-3 uppercase text-sm font-bold rounded border border-current focus:outline-none ring ring-transparent': btnStyle,
          [btnBgColors[color]]: btnStyle,
          [activeClassName]: asPath === href || asPath === as,
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
      <a href={as || href} target='_blank' rel={relProp} className={classes}>
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
  nofollow: false,
  external: false,
  color: 'blue',
  btnStyle: false,
  unstyled: false,
}

Link.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string,
  target: PropTypes.string,
  nofollow: PropTypes.bool,
  children: PropTypes.node,
  external: PropTypes.bool,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  color: PropTypes.oneOf(Object.keys(colors)),
  btnStyle: PropTypes.bool,
  unstyled: PropTypes.bool,
}

export default Link
