import axios from "axios";
import {handleBackendError} from "@/services/errorHandling"

const API_URL = '/api/auth'

function storeUserName(userName) {
    localStorage.setItem('username', userName)
}

function removeUserData() {
    localStorage.removeItem('username')
}

class AuthenticationService {
    checkLoginStatus() {
        return axios.get(API_URL + '/logged_in', {withCredentials: true})
            .then(
                response => {
                    if (!response.data.logged_in) {
                        removeUserData()
                    } else {
                        //  TODO: store userdata
                    }
                return response
            }).catch(handleBackendError)
    }

    login(username, password) {
        return axios.post(
            API_URL + '/login',
            {username, password},
            {withCredentials: true}
        ).then(
            response => {
                if (response.data.success) {
                    storeUserName(response.data.username)
                }
                return response.data
        }).catch(handleBackendError)
    }

    logout() {
        axios.get(API_URL + '/logout', {withCredentials: true})
            .then(removeUserData)
            .catch(handleBackendError)
    }

    signup(username, password) {
        return axios.post(API_URL + '/signup', {username, password})
            .then(response => {
                return response.data
            }).catch(handleBackendError)
    }

}

export default new AuthenticationService();