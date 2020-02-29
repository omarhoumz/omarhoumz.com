import React from 'react'
import PropTypes from 'prop-types'

import styles from './hamburger.module.css'
import BaseButton from '../_ui/base-button/base-button'

const Hamburger = ({ onClick }) => (
  <BaseButton
    onClick={onClick}
    classes={styles.ham}
    aria-label='Toggle the navigation links'
  >
    <div className={styles.bar} />
    <div className={styles.bar} />
    <div className={styles.bar} />
  </BaseButton>
)

Hamburger.propTypes = {
  onClick: PropTypes.func,
}

Hamburger.defaultProps = {
  onClick: null,
}

export default Hamburger
