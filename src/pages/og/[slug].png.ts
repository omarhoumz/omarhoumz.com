import type { APIRoute, GetStaticPaths } from 'astro'
import { renderOgImage } from '@/lib/og-image'
import { getPosts } from '@/lib/posts'

export const getStaticPaths = (async () => {
  const posts = await getPosts()
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { title: post.title, url: post.url },
  }))
}) satisfies GetStaticPaths

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage({ title: props.title, url: props.url })
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  })
}
