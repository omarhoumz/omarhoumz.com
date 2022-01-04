import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './about-section.module.css'

const AboutSection = memo(function AboutSection({
  description,
  icon,
  title,
  id,
}) {
  return (
    <div
      className={[
        'relative flex flex-row space-x-2 sm:space-x-4',
        styles.section,
      ].join(' ')}
      id={id}
    >
      <div className='relative flex-shrink-0 grid place-items-center p-1.5 sm:p-2.5 w-11 h-11 sm:w-14 sm:h-14 border-4 border-white rounded-full text-brand-500 bg-brand-50'>
        {icon}
      </div>
      <div className='pt-1.5 sm:pt-3'>
        <h3 className='mb-2 text-2xl text-blueGray-800 font-bold capitalize'>
          {title}
        </h3>
        <div className='text-xl text-blueGray-500 max-w-xl prose'>
          {description}
        </div>
      </div>
    </div>
  )
})

AboutSection.propTypes = {
  description: PropTypes.node,
  icon: PropTypes.node,
  title: PropTypes.string,
}

export default AboutSection
