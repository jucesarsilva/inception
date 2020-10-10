import React from 'react'
import { func } from 'prop-types'
import { isMobile } from 'react-device-detect'

import { ReactComponent as Logo } from '../../images/logo.svg'
import { InputSearch } from '../'

import styles from './Header.module.scss'

const Header = ({ onSearch }) => {
  const paddingLR = isMobile ? 'p-lr-xnormal' : 'p-lr-large'

  const handleInputSearch = query => {
    if (onSearch) {
      onSearch(query)
    }
  }

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.toolbar} ${paddingLR} p-tb-normal`}>
        <div className='row'>
          <a href='/' className={`${styles.logo} m-r-xnormal`}>
            <Logo />
          </a>
          <InputSearch onSearch={handleInputSearch} />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  onSearch: func.isRequired,
}

export default Header
