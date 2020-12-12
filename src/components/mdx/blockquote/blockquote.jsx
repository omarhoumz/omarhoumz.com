import React from 'react'

import styles from './blockquote.module.css'

const Blockquote = (props) => (
  <blockquote
    className={styles.blockquote}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
)

export default Blockquote
