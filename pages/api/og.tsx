import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'

export const config = { runtime: 'edge' }

const fontNormal = fetch(
  new URL('../../src/assets/fonts/Inter-Medium.woff2', import.meta.url),
).then((res) => res.arrayBuffer())
const fontBold = fetch(
  new URL('../../src/assets/fonts/Inter-Bold.woff2', import.meta.url),
).then((res) => res.arrayBuffer())

export default async function handler(request: NextRequest) {
  try {
    const fontData = await fontNormal
    const fontBoldData = await fontBold

    const { searchParams } = new URL(request.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

    const url = searchParams.get('url')

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: '2.5rem',
            backgroundColor: '#0f0b64',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              height: '100%',
              padding: '4rem',
              backgroundColor: '#fff',
              borderRadius: '1rem',
            }}
          >
            <h1
              style={{
                position: 'relative',
                fontSize: 68,
                lineHeight: 1,
                fontWeight: 700,
              }}
            >
              <span
                style={{
                  backgroundColor: '#ffef8a',
                  position: 'absolute',
                  width: '5rem',
                  height: '5rem',
                  top: '-2.75rem',
                  left: '-2.75rem',
                  borderRadius: 9999,
                }}
              />
              <span style={{ position: 'relative' }}>{title}</span>
            </h1>
            <footer
              style={{
                marginTop: 'auto',
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
                width: '100%',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='https://www.omarhoumz.com/omar-circle.png'
                alt=''
                width={112}
                height={112}
                style={{ maxWidth: '100%' }}
              />

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 16,
                }}
              >
                <h3
                  style={{
                    color: '#0f0b64',
                    fontSize: 24,
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  omar
                  <span style={{ fontWeight: 700 }}>houmz</span>
                  .com
                </h3>
                {!url ? null : (
                  <h3
                    style={{
                      fontSize: 34,
                      backgroundColor: '#f7f3ff',
                      padding: '0.25rem 0.5rem',
                      margin: '12px 0 0 0',
                    }}
                  >
                    {url}
                  </h3>
                )}
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='https://www.omarhoumz.com/icon.png'
                alt=''
                width={48}
                height={48}
                style={{
                  alignSelf: 'flex-end',
                  marginLeft: 'auto',
                  maxWidth: '100%',
                }}
              />
            </footer>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: fontBoldData,
            weight: 600,
            style: 'normal',
          },
          //   // {
          //   //   name: 'Inter',
          //   //   data: fontBlackData,
          //   //   weight: 700,
          //   //   style: 'normal',
          //   // },
        ],
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
