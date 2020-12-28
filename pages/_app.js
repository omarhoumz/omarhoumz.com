import { DefaultSeo } from 'next-seo'
import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import * as gtag from '@/lib/gtag'
import SEO from 'next-seo.config'

import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* 
          Generated with https://realfavicongenerator.net
          On 22 Dec 2020 (https://realfavicongenerator.net/favicon_result?file_id=p1eq60b9v71ejn1aihcp8pp31aqn6)
         */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg'
          color='#2b5797'
        />
        <meta name='msapplication-TileColor' content='#2b5797' />
        <meta name='theme-color' content='#f4f4f4' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
