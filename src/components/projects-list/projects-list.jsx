import React from 'react'
import PropTypes from 'prop-types'

import projectsList from './projects.queries'
import Link from '../link/link'
import styles from './projects-list.module.css'

const ProjectsList = ({ latestOnly }) => {
  const { site } = projectsList()

  const projectsToRender = React.useMemo(() => {
    const allProjectsData = [...site.siteMetadata.projects]
    const latestProjectsData = [...allProjectsData].splice(0, 2)

    return latestOnly ? latestProjectsData : allProjectsData
  }, [latestOnly, site])

  return (
    <ul className={styles.allProjectsList}>
      {projectsToRender.map(({ title, link, shortDesc }) => (
        <li key={title} className={styles.projectItem}>
          <Link
            href={link}
            target='_blank'
            className={styles.projectLink}
            variant='dark'
          >
            {title}
          </Link>
          <p className='p'>{shortDesc}</p>
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
