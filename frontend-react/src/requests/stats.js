import axios from 'axios'

const API_URL = 'http://localhost:1337'
const GREEN_FILTER = '?green_eq=true'

class StatRequest {
    createStat(body) {
        return axios.post(`${API_URL}/stats`, body, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
            },
        })
    }

    getStats() {
        return axios.get(`${API_URL}/stats`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
            },
        })
    }

    countStats() {
        return axios.get(`${API_URL}/stats/count`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
            },
        })
    }

    countGreen() {
        return axios.get(`${API_URL}/stats/count${GREEN_FILTER}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: ` Bearer ${window.localStorage.getItem('jwt')}`,
            },
        })
    }
}
export default new StatRequest()
