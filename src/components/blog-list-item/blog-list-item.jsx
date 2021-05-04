import * as React from 'react'

import Link from '../link/link'
import Pill from '../pill/pill'

function BlogListItem({ title, date, excerpt, href }) {
  return (
    <Link href={href} unstyled className='block py-8'>
      <h3 className='text-2xl text-blueGray-700 font-bold mb-1.5'>{title}</h3>
      {!date ? null : <Pill label={date} />}
      {!excerpt ? null : (
        <p className='text-lg text-blueGray-700 font-light my-4'>{excerpt}</p>
      )}

      {!href ? null : (
        <Link href={href} className='text-lg'>
          Read more →
        </Link>
      )}
    </Link>
  )
}

export default BlogListItem
