import { useStaticQuery, graphql } from 'gatsby'

export default () =>
  useStaticQuery(graphql`
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
  `)
