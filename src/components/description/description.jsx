import React from 'react'

import { Link } from '../link/link'
import eduIcon from '../../assets/about-icons/education.svg'
import jobIcon from '../../assets/about-icons/job.svg'
import communityIcon from '../../assets/about-icons/community.svg'
import contactIcon from '../../assets/about-icons/contact.svg'
import './description.css'

export const Description = () => {
  return (
    <div className="about">
      <img src={jobIcon} alt="Omar Houmz's job" />
      <p className="p">
        I'm <strong>Omar Houmz</strong>, I'm a software engineer based in
        Casablanca, Morocco. I work at{' '}
        <Link href="https://www.avito.ma/" className="dark inline">
          Avito.ma
        </Link>{' '}
        as a <strong>front-end engineer</strong>.
      </p>

      <img src={eduIcon} alt="Omar Houmz's Education" />
      <p className="p">
        I studied a lot of disciplines in computer and data sciences. But I
        always liked <strong>front-end development</strong> and I still do.
      </p>

      <img src={communityIcon} alt="Omar Houmz in the dev community" />
      <p className="p">
        I'm actively helping my <strong>dev community</strong> to get better
        through events and conferences at{' '}
        <Link
          href="https://www.meetup.com/GDGCasablanca/"
          className="dark inline"
        >
          GDG Casablanca
        </Link>
        .
      </p>

      <img src={contactIcon} alt="Contact Omar Houmz" />
      <p className="p">
        If you want to help, or know someone that can support the work we do in
        our community, <strong>drop me a line</strong>:{' '}
        <Link href="mailto:omarhoumz@gmail.com">omarhoumz@gmail.com</Link>
      </p>
    </div>
  )
}
