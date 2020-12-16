import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Link from '../link/link'
import Pill from '../pill/pill'

const BlogListItem = memo(function BlogListItem({
  title,
  date,
  excerpt,
  href,
}) {
  return (
    <div className='py-8'>
      <h3 className='text-2xl text-blueGray-700 font-bold mb-1.5'>{title}</h3>
      {!date ? null : <Pill label={date} />}
      <p className='text-lg text-blueGray-700 font-light my-4'>{excerpt}</p>

      {!href ? null : (
        <Link href={href} className='text-lg'>
          Read more →
        </Link>
      )}
    </div>
  )
})

BlogListItem.propTypes = {}

export default BlogListItem
