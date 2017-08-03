import axios from 'axios'
import jwtDecode from 'jwt-decode'

class AuthClient {
  constructor() {
    this.request = axios.create({
      baseURL: 'http://localhost:3001/api',
      headers: {
        common: {
          token: this.getToken()
        }
      }
    })
  }
  signup(userInfo){
    return this.request({method: 'POST', url: '/users', data: userInfo})
      .then(response => {
        return response.data.success
      })
  }

  logIn(credentials) {
    return this.request({method: 'POST', url: '/authenticate', data: credentials})
    .then(response => {
      if(response.data.success) {
        const token = response.data.token
        this.setToken(token)
        return jwtDecode(token)
      } else {
        return false
      }
    })
  }

  getCurrentUser(){
    const token = this.getToken()
    return token ? jwtDecode(token) : null
  }

  getToken(){
    //retrieve token from local storage:
    return localStorage.getItem('token')
  }

  setToken(token) {
    //save token to localStorage:
    localStorage.setItem('token', token)
    //tell axios to always include this token in headers:
    this.request.defaults.headers.common.token = token
    return token
  }

  clearToken() {
    //remove the token form localStorage;
    localStorage.removeItem('token')

    //tell axios to stop sending with the token:
    delete this.request.defaults.headers.common.token

  }
}

export default new AuthClient()
