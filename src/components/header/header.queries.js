import { graphql } from 'gatsby'

const MENU_LINKS_QUERY = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`

export default MENU_LINKS_QUERY
