import React from 'react'

import { Link } from '../link/link'

export const ShortDescription = () => {
  return (
    <React.Fragment>
      <p className="p">
        I'm <strong>Omar Houmz</strong>, I'm a software engineer based in
        Casablanca, Morocco. I work at{' '}
        <Link href="https://www.avito.ma/" className="dark inline">
          Avito.ma
        </Link>{' '}
        as a <strong>front-end engineer</strong>.
      </p>

      <p className="p">
        Wanna collaborate? <strong>drop me a line</strong>:{' '}
        <a
          href="mailto:omarhoumz@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          omarhoumz@gmail.com
        </a>
      </p>
    </React.Fragment>
  )
}
