import React, { memo } from 'react'
import PropTypes from 'prop-types'

import ProjectItem, { projectItemType } from './project-item'

const ProjectList = memo(function ProjectList({ projects }) {
  return (
    <ul className='flex flex-col max-w-2xl gap-4 md:gap-6'>
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
