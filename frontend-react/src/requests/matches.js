import axios from 'axios'

//  const API_URL =  'http://localhost:1337'
// const API_URL = 'http://52.47.201.94:1337'
 const API_URL = process.env.REACT_APP_API_URL;
class MatchRequest {
  getMatches() {
    return axios.get(`${API_URL}/free-bets`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
      },
    })
  }

  getMatchesUnauthenticated() {
    return axios.get(`${API_URL}/free-bets`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  createMatch(body) {
    return axios.post(`${API_URL}/free-bets`, body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
      },
    })
  }

  getMatchById(id) {
    return axios.get(`${API_URL}/free-bets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
      },
    })
  }

  getMatchByIdUnauthenticated(id) {
    return axios.get(`${API_URL}/free-bets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  deleteMatchById(id) {
    return axios.delete(`${API_URL}/free-bets/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
      },
    })
  }
}
export default new MatchRequest()
