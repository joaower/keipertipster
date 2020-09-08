import axios from 'axios'

const API_URL = 'http://localhost:1337'

class AuthRequest {
    login(body) {
        return axios.post(`${API_URL}/auth/local`,body)
    }
}
export default new AuthRequest();
