import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import ShortDesc from './short-description.mdx'
import Link from '../link/link'

// eslint-disable-next-line react/jsx-props-no-spreading
const P = (props) => <p className='p' {...props} />
const Anchor = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Link variant='dark' target='_blank' {...props} />
)

const ShortDescription = () => (
  <MDXProvider
    components={{
      p: P,
      a: Anchor,
    }}
  >
    <ShortDesc />
  </MDXProvider>
)

export default ShortDescription
