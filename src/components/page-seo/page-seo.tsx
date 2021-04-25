import * as React from 'react'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'

interface SeoImageType {
  url: string
  alt: string
  width: number
  height: number
}

type IProps = {
  description?: string
  title?: string
  url?: string
  images?: SeoImageType[]
}

function PageSeo({
  description = '',
  title = '',
  url = '',
  images = [],
}: IProps) {
  let meta: IProps & { canonical?: string } = {}

  if (description) meta.description = description
  if (title) meta.title = title
  if (images.length > 0) meta.images = images
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
}

PageSeo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default PageSeo
