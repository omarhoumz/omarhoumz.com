import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/react'
import { preToCodeBlock } from 'mdx-utils'

import Blockquote from './src/components/_ui/mdx/blockquote/blockquote'
import Code from './src/components/code/code'

// eslint-disable-next-line react/jsx-props-no-spreading
const Pre = (preProps) => <pre {...preProps} />

const components = {
  // eslint-disable-next-line react/display-name
  pre: (preProps) => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <Code {...props} />
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Pre {...props} />
  },
  blockquote: Blockquote,
}

// eslint-disable-next-line import/prefer-default-export
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
wrapRootElement.propTypes = {
  element: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
}
