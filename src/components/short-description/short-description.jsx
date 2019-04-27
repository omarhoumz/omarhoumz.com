import React from 'react'

export const ShortDescription = () => {
  return (
    <React.Fragment>
      <p>
        I'm <strong>Omar Houmz</strong>, I'm a software engineer based in
        Casablanca, Morocco. I work at{' '}
        <a
          href="https://www.avito.ma/"
          rel="noopener noreferrer"
          target="_blank"
          className="dark p"
        >
          Avito.ma
        </a>{' '}
        as a <strong>front-end engineer</strong>.
      </p>

      <p>
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
