import axios from 'axios'

//const API_URL = process.env.API_URL | 'http://localhost:1337'
// const API_URL = 'http://35.180.205.123:1337'
const API_URL = process.env.REACT_APP_API_URL;
class MatchRequest {
  getMatches() {
    console.log(API_URL)
    debugger
    return axios.get(`${API_URL}/free-bets`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
      },
    })
  }

  getMatchesUnauthenticated() {
    console.log(API_URL)
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
