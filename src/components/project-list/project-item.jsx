import Image from 'next/image'
import PropTypes from 'prop-types'

import Link from '../link/link'
import Pill from '../pill/pill'
import { projectStatuses } from './projects'

const externalIcon = (
  <svg
    className='w-4 h-4'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
    />
  </svg>
)

export default function ProjectItem({
  icon,
  title,
  description,
  link: { href, external } = {},
  ...props
}) {
  return (
    <Link
      href={href}
      external={external}
      unstyled
      className={[
        'group flex flex-col gap-2 p-6 border border-brand-50 rounded-lg transition-shadow',
        '[--shadow:0_1px_16px_-4px_var(--color-brand-100)]',
        'hover:shadow-(--shadow) focus-visible:shadow-(--shadow) focus-within:shadow-brand-100 focus-visible:outline-2 focus-visible:outline-brand-100 focus-visible:-outline-offset-2',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <h3 className='flex items-center gap-3 text-lg'>
        {!props?.status || props?.status === projectStatuses.active ? null : (
          <Pill label={projectStatuses[props.status]} />
        )}
        {!icon ? null : (
          <Image
            src={icon}
            className='border border-gray-100 rounded-md'
            width={28}
            height={28}
            alt=''
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        )}
        <span className='font-bold transition-colors text-brand-800 group-hover:text-brand-600'>
          {title}
        </span>
        <span className='text-gray-300 transition-colors group-hover:text-gray-400'>
          {externalIcon}
        </span>
      </h3>
      <p className='max-w-2xl text-gray-500'>{description}</p>
    </Link>
  )
}

export const projectItemType = {
  icon: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    external: PropTypes.bool,
  }),
}

ProjectItem.propTypes = projectItemType
