import React from 'react'

import Link from '../link/link'

const ShortDescription = () => (
  <>
    <p className='p'>
      <span>I&apos;m</span>
      &nbsp;
      <strong>Omar Houmz</strong>
      <span>
        , I&apos;m a software engineer based in Casablanca, Morocco. I work at
      </span>
      &nbsp;
      <Link href='https://www.avito.ma/' variant='dark'>
        Avito.ma
      </Link>
      <span>as a</span>
      &nbsp;
      <strong>front-end engineer</strong>
      <span>.</span>
    </p>

    <p className='p'>
      Wanna collaborate?
      <strong> drop me a line</strong>
      <span>:</span>
      &nbsp;
      <Link href='mailto:omarhoumz@gmail.com' target='_blank'>
        omarhoumz@gmail.com
      </Link>
    </p>
  </>
)

export default ShortDescription
