import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styles from './Stargazers.module.scss'

const Stargazers = ({ count }) => {
  return (
    <div className={`row ${styles.stargazers}`}>
      <div className={styles.star}>
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className={`m-l-xsmall ${styles.count}`}>{count}</div>
    </div>
  )
}

Stargazers.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Stargazers
