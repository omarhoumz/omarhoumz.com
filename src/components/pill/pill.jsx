import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Pill = memo(function Pill({ label, className }) {
  return (
    <span
      className={[
        'text-xs text-gray-500 font-bold border border-current py-0.5 px-2 rounded-full uppercase',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label}
    </span>
  )
})

Pill.propTypes = {
  label: PropTypes.string,
}

export default Pill
