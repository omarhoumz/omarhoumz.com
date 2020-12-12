import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Link from '../link/link'
import styles from './project-list.module.css'
import Pill from '../pill/pill'
import { projectStatuses } from 'src.old/project-statuses'

const ProjectItem = memo(function ProjectItem({
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
        'block p-6 rounded-lg transition-shadow focus:outline-none',
        styles.projectItem,
      ].join(' ')}
    >
      <h3 className='flex items-center text-lg font-bold mb-2'>
        {props?.status ? (
          props?.status === projectStatuses.active ? null : (
            <Pill label={projectStatuses[props.status]} className='mr-2' />
          )
        ) : null}
        <span>{title}</span>
      </h3>
      <p className='text-lg font-light max-w-2xl'>{description}</p>
    </Link>
  )
})

export const projectItemType = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.shape({
    href: PropTypes.string,
    external: PropTypes.bool,
  }),
}

ProjectItem.propTypes = projectItemType

export default ProjectItem
