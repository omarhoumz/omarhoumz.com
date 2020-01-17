import React from 'react'
import PropTypes from 'prop-types'

import styles from './about-page.module.css'

import Work, { frontmatter as workMatter } from './sections/work.mdx'
import Education, { frontmatter as eduMatter } from './sections/education.mdx'
import Community, {
  frontmatter as communityMatter,
} from './sections/community.mdx'
import Contact, { frontmatter as contactMatter } from './sections/contact.mdx'

const sections = [
  {
    ...workMatter,
    desc: <Work />,
  },
  {
    ...eduMatter,
    desc: <Education />,
  },
  {
    ...communityMatter,
    desc: <Community />,
  },
  {
    ...contactMatter,
    desc: <Contact />,
  },
]

const AboutPage = () => (
  <div className={styles.shortAbout}>
    {sections.map(({ icon, title, altText, desc }, index) => (
      <Section
        icon={icon}
        title={title}
        altText={altText}
        desc={desc}
        key={index.toString()}
      />
    ))}
  </div>
)

const Section = ({ icon, title, altText, desc }) => (
  <>
    <img src={icon} alt={altText} />
    <div>
      <h3>{title}</h3>
      {desc}
    </div>
  </>
)

Section.propTypes = {
  icon: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default AboutPage
