import React from 'react'
import PropTypes from 'prop-types'

import projectsList from './projects.queries'
import Link from '../link/link'
import './projects-list.css'

const ProjectsList = ({ latestOnly }) => {
  const data = projectsList()

  const allProjectsData = [...data.site.siteMetadata.projects]
  const latestProjectsData = [...allProjectsData].splice(0, 2)

  const projectsToRender = latestOnly ? latestProjectsData : allProjectsData

  return (
    <ul className="all-projects-list">
      {projectsToRender.map(({ title, link, shortDesc }) => (
        <li key={title}>
          <Link href={link} target="_blank" variant="dark">
            {title}
          </Link>
          <p className="p">{shortDesc}</p>
        </li>
      ))}
    </ul>
  )
}

ProjectsList.defaultProps = {
  latestOnly: false,
}

ProjectsList.propTypes = {
  latestOnly: PropTypes.bool,
}

export default ProjectsList
