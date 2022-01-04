import cx from 'classnames'
import { memo } from 'react'
import type { ReactNode } from 'react'

import Header from 'components/header/header'
import Footer from 'components/footer/footer'

const Layout = memo(function Layout({
  children,
  mainClassName,
}: {
  children: ReactNode
  mainClassName: string
}) {
  return (
    <div className='flex flex-col min-h-screen py-2'>
      <Header />
      <main className={cx('flex-grow', mainClassName)}>{children}</main>
      <Footer />
    </div>
  )
})

export default Layout
