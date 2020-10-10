import React from 'react'
import PropTypes from 'prop-types'

import styles from './Card.module.scss'

const Card = ({ children }) => {
  return (
    <div className={`${styles.card} p-lr-xnormal p-tb-normal m-tb-normal`}>
      { children }
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
