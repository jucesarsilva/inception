import axios from 'axios'

class Requester {
  constructor() {
    this.baseUrl = process.env.REACT_APP_GITHUB_API
    this.headers = {
      'Accept': process.env.REACT_APP_GITHUB_API_VERSION,
    }
  }

  handleSuccess = (response, resolve, transform) => {
    if (transform) {
      response = transform(response)
    }
    resolve(response)
  }

  handleCatch = (error, reject) => {
    if(error.isAxiosError) {
      reject('Verifique sua conexão.')
    } else {
      reject({ status: error.response.status, data: error.response.data })
    }
  }

  getApis() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.baseUrl}`, {
        'method': 'GET',
        'headers': this.headers,
      })
      .then(res => this.handleSuccess(res, resolve, response => response.data))
      .catch(error => this.handleCatch(error, reject))
    })
  }

  getRepositories(query, page = 1, perPage = 30, sort, order) {
    const languages = 'language:javascript+language:html+language:css'
    const q = query ? `${query}+`: ''

    return new Promise((resolve, reject) => {
      axios.get(`${this.baseUrl}/search/repositories?q=${q}${languages}&page=${page}&per_page=${perPage}&sort=${sort}&order=${order}`, {
        'method': 'GET',
        'headers': this.headers,
      })
      .then(res => this.handleSuccess(res, resolve, response => response.data))
      .catch(error => this.handleCatch(error, reject))
    })
  }

  getRepositorieURL(url) {
    return new Promise((resolve, reject) => {
      axios.get(`${url}`, {
        'method': 'GET',
        'headers': this.headers,
      })
      .then(res => this.handleSuccess(res, resolve, response => response.data))
      .catch(error => this.handleCatch(error, reject))
    })
  }
}

export default Requester
