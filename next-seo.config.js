const title = 'Omar Houmz'
const description = 'Front-end developer, organizer @gdgcasablanca'

export const canonical = 'https://omarhoumz.com'

const SEO = {
  title,
  description,
  canonical,
  openGraph: {
    type: 'website',
    locale: 'en_gb',
    url: 'https://omarhoumz.com',
    title,
    description,
    images: [
      {
        url: 'https://omarhoumz.com/og-image.png',
        alt: description,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@omarhoumz',
    site: '@omarhoumz',
    cardType: 'summary_large_image',
  },
}

export default SEO
