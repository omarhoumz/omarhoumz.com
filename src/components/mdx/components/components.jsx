import Link from '@/components/link/link'
import PreCodeHighlighted from '@/components/mdx/pre-code-highlighted/pre-code-highlighted'

import styles from './components.module.css'
import preToCodeBlock from './pre-to-code-block'

const Pre = (preProps) => {
  const props = preToCodeBlock(preProps)
  // if there's a codeString and some props, we passed the test
  if (props) {
    return <PreCodeHighlighted {...props} />
  }
  return <pre {...props} />
}

const Blockquote = (props) => (
  <blockquote className={styles.blockquote} {...props} />
)

const Code = (props) => {
  return <code className={styles.code} {...props} />
}

export const components = {
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
  a: Link,
}
