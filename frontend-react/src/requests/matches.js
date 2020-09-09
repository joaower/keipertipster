import axios from 'axios'

const API_URL = process.env.API_URL | 'http://localhost:1337'

class MatchRequest {
  getMatches() {
    debugger
    return axios.get(`${API_URL}/free-bets`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
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
