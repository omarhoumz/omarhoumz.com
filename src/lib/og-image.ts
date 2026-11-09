import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { Resvg } from '@resvg/resvg-js'
import satori from 'satori'

// Build-time replacement for the old @vercel/og edge route (same design).
// Static output only: files are read relative to the project root.
const root = process.cwd()
const fileData = (path: string) => readFile(join(root, path))
const dataUri = async (path: string) =>
  `data:image/png;base64,${(await fileData(path)).toString('base64')}`

type Node = { type: string; props: Record<string, unknown> }
const h = (
  type: string,
  style: Record<string, unknown>,
  ...children: Array<Node | string | null>
): Node => ({ type, props: { style, children: children.filter(Boolean) } })

export async function renderOgImage({
  title,
  url,
}: {
  title: string
  url: string
}): Promise<Buffer> {
  const [bold, medium, avatar, icon] = await Promise.all([
    fileData('src/assets/fonts/Inter-Bold.ttf'),
    fileData('src/assets/fonts/Inter-Medium.ttf'),
    dataUri('public/omar-circle.png'),
    dataUri('public/icon.png'),
  ])

  const tree = h(
    'div',
    {
      display: 'flex',
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      padding: '2.5rem',
      backgroundColor: '#0f0b64',
      fontFamily: 'Inter',
    },
    h(
      'div',
      {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        padding: '4rem',
        backgroundColor: '#fff',
        borderRadius: '1rem',
      },
      h(
        'h1',
        {
          position: 'relative',
          fontSize: 68,
          lineHeight: 1,
          fontWeight: 700,
          margin: 0,
        },
        h('span', {
          backgroundColor: '#ffef8a',
          position: 'absolute',
          width: '5rem',
          height: '5rem',
          top: '-2.75rem',
          left: '-2.75rem',
          borderRadius: 9999,
        }),
        h('span', { position: 'relative' }, title.slice(0, 100)),
      ),
      h(
        'footer',
        {
          marginTop: 'auto',
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          width: '100%',
        },
        {
          type: 'img',
          props: { src: avatar, width: 112, height: 112 },
        },
        h(
          'div',
          {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: 16,
          },
          h(
            'h3',
            { color: '#0f0b64', fontSize: 24, fontWeight: 400, margin: 0 },
            'omar',
            h('span', { fontWeight: 700 }, 'houmz'),
            '.com',
          ),
          h(
            'h3',
            {
              fontSize: 34,
              backgroundColor: '#f7f3ff',
              padding: '0.25rem 0.5rem',
              margin: '12px 0 0 0',
            },
            url,
          ),
        ),
        {
          type: 'img',
          props: {
            src: icon,
            width: 48,
            height: 48,
            style: { alignSelf: 'flex-end', marginLeft: 'auto' },
          },
        },
      ),
    ),
  )

  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Inter', data: medium, weight: 400, style: 'normal' },
      { name: 'Inter', data: bold, weight: 700, style: 'normal' },
    ],
  })

  return new Resvg(svg).render().asPng()
}
