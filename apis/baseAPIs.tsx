import axios from 'axios'
import join from 'url-join'

// const productionURL = 'https://corpjurist.com/api/v1/';
// const devURL = 'https://dev.corpjurist.com/api/v1/'
// const devURLManageUser = 'https://dev.corpjurist.com/api/'
const devURLManageUser = 'https://apidocsbackend.herokuapp.com/api/'
const devHeroku = 'https://apidocsbackend.herokuapp.com/api/v1/'
const service = axios.create({
  baseURL: devHeroku,
  headers: { 'content-type': 'application/json' }
})

export default service

export const serviceResetPassword = axios.create({
  baseURL: devURLManageUser,
  headers: { 'content-type': 'application/json' }
})

export const serviceVerify = axios.create({
  baseURL: devURLManageUser,
  headers: { 'content-type': 'application/json' }
})

axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('access-token')
  if (token != null) {
    config.headers = {
      'Content-Type': 'application/json',
      Authorization: 'Token ' + token
    }
  }
  config.url = join(devHeroku, config.url)
  return config
})

export const serviceSetToken = axios
