import cx from 'classnames'
import type { ReactNode } from 'react'

import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'

export default function Layout({
  children,
  mainClassName,
}: {
  children: ReactNode
  mainClassName?: string
}) {
  return (
    <div className='flex flex-col min-h-screen py-2'>
      <Header />
      <main className={cx('flex-grow', mainClassName)}>{children}</main>
      <Footer />
    </div>
  )
}
