import { ImageResponse } from '@vercel/og'

// export const config = {
//   runtime: 'experimental-edge',
// }

export default function handler(req) {
  const { searchParams } = new URL(req.url, 'https://example.com')

  const title = searchParams.get('title') ?? 'Omar Houmz'
  const emoji = searchParams.get('emoji') ?? '＠'

  return new ImageResponse(
    (
      <div>
        {title} - {emoji}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
