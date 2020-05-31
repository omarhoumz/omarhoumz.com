import React, { useMemo, memo } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const genericOgImage =
  'https://res.cloudinary.com/omarhoumz-com/image/upload/v1590848619/og-image-generic.png'

const SEO = memo(function SEO({ description, lang, meta, keywords, title }) {
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

  const defaultMetas = useMemo(
    () =>
      [
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
          key: 'property-og:type',
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
          property: 'og:image',
          content: genericOgImage,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '339',
        },
      ].concat(
        keywords.length > 0
          ? { name: 'keywords', content: keywords.join(', ') }
          : [],
      ),
    [
      keywords,
      description,
      site.siteMetadata.description,
      title,
      site.siteMetadata.title,
    ],
  )

  const helmetMetas = useMemo(() => {
    if (!Array.isArray(meta)) {
      return defaultMetas
    }

    const metaPropKeys = meta
      .filter((m) => Object.prototype.hasOwnProperty.call(m, 'key'))
      .map((m) => m.key)

    const filteredDefaults = defaultMetas.filter(
      (m) =>
        !Object.prototype.hasOwnProperty.call(m, 'key') ||
        !metaPropKeys.includes(m.key),
    )

    return filteredDefaults.concat(meta)
  }, [defaultMetas, meta])

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={helmetMetas}
    />
  )
})

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
