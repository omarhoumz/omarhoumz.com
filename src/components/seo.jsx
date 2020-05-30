import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, keywords, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
        file(relativePath: { eq: "og-image-generic.png" }) {
          publicURL
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  const genericOgImage =
    'https://res.cloudinary.com/omarhoumz-com/image/upload/v1590848619/og-image-generic.png'

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: `${title} | ${site.siteMetadata.title}`,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'author',
          content: 'Omar Houmz',
        },
        {
          name: 'description',
          content: "Omar Houmz's personal website",
        },
        {
          name: 'twitter:image',
          content: genericOgImage,
        },
        {
          name: 'twitter:image:src',
          content: genericOgImage,
        },
        {
          property: 'og:image',
          content: genericOgImage,
        },
      ]
        .concat(
          keywords.length > 0
            ? { name: 'keywords', content: keywords.join(', ') }
            : [],
        )
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
  description: '',
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO
