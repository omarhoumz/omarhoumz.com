import React from 'react'

import { Link } from '../link/link'
import './description.css'

export const Description = () => {
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
        I studied a lot of disciplines in computer and data sciences. But I
        always liked <strong>front-end development</strong> and I still do.
      </p>

      <p className="p">
        I'm actively helping my <strong>dev community</strong> to get better
        through events and conferences.
      </p>

      <p className="p">
        If you want to help, or know someone that can support the work we do in
        our community, <strong>drop me a line</strong>:{' '}
        <Link href="mailto:omarhoumz@gmail.com">omarhoumz@gmail.com</Link>
      </p>
    </React.Fragment>
  )
}
