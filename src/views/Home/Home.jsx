import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Requester } from '../../utils'
import { Card, CardHeader, CardFooter } from '../../components'

import styles from './Home.module.scss'

class Home extends React.Component {
  static propTypes = {
    query: PropTypes.any,
  }

  state = {
    fetching: true,
    repositories: [],
    total: 0,
    page: 1,
    perPage: 30,
    sort: '',
    order: 'desc',
  }

  requester = new Requester()

  componentDidMount() {
    this.requester.getApis()
    this.setState({ query: this.props.query }, () => {
      this.getRepositories()
    })
  }

  getRepositories = () => {
    const { query, page, perPage, sort, order } = this.state

    this.requester
      .getRepositories(query, page, perPage, sort, order)
      .then(response => {
        console.log(response)

        const repositories = response.items
        const total = response.total_count

        this.setState({ repositories, total }, () => {
          this.setState({ fetching: false })
        })
      })
      .catch((status, data) => {
        this.setState({ fetching: false, error: true })
      })
  }

  renderRepositories = repositories => {
    if (!repositories || !repositories.length) {
      return 'Nenhum resultado'
    }

    return repositories.map((repository, index) => (
      <Card key={index}>
        <div className={`column ${styles.repositories}`}>
          <CardHeader
            name={repository.full_name}
            license={repository.license}
            url={repository.html_url}
            count={repository.stargazers_count}
            avatarUrl={repository.owner.avatar_url}
            userUrl={repository.owner.html_url}
          />
          <hr />
          <div
            className='m-t-xlarge'
            dangerouslySetInnerHTML={{ __html: repository.description }}
          ></div>
          <hr className='m-t-large' />
          <CardFooter
            language={repository.language}
            languageUrl={repository.languages_url}
            url={repository.html_url}
          />
        </div>
      </Card>
    ))
  }

  render() {
    const { fetching, repositories } = this.state

    if (fetching) {
      return 'Carregando'
    }

    return (
      <Fragment>
        <div className={`column ${styles.home}`}>{this.renderRepositories(repositories)}</div>
      </Fragment>
    )
  }
}

export default Home
