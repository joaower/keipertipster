import axios from 'axios'

const API_URL = 'http://localhost:1337'

class Utility {
    getSportValue(sportValue) {
        switch (sportValue) {
            case '1':
                return 'Tenis'
            case '2':
                return 'Basketball'
            case '3':
                return 'Soccer'
            default:
                return 'defaul'
        }
    }
}
export default new Utility();
