import React, { memo } from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import Link from '../link/link'
import styles from './project-list.module.css'
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

const ProjectItem = memo(function ProjectItem({
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
        'group flex flex-col gap-2 p-6 border border-brand-50 rounded-lg transition-shadow focus:outline-none',
        styles.projectItem,
      ].join(' ')}
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
})

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

export default ProjectItem
