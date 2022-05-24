import PageSeo from '@/components/page-seo/page-seo'

import Layout from 'src/layout/layout'
import { canonical } from 'next-seo.config'
import AboutSection from '@/components/about-section/about-section'
import Link from '@/components/link/link'
import PageTitle from '@/components/page-title'

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
      d='M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11'
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
    id: 'work',
    description: (
      <>
        <p>I’m a front-end engineer based in Casablanca, Morocco.</p>
        <p>
          I work with React, Next Js for SSR, Redux for State management,
          styled-components for CSS and a UI library, Storybook, jest/cypress
          for unit and e2e testing, and Graphql (backend api and client using
          apollo).
        </p>
      </>
    ),
  },
  {
    icon: communityIcon,
    title: 'volunteering',
    id: 'volunteering',
    description: (
      <>
        <h4 className='mt-4 mb-1 text-lg'>
          <span className='text-blueGray-600 font-bold'>GDG Casablanca</span>
          <span className='mx-2 text-base'>Apr 2017 - present</span>
        </h4>
        <p>
          I’m actively helping my developer community to get better through
          events and conferences at{' '}
          <Link href='https://gdgcasablanca.com/' color='current'>
            GDG Casablanca
          </Link>
          .
        </p>
        <p className='mt-1.5'>
          Through our activities, I am learning how to build a community,
          collaborating with five other co-organizers, and managing 20 plus
          volunteers.
        </p>
        <p className='mt-1.5'>
          Since our first event, we have organized more than 30 meetups,
          workshops, and conferences.
        </p>

        <h4 className='mt-4 mb-1 text-lg'>
          <span className='text-blueGray-600 font-bold'>AIESEC</span>
        </h4>
        <p>
          AIESEC is a youth-run organization. And provides real-world
          experiences to develop future leaders. I volunteered in teams locally
          (Casablanca & Morocco) and in the international in-house dev team.
        </p>

        <h5 className='mt-2.5 mb-1 text-base font-medium'>
          May 2019 - Feb 2020
        </h5>
        <p>
          Contributing to the New Mobile app for Operations at AIESEC
          International as a front-end engineer.
        </p>

        <h5 className='mt-2.5 mb-1 text-base font-medium'>
          Oct 2017 - Aug 2019
        </h5>
        <ul className='list-disc ml-5'>
          <li>Website team & Marketing Growth Hackers (AIESEC Morocco)</li>
          <li>
            Team leader,{' '}
            <abbr title='Outgoing Global Entrpreneurship & Talent'>OGET</abbr>{' '}
            team (4 team members)
          </li>
          <li>Member, the marketing departement</li>
        </ul>
      </>
    ),
  },
  {
    icon: educationIcon,
    title: 'education',
    id: 'education',
    description: (
      <>
        <p>
          I have a bachelor&apos;s degree in computer science. I also studied
          two year&apos;s as Masters student in Big Data & Cloud Computing at
          Hassan II University of Casablanca.
        </p>
        <p>
          I rely on self learning a lot, and the local developer community, to
          learn and explore new things.
        </p>
      </>
    ),
  },
  {
    icon: contactIcon,
    title: 'contact',
    id: 'contact',
    description: (
      <p>
        Check the{' '}
        <Link href='/contact' color='current'>
          /contact
        </Link>{' '}
        page, or drop me a line:{' '}
        <Link href='mailto:omarhoumz@gmail.com' external color='current'>
          omarhoumz[at]gmail.com
        </Link>
      </p>
    ),
  },
]

function About() {
  return (
    <>
      <PageSeo title='About' url={canonical.concat('/about/')} />

      <Layout mainClassName='py-32 space-y-12'>
        <section className='block xl:w-full xl:max-w-2xl xl:mx-auto'>
          <div className='flex flex-col items-start space-y-6 px-5 xl:px-0'>
            <PageTitle>About me</PageTitle>
            <nav
              className='sticky z-1 top-2 bg-white bg-opacity-80 -mx-1'
              style={{ marginTop: 0 }}
            >
              {sections.map(({ id, title }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  color='dark'
                  className='inline-block capitalize mx-1'
                >
                  {title}
                </Link>
              ))}
            </nav>
            <div className='flex flex-col gap-2 grid-cols-1 lg:grid-cols-2'>
              {sections.map((section) => (
                <AboutSection key={section.id} {...section} />
              ))}
            </div>
          </div>
          <div className='h-44'></div>
        </section>
      </Layout>
    </>
  )
}

export default About
