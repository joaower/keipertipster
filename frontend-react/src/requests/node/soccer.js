import axios from 'axios'

const API_URL = 'http://localhost:8000'

class SoccerRequest {
    getToday() {
        return axios.get(`${API_URL}/soccer/today`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ` Bearer ${window.localStorage.getItem('jwt')}`,
            },
        })
    }
}
export default new SoccerRequest()
