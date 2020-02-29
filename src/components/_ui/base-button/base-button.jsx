import cx from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'

import styles from './base-button.module.css'

const BaseButton = ({ children, type, classes, onClick, ...otherProps }) => {
  const btnProps = {
    ...otherProps,
    type,
  }

  return (
    <button
      type='button'
      className={cx(styles.base, classes)}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...btnProps}
    >
      {children}
    </button>
  )
}

BaseButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classes: PropTypes.string,
}

BaseButton.defaultProps = {
  children: null,
  onClick: null,
  type: 'button',
  classes: null,
}

export default BaseButton
