import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'

const PageSeo = memo(function PageSeo({
  description = '',
  title = '',
  url = '',
}) {
  let meta = {}

  if (description) meta.description = description
  if (title) meta.title = title
  if (url) {
    meta.url = url
    meta.canonical = url
  }

  return (
    <NextSeo
      {...meta}
      titleTemplate='%s - Omar Houmz'
      openGraph={{ ...meta }}
    />
  )
})

PageSeo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default PageSeo
