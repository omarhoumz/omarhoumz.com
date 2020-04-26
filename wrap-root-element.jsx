import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'

import Blockquote from './src/components/_ui/mdx/blockquote/blockquote'
// import { Code } from './src/components/code'
// import { preToCodeBlock } from 'mdx-utils'

// components is its own object outside of render so that the references to
// components are stable
// eslint-disable-next-line react/jsx-props-no-spreading
const Pre = (preProps) => <pre {...preProps} />

const components = {
  pre: Pre,
  blockquote: Blockquote,
  // const props = preToCodeBlock(preProps)
  // // if there's a codeString and some props, we passed the test
  // if (props) {
  //   return <Code {...props} />
  // } else {
  //   // it's possible to have a pre without a code in it
  // }
}

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
wrapRootElement.propTypes = {
  element: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}
