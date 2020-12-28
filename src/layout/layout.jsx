import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

const Layout = memo(function Layout({ children, mainClassName }) {
  return (
    <div className='flex flex-col min-h-screen py-2'>
      <Header />
      <main className={cx('flex-grow', mainClassName)}>{children}</main>
      <Footer />
    </div>
  )
})

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.elementType,
    PropTypes.element,
    PropTypes.node,
  ]),
  mainClassName: PropTypes.string,
}

export default Layout
