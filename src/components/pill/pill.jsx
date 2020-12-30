import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Pill = memo(function Pill({ label, className }) {
  return (
    <span
      className={[
        'text-xs text-gray-500 font-medium tracking-wide py-1 px-3 rounded-full uppercase bg-gray-100',
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
