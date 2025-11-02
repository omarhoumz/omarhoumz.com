import Link from '@/components/link/link'
import PreCodeHighlighted from '@/components/mdx/pre-code-highlighted/pre-code-highlighted'

import preToCodeBlock from './pre-to-code-block'

function Pre(preProps) {
  const props = preToCodeBlock(preProps)
  // if there's a codeString and some props, we passed the test
  if (props) {
    return <PreCodeHighlighted {...props} />
  }
  return <pre {...props} />
}

function Blockquote(props) {
  return (
    <blockquote
      className='block py-1 px-4! md:px-8! md:-mx-8 -mx-4 border-s-4 border-brand-700 bg-brand-50/50'
      {...props}
    />
  )
}

function Code(props) {
  return (
    <code
      className='bg-gray-100 text-gray-700 rounded-sm px-0.5 py-px border border-gray-200 text-[88%]'
      {...props}
    />
  )
}

export const components = {
  pre: Pre,
  code: Code,
  blockquote: Blockquote,
  a: Link,
}
