import React, { memo } from 'react'

import styles from './code.module.css'

const Code = memo(function Code(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <code className={styles.code} {...props} />
})

export default Code
