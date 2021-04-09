import { graphql, useStaticQuery } from 'gatsby'

export default () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          menuLinks {
            label
            link
            partiallyActive
          }
        }
      }
    }
  `)
