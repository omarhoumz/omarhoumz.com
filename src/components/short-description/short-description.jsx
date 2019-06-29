import React from 'react'

import Link from '../link/link'

const ShortDescription = () => (
  <React.Fragment>
    <p className="p">
      <span>I&apos;m</span>
      <strong>Omar Houmz</strong>
      <span>
        , I&apos;m a software engineer based in Casablanca, Morocco. I work at
      </span>
      <Link href="https://www.avito.ma/" className="dark inline">
        Avito.ma
      </Link>
      <span>as a</span>
      <strong>front-end engineer</strong>
      <span>.</span>
    </p>

    <p className="p">
      Wanna collaborate?
      <strong>drop me a line</strong>
      <span>:</span>
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

export default ShortDescription
