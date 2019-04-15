import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Link } from '../link/link'

export const ProjectsList = ({}) => {
  return (
    <StaticQuery
      query={graphql`
        query ProjectList {
          site {
            siteMetadata {
              projects {
                title
                link
                external
                shortDesc
              }
            }
          }
        }
      `}
      render={data => {
        const allProjectsData = data.site.siteMetadata.projects

        return (
          <ul className="all-projects-list">
            {allProjectsData.map(project => (
              <li key={project.title}>
                <Link href={project.link} target="_blank" className="dark">
                  {project.title}
                </Link>
                <p>{project.shortDesc}</p>
              </li>
            ))}
          </ul>
        )
      }}
    />
  )
}
