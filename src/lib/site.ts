export const siteTitle = 'Omar Houmz'
export const siteDescription = 'Front-end engineer, organizer @gdgcasablanca'
export const twitterHandle = '@omarhoumz'
export const gaTrackingId = 'G-1L0R3KMCNK'

export const defaultOgImage = {
  // From `site` in astro.config.mjs, so the origin is written in one place.
  url: new URL('/og-image.png', import.meta.env.SITE).href,
  alt: siteDescription,
  width: 1200,
  height: 630,
}
