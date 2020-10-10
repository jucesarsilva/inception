import 'core-js/stable'
import 'react-app-polyfill/ie9'

import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.scss'

ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById('root'),
)
