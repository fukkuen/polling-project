import Axios from 'axios'

class Http {

  http = Axios.create({
    baseURL: '/api',
    timeout: 10000
  })

  async get (url) {
    try {
      const res = await this.http.get(url)
      return res.data
    } catch (e) {
      return this.handleException(e)
    }
  }

  async post (url, data) {
    try {
      const res = await this.http.post(url, data)
      return res.data
    } catch (e) {
      return this.handleException(e)
    }
  }

  handleException(res) {
    return Promise.reject(res)
  }
}

export default new Http()
