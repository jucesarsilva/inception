import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './InputSearch.module.scss'

class InputSearch extends React.Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  }

  state = {
    value: '',
  }

  handleChange = event => {
    event.stopPropagation()

    this.setState({ value: event.target.value.replace(/[&/\\#,+()$~%.'":*?<>{}]/g,'') })
  }

  handleKeyDown = event => {
    event.stopPropagation()

    if (event.key === 'Enter') {
      this.handlerSearch()
    }
  }

  handlerClick = event => {
    event.stopPropagation()

    this.handlerSearch()
  }

  handlerSearch = () => {
    const { value } = this.state
    const { onSearch } = this.props

    if (onSearch) {
      onSearch(value)
    }
  }

  handlerClean = () => {
    this.setState({ value: '' }, () => {
      this.handlerSearch()
    })
  }

  render() {
    const { value } = this.state
    return (
      <label className={styles.inputSearch} htmlFor='inputSearch'>
        <input
          value={value}
          autoComplete='false'
          className='p-l-normal'
          placeholder='Pesquisar'
          name='inputSearch'
          type='text'
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div className={styles.iconSearch} >
          <FontAwesomeIcon className='m-r-small' icon={faTimesCircle} onClick={this.handlerClean}/>
          <FontAwesomeIcon icon={faSearch} onClick={this.handlerClick} />
        </div>
      </label>
    )
  }
}

export default InputSearch
