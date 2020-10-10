import React from 'react'
import PropTypes from 'prop-types'

import { Requester } from '../../utils'

import { Button, Toast } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './CardFooter.module.scss'
import { Object } from 'core-js'

class CardFooter extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    languageUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }

  state = {
    languages: [],
    loaded: false,
  }

  requester = new Requester()

  componentDidMount() {
    const { language } = this.props
    this.setState({ languages: [language]})
  }

  handleClick = (ev) => {
    ev.stopPropagation()

    if(this.state.loaded || this.state.fetching) {
      return
    }

    this.setState({ fetching: true, error: false })
    this.requester.getRepositorieURL(this.props.languageUrl)
    .then(response => {
      this.setState({ fetching: false, loaded: true, languages: Object.keys(response) })
    })
    .catch(error => {
      const errorMessage = error && error.data ? error.data.message: 'Vefifique sua conexão!'
      this.setState({ fetching: false, error: true, errorMessage })
    })
  }

  handleTostClose = () => {
    this.setState({ error: false })
  }

  renderLanguages = () => {
    const { languages, loaded } = this.state

    if(!languages.length) {
      return 'Nenhuma linguagem'
    }

    return (
      <div className={`row ${styles.languages}`}>
        <div className={styles.language}>{languages.join(', ')}</div>
        {loaded ? null : (
          <div className={`m-l-small ${styles.plus}`} onClick={(ev) => {
            this.handleClick(ev)
          }}>
            <FontAwesomeIcon icon={faPlusCircle} />
          </div>
        )}
      </div>
    )
  }

  render() {
    const { error, errorMessage } = this.state

    return (
      <div>
        <div className={`row m-t-small ${styles.cardFooter}`}>
          {this.renderLanguages()}
          <div>
            <Button label='Ver repositório' url={this.props.url} action />
          </div>
        </div>
        {error ? <Toast severity='error' message={errorMessage} onClose={this.handleTostClose}/> : null }
      </div>
    )
  }
}

export default CardFooter
