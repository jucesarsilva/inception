import React from 'react'
import PropTypes from 'prop-types'
// import { isMobile } from 'react-device-detect'

import styles from './Layout.module.scss'

const Layout = ({ children }) => (
  <section className={`${styles.layout} p-lr-large`}>
    {children}
  </section>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
