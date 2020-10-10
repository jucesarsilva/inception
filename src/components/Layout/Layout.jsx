import React from 'react'
import PropTypes from 'prop-types'
import { isMobile } from 'react-device-detect'

import IconButton from '@material-ui/core/IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
  const padding = isMobile ? 'p-lr-small' : 'p-lr-large'
  const toToPosition = isMobile ? styles.toTopPositionMob : styles.toTopPositionDesk
  const layoutRef = React.createRef()

  const scrollSmooth = ref =>  {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <section ref={layoutRef} className={`${styles.layout} ${padding}`}>
      {children}
      <IconButton
        edge='start'
        className={`${styles.toTop} ${toToPosition}`}
        color='inherit'
        aria-label='menu'
        onClick={(ev => scrollSmooth(layoutRef))}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </IconButton>
    </section>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
