import { useState } from 'react'
import Image from "next/legacy/image";
import cx from 'classnames'

import Link from '../link/link'
import styles from './header.module.css'

const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Blog',
    link: '/blog/',
    partiallyActive: true,
  },
  {
    label: 'Projects',
    link: '/projects/',
  },
  {
    label: 'About',
    link: '/about/',
  },
  {
    label: 'Contact',
    link: '/contact/',
  },
]

export default function Header() {
  const [showNav, setShowNav] = useState(false)

  return (
    <header className='sticky top-0 z-10 w-full xl:px-0'>
      <div className='relative z-1 flex items-center justify-between h-14 w-full max-w-5xl px-2 mx-auto bg-white bg-opacity-80 backdrop-blur-sm backdrop-saturate-150 border-b border-brand-50'>
        <Link
          unstyled
          href='/'
          className='flex z-10 items-center gap-2 text-xl py-1 px-2 -ml-1 leading-none transition-colors duration-75 ring ring-transparent rounded-sm hover:text-brand-700 focus:outline-none focus:ring-brand-100'
        >
          <Image src='/icon.png' width={32} height={32} alt='' />
          <span className='pb-1'>
            <span>omar </span>
            <span className='font-bold'>houmz</span>
          </span>
        </Link>

        <nav className='hidden md:flex items-stretch self-stretch space-x-1'>
          {links.map(({ link, label }, index) => {
            return (
              <Link
                unstyled
                href={link}
                key={index}
                className={cx(
                  styles.navLink,
                  'flex items-center relative px-2 rounded-sm ring ring-transparent hover:text-brand-700 focus:text-brand-700 focus:outline-none focus:ring-brand-100',
                )}
                activeClassName={cx(
                  styles.activeLink,
                  'text-brand-500 hover:text-brand-500',
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        <button
          className='flex z-10 md:hidden leading-none py-2 px-4'
          onClick={() => setShowNav((o) => !o)}
        >
          Menu
        </button>
        <div
          className={cx(
            styles.mobileNav,
            'block md:hidden px-2 absolute left-0 bottom-0 -translate-y-14 transition transform w-full opacity-0 bg-opacity-80',
            { [styles.showNav]: showNav },
          )}
        >
          <nav className='flex flex-col py-3 rounded-lg bg-white bg-opacity-95 backdrop-blur-sm backdrop-saturate-150 shadow-md'>
            {links.map(({ link, label }, index) => {
              return (
                <Link
                  unstyled
                  href={link}
                  key={index}
                  className='text-xl px-6 py-2 hover:text-brand-700 hover:bg-brand-50 focus:outline-none focus:text-brand-700 focus:bg-brand-50'
                  activeClassName='text-brand-500'
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
