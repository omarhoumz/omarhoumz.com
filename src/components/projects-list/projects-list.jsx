import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import projectsList from './projects.queries'
import Link from '../link/link'
import styles from './projects-list.module.css'
import Text from '../_ui/text/text'

const ProjectsList = ({ latestOnly }) => {
  const { site } = projectsList()

  const projectsToRender = React.useMemo(() => {
    const allProjectsData = [...site.siteMetadata.projects]
    const latestProjectsData = [...allProjectsData].splice(0, 2)

    return latestOnly ? latestProjectsData : allProjectsData
  }, [latestOnly, site])

  return (
    <div className={styles.allProjectsList}>
      <ul className={styles.innerProjects}>
        {projectsToRender.map(({ title, link, shortDesc }) => (
          <li key={title} className={styles.projectItem}>
            <Link
              href={link}
              target='_blank'
              className={styles.projectLink}
              variant='dark'
            >
              <span>{title}</span>
              <Text classnames={cx(styles.linkDesc)} size='sm'>
                {shortDesc}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

ProjectsList.defaultProps = {
  latestOnly: false,
}

ProjectsList.propTypes = {
  latestOnly: PropTypes.bool,
}

export default ProjectsList
