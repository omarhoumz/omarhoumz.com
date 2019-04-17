import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../header/header'
import { Footer } from '../footer/footer'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta name="author" content="Omar Houmz" />
    </Helmet>
    <Header />
    <main className="main">{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
