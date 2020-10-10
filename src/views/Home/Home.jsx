import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Requester } from '../../utils'
import { Card, CardHeader, CardFooter, FilterOrder, Loading, Paginator, Toast } from '../../components'

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
    sort: 'updated',
    order: 'desc',
    orders: [
      {
        label: 'Atualizados',
        sort: 'updated',
        order: 'desc',
      },
      {
        label: 'Atualizados',
        sort: 'updated',
        order: 'asc',
      },
      {
        label: 'Estrelas',
        sort: 'stars',
        order: 'desc',
      },
      {
        label: 'Estrelas',
        sort: 'stars',
        order: 'asc',
      },
      {
        label: 'Seguidores',
        sort: 'followers',
        order: 'desc',
      },
      {
        label: 'Seguidores',
        sort: 'followers',
        order: 'asc',
      },
    ],
  }

  requester = new Requester()

  componentDidMount() {
    this.setState({ query: this.props.query }, () => {
      this.getRepositories()
    })
  }

  getRepositories = () => {
    const { query, page, perPage, sort, order } = this.state

    this.setState({ fetching: true })

    this.requester
      .getRepositories(query, page, perPage, sort, order)
      .then(response => {
        const repositories = response.items
        const total = response.total_count
        this.setState({ repositories, total }, () => {
          const pageCount = parseInt(total/perPage)
          this.setState({ fetching: false, pageCount: pageCount })
        })
      })
      .catch(error => {
        const errorMessage = error && error.data ? error.data.message: 'Vefifique sua conexão!'
        this.setState({ fetching: false, error: true, errorMessage  })
      })
  }

  handleOrder = ({ sort, order }) => {
    this.setState({ sort, order }, () => {
      this.getRepositories()
    })
  }

  handlePageChange = page => {
    this.setState({ page }, () => {
      this.getRepositories()
    })
  }

  handleTostClose = () => {
    this.setState({ error: false })
  }

  renderRepositories = repositories => {
    if (!repositories || !repositories.length) {
      return (
        <div className={`m-tb-large ${styles.notResult}`}>
          Nenhum resultado.
        </div>
      )
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
            updatedDate={repository.updated_at}
          />
          <hr />
          {repository.description && repository.description.length ? (
            <div
              className={`${styles.description} m-t-xlarge`}
              dangerouslySetInnerHTML={{ __html: repository.description }}
            ></div>
          ) : (
            'Nenhuma descrição.'
          )}
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
    const { fetching, repositories, orders, page, pageCount, error, errorMessage, total } = this.state

    return (
      <Fragment>
        <div className={`column p-b-normal ${styles.home}`}>
          <h2>Repositórios</h2>
          <div className={`row m-b-normal ${styles.filters}`}>
            <FilterOrder onOrder={this.handleOrder} orders={orders} order={orders[0]} />
            <div className='m-l-xsmall'>
              <span className='label bold m-r-xsmall'>Total:</span>
              <span className='label'>{total}</span>
            </div>
          </div>
          <hr/>
          {fetching ? <Loading /> : this.renderRepositories(repositories)}
          {!fetching && repositories.length ? (
            <div className={`row p-tb-normal ${styles.paginatorContent}`}>
              <Paginator pageCount={pageCount} currentPage={page} onChange={this.handlePageChange} />
            </div>
          ) : null}
          {error ? <Toast severity='error' message={errorMessage} onClose={this.handleTostClose}/> : null }
        </div>
      </Fragment>
    )
  }
}

export default Home
