import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api'

export const getArticles = () => {
  const uri = '/articles'
  return axios.get(uri)
}
