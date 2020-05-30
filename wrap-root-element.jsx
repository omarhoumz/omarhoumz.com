/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'

import Blockquote from './src/components/_ui/mdx/blockquote/blockquote'
import PreCodeHighlighted from './src/components/_ui/mdx/pre-code-highlighted/pre-code-highlighted'
import Code from './src/components/_ui/mdx/code/code'

const Pre = (preProps) => {
  const props = preToCodeBlock(preProps)
  // if there's a codeString and some props, we passed the test
  if (props) {
    return <PreCodeHighlighted {...props} />
  }
  return <pre {...props} />
}

const components = {
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
}

const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
wrapRootElement.propTypes = {
  element: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}

export default wrapRootElement
