import React, { Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Route, Router, Switch } from 'react-router-dom'

import { Home } from 'views'
import { Header, Layout } from 'components'

const customHistory = createBrowserHistory()

class App extends React.Component {
  state = {
    query: undefined
  }

  handleSearch = query => {
    this.setState({ query })
  }

  render() {
    const { query } = this.state

    return (
      <Fragment>
        <Header onSearch={this.handleSearch} />
        <Layout>
          <Router history={customHistory}>
            <Switch>
              <Route path='/' query={query} component={() => <Home query={query} />} />
            </Switch>
          </Router>
        </Layout>
      </Fragment>
    )
  }
}

export default App
