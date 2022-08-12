import axios from 'axios';
import {handleBackendError} from "@/services/errorHandling";

const API_URL = '/api/functional'

class CurrencyServices {
    getCurrencyOptions() {
        return axios.get(
            API_URL + '/currency_options'
        ).then(response => {
            return response.data
        }).catch(error => handleBackendError(error))
    }
}

export default new CurrencyServices();