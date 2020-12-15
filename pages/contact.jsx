import Head from 'next/head'
import Link from 'src/components/link/link'

import Layout from 'src/layout/layout'

function Contact() {
  return (
    <>
      <Head>
        <title>Omar Houmz</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout mainClassName='py-14 space-y-12'>
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0 text-blueGray-600'>
            <h1 className='text-3xl text-blueGray-800 font-bold'>Contact</h1>
            <p>If you want to get in touch, this is where I hang out often.</p>
            <div>
              <h2>Twitter:</h2>
              <Link external nofollow href='https://twitter.com/omarhoumz'>
                @omarhoumz
              </Link>
            </div>
            <div>
              <h2>LinkedIn:</h2>
              <Link external nofollow href='https://linkedin.com/in/omarhoumz'>
                /in/omarhoumz
              </Link>
            </div>
            <div>
              <h2>Email:</h2>
              <Link external nofollow href='mailto://omarhoumz@gmail.com'>
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
