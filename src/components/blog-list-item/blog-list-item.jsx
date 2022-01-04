import Link from '../link/link'
import Pill from '../pill/pill'

function BlogListItem({ title, date, excerpt, href }) {
  return (
    <Link href={href} unstyled className='flex flex-col items-start py-4'>
      {!date ? null : <Pill label={date} />}
      <h3 className='text-2xl text-blueGray-700 font-bold mt-1.5'>{title}</h3>

      {!excerpt ? null : (
        <p className='text-lg text-blueGray-700 font-light my-2 max-w-prose'>
          {excerpt}
        </p>
      )}

      {!href ? null : (
        <Link href={href} className='text-lg'>
          Read →
        </Link>
      )}
    </Link>
  )
}

export default BlogListItem
