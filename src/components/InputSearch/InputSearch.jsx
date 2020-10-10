import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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

  render() {
    return (
      <label className={styles.inputSearch} htmlFor='inputSearch'>
        <input
          autoComplete='false'
          className='p-l-normal p-r-xlarge'
          placeholder='Pesquisar'
          name='inputSearch'
          type='text'
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <div className={styles.iconSearch} onClick={this.handlerClick}>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </label>
    )
  }
}

export default InputSearch
