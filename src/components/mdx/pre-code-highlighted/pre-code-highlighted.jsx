import React, { memo } from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'

import styles from './pre-code-highlighted.module.css'

const PreCodeHighlighted = memo(function PreCodeHighlighted({
  codeString,
  language,
}) {
  return (
    <Highlight
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div
          className={`${styles.preWrapper} flex px-2 mx-2 rounded overflow-auto shadow`}
        >
          <pre
            className={[className, styles.preStyles].join(' ')}
            style={style}
          >
            {tokens.map((line, i) => (
              <div
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...getLineProps({ line, key: i })}
                className={styles.line}
                key={i.toString()}
              >
                <span className={styles.lineNo}>{i + 1}</span>
                {line.map((token, key) => (
                  <span
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...getTokenProps({ token, key })}
                    key={key.toString()}
                  />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
})

export default PreCodeHighlighted
