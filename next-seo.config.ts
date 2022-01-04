const title = 'Omar Houmz'
const description = 'Front-end engineer, organizer @gdgcasablanca'

export const canonical: string = 'https://www.omarhoumz.com'

const SEO = {
  title,
  description,
  canonical,
  openGraph: {
    type: 'website',
    locale: 'en_gb',
    url: canonical,
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
