import axios from 'axios'

//const API_URL = 'http://localhost:1337'
const API_URL = 'http://35.180.205.123:1337'
// const API_URL = process.env.REACT_APP_API_URL;
class AuthRequest {
  login(body) {
    return axios.post(`${API_URL}/auth/local`, body)
  }
  register(body) {
    debugger
    return axios.post(`${API_URL}/auth/local/register`, body)
  }
}
export default new AuthRequest()
