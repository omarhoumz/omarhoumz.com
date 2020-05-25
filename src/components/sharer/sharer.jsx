import React, { memo } from 'react'

import Section from '../_ui/section/section'
import styles from './sharer.module.css'

const Sharer = memo(function Sharer() {
  return (
    <Section
      classes={{ inner: 'container-md', children: styles.sharer }}
      ChildrenAs={React.Fragment}
    >
      <p className={styles.label}>Share post</p>
      <button className={styles.shareBtn} type='button'>
        Twitter
      </button>
      <button className={styles.shareBtn} type='button'>
        Copy Link
      </button>
    </Section>
  )
})

export default Sharer
