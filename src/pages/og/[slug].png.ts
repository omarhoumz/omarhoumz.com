import type { APIRoute, GetStaticPaths } from 'astro'
import { renderOgImage } from '@/lib/og-image'
import { getPosts } from '@/lib/posts'

export const getStaticPaths = (async () => {
  const posts = await getPosts()
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { title: post.data.title },
  }))
}) satisfies GetStaticPaths

export const GET: APIRoute = async ({ params, props }) => {
  const png = await renderOgImage({
    title: props.title,
    url: `/blog/${params.slug}/`,
  })
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png' },
  })
}
