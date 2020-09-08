import axios from 'axios'

const API_URL = 'http://localhost:8000'
// process.env.REACT_APP_NODE_BACKEND_URL

class BasketballRequest {
    getToday() {
        return axios.get(`${API_URL}/basketball/today`, {
            headers: {
                'Content-Type': 'application/json',
                // Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
            },
        })
    }
}
export default new BasketballRequest()
