import React, { memo } from 'react'
import PropTypes from 'prop-types'

import ProjectItem, { projectItemType } from './project-item'

const ProjectList = memo(function ProjectList({ projects }) {
  return (
    <ul className='inline-flex flex-col max-w-2xl border border-brand-50 rounded-lg space-y-0.5'>
      {projects.map((project, index) => {
        return (
          <li key={`${index}`}>
            <ProjectItem {...project} />
          </li>
        )
      })}
    </ul>
  )
})

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape(projectItemType)),
}

export default ProjectList
