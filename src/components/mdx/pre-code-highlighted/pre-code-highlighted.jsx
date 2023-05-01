import { Highlight, defaultProps, themes } from 'prism-react-renderer'

import styles from './pre-code-highlighted.module.css'

export default function PreCodeHighlighted({ codeString, language }) {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={themes.nightOwlLight}
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
                {...getLineProps({ line, key: i })}
                className={styles.line}
                key={i.toString()}
              >
                <span className={styles.lineNo}>{i + 1}</span>
                {line.map((token, key) => (
                  <span
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
}
