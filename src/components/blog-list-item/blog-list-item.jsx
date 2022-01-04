import cx from 'classnames'

import Link from '../link/link'
import Pill from '../pill/pill'

function BlogListItem({ title, date, excerpt, href, className = '' }) {
  return (
    <Link
      href={href}
      unstyled
      className={cx(
        'flex flex-col items-start p-4 group hover:bg-[#fbfbff]',
        className,
      )}
    >
      {!date ? null : <Pill label={date} />}
      <h3 className='text-2xl text-blueGray-700 font-bold mt-1.5'>{title}</h3>

      {!excerpt ? null : (
        <p className='text-lg text-blueGray-700 font-light my-2 max-w-prose'>
          {excerpt}
        </p>
      )}

      {!href ? null : (
        <p className='group-hover:text-brand-700 text-lg'>Read →</p>
      )}
    </Link>
  )
}

export default BlogListItem
