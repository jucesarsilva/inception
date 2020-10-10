import React from 'react'
import PropTypes from 'prop-types'

import { Requester } from '../../utils'

import { Button } from '../../components'
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

    this.setState({ fetching: true })
    this.requester.getRepositorieURL(this.props.languageUrl)
    .then(response => {
      this.setState({ fetching: false, loaded: true, languages: Object.keys(response) })
    })
    .catch(() => {
      this.setState({ fetching: false, error: true })
    })
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
    return (
      <div className={`row m-t-small ${styles.cardFooter}`}>
        {this.renderLanguages()}
        <div>
          <Button label='Ver repositório' url={this.props.url} action />
        </div>
      </div>
    )
  }
}

export default CardFooter
