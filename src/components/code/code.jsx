import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/synthwave84'

import styles from './code.module.css'

const Code = ({ codeString, language }) => {
  return (
    <Highlight
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={[className, styles.preStyles].join(' ')} style={style}>
          {tokens.map((line, i) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <div {...getLineProps({ line, key: i })} key={i.toString()}>
              {line.map((token, key) => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <span {...getTokenProps({ token, key })} key={key.toString()} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
