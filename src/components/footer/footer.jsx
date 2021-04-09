import React, { memo } from 'react'

import Link from '../link/link'

const currentYear = new Date().getFullYear()

const Footer = memo(function Footer() {
  return (
    <footer className='text-blueGray-700 text-center space-y-2 py-6 md:py-12 px-4 md:px-0'>
      <p className='font-bold text-sm'>Omar Houmz &copy; {currentYear}</p>
      <small className='inline-block'>
        This site is built with{' '}
        <Link color='dark' href='https://www.nextjs.org/' external>
          Nextjs
        </Link>{' '}
        and hosted on{' '}
        <Link color='dark' href='https://vercel.com/' external>
          Vercel
        </Link>
        . The source code is hosted on{' '}
        <Link
          color='dark'
          href='https://github.com/omarhoumz/omarhoumz.com'
          external
        >
          Github
        </Link>
        .
      </small>
    </footer>
  )
})

export default Footer
