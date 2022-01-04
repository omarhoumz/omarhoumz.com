import type { NextApiRequest, NextApiResponse } from 'next'

import { getScreenshot } from '../../lib/chromium'

const baseUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : process.env.VERCEL_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { url } = req
    const { searchParams } = new URL(`https://omarhoumz.com${url}`)
    const queryString = searchParams.toString()
    const thumbnailUrl = `${baseUrl}/thumbnail/?${queryString}`

    const image = await getScreenshot(
      thumbnailUrl,
      process.env.NODE_ENV !== 'production',
    )

    res.setHeader('Content-Type', 'image/jpeg')
    res.setHeader(
      'Cache-Control',
      'public,immutable,no-transform,s-max-age=21600,max-age=21600',
    )
    res.status(200).end(image)
  } catch (error) {
    const errorMsg = '<h1>Internal Error</h1><p>Sorry, an error occurred.</p>'
    res.setHeader('Content-Type', 'text/html')
    res.status(200).end(errorMsg)
    console.error(error)
  }
}
