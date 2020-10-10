import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.module.scss'

const Button = ({ url, label, action, primary, onClick }) => {
  const primaryClass = primary ? styles.primary : ''
  const actionClass = action ? styles.action : ''

  if (url) {
    return (
      <a
        className={`${styles.button} ${primaryClass} ${actionClass}`}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        onClick={ev => {
          ev.stopPropagation()
          if (onClick) onClick()
        }}
      >
        {label}
      </a>
    )
  }

  return (
    <button
      className={`${styles.button} ${primaryClass} ${actionClass}`}
      onClick={ev => {
        ev.stopPropagation()
        if (onClick) onClick()
      }}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  url: PropTypes.string,
  action: PropTypes.bool,
  primary: PropTypes.bool,
}

export default Button
