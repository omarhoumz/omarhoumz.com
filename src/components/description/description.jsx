import React from 'react'
import PropTypes from 'prop-types'

import Link from '../link/link'
import eduIcon from '../../assets/about-icons/education.svg'
import jobIcon from '../../assets/about-icons/job.svg'
import communityIcon from '../../assets/about-icons/community.svg'
import contactIcon from '../../assets/about-icons/contact.svg'
import './description.css'

const sections = [
  {
    icon: jobIcon,
    title: 'Work',
    altText: "Omar Houmz's job",
    desc: (
      <>
        I&apos;m Omar Houmz, I&apos;m a software engineer based in
        Casablanca, Morocco. I work at
        {' '}
        <Link href="https://www.avito.ma/" className="inline">
          Avito.ma
        </Link>
        {' '}
        as a front-end engineer.
      </>
    ),
  },
  {
    icon: eduIcon,
    title: 'Education',
    altText: "Omar Houmz's Education",
    desc: (
      <>
        I studied a lot of disciplines in computer and data sciences. But I always
        liked front-end development and I still do.
      </>
    ),
  },
  {
    icon: communityIcon,
    title: 'Community',
    altText: 'Omar Houmz in the dev community',
    desc: (
      <>
        I&apos;m actively helping my dev community to get better through events
        and conferences at
        {' '}
        <Link href="https://www.meetup.com/GDGCasablanca/" className="inline">
          GDG Casablanca
        </Link>
        {' '}
        .
      </>
    ),
  },
  {
    icon: contactIcon,
    title: 'Contact',
    altText: 'Contact Omar Houmz',
    desc: (
      <>
        If you want to help, or know someone that can support the work we do in
        our community, drop me a line:
        {' '}
        <Link href="mailto:omarhoumz@gmail.com">omarhoumz@gmail.com</Link>
      </>
    ),
  },
]

const Description = () => (
  <div className="short-about">
    {sections.map((section, index) => <Section {...section} key={index.toString()} />)}
  </div>
)

const Section = ({ icon, title, altText, desc }) => (
  <React.Fragment>
    <img src={icon} alt={altText} />
    <div>
      <h3>{title}</h3>
      <p className="p">{desc}</p>
    </div>
  </React.Fragment>
)

Section.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Description
