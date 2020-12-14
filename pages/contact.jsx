import Head from 'next/head'

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
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <h1 className='text-3xl font-bold'>Contact</h1>
            <div className='grid'></div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact
