import PageSeo from 'src/components/page-seo/page-seo'

import Layout from 'src/layout/layout'
import { canonical } from 'next-seo.config'

const workIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    />
  </svg>
)

const educationIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
    />
  </svg>
)

const communityIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    />
  </svg>
)

const contactIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    />
  </svg>
)

const sections = [
  {
    icon: workIcon,
    title: 'work',
    description:
      'I’m a software engineer based in Casablanca, Morocco. I work at Avito.ma as a front-end engineer.',
  },
  {
    icon: educationIcon,
    title: 'Education',
    description:
      'I studied a lot of disciplines in computer and data sciences. But I always liked front-end development and I still do.',
  },
  {
    icon: communityIcon,
    title: 'Community',
    description:
      'I’m actively helping my dev community to get better through events and conferences at GDG Casablanca.',
  },
  {
    icon: contactIcon,
    title: 'Contact',
    description:
      'If you want to help, or know someone that can support the work we do in our community, drop me a line: omarhoumz[at]gmail.com',
  },
]

function About() {
  return (
    <>
      <PageSeo title='About' url={canonical.concat('/about/')} />

      <Layout mainClassName='py-14 space-y-12'>
        <section className='block xl:w-full max-w-5xl mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <h1 className='text-3xl font-bold'>About me</h1>
            <div className='grid gap-8 grid-cols-1 lg:grid-cols-2'>
              {sections.map(({ icon, title, description }, index) => {
                return (
                  <div
                    key={index.toString()}
                    className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'
                  >
                    <div className='flex-shrink-0 grid place-items-center p-2.5 w-12 h-12 rounded-full text-brand-500 bg-brand-50 '>
                      {icon}
                    </div>
                    <div className='data'>
                      <h3 className='text-2xl text-blueGray-800 font-bold mb-2'>
                        {title}
                      </h3>
                      <p className='text-xl text-blueGray-500 max-w-xl lg:max-w-md'>
                        {description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About
