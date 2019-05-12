import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Link } from '../link/link'
import './projects-list.css'

export const ProjectsList = ({ latest }) => {
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
        const allProjectsData = [...data.site.siteMetadata.projects]
        const latestProjectsData = [...allProjectsData].splice(0, 2)

        const projectsToRender = latest ? latestProjectsData : allProjectsData

        return (
          <ul className="all-projects-list">
            {projectsToRender.map(project => (
              <li key={project.title}>
                <Link href={project.link} className="dark">
                  {project.title}
                </Link>
                <p className="p">{project.shortDesc}</p>
              </li>
            ))}
          </ul>
        )
      }}
    />
  )
}
