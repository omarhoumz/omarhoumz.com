import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Header from 'src/components/header/header'
import Footer from 'src/components/footer/footer'

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
  children: PropTypes.elementType,
  mainClassName: PropTypes.string,
}

export default Layout
