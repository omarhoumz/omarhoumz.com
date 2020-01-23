import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.css'

const Layout = ({ children, className }) => (
  <>
    <Header />
    <main className={cx('main', className)}>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Layout.defaultProps = {
  className: '',
}

export default Layout
