import SEO, { canonical } from 'next-seo.config'
import Link from '@/components/link/link'
import PageSeo from '@/components/page-seo/page-seo'

import Layout from 'src/layout/layout'
import PageTitle from '@/components/page-title'

function Contact() {
  return (
    <>
      <PageSeo title='Contact Me' url={canonical.concat('/contact/')} />

      <Layout mainClassName='py-32 space-y-12'>
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0 text-blueGray-600'>
            <PageTitle>Contact Me</PageTitle>
            <p>If you want to get in touch, this is where I hang out often.</p>
            <div>
              <h2>Twitter:</h2>
              <Link
                external
                nofollow
                href='https://twitter.com/omarhoumz'
                className=''
                activeClassName=''
              >
                {SEO.twitter.handle}
              </Link>
            </div>
            <div>
              <h2>LinkedIn:</h2>
              <Link
                external
                nofollow
                href='https://linkedin.com/in/omarhoumz'
                className=''
                activeClassName=''
              >
                /in/omarhoumz
              </Link>
            </div>
            <div>
              <h2>Email:</h2>
              <Link
                external
                nofollow
                href='mailto://omarhoumz@gmail.com'
                className=''
                activeClassName=''
              >
                omarhoumz[at]gmail.com
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact
