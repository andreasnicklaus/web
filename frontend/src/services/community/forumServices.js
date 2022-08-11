import axios from "axios";
import {handleBackendError} from "@/services/errorHandling";

const API_URL = '/api/community/forum'

class ForumService {
    createPost(title, text) {
        return axios.post(
            API_URL,
            {title, text},
            {
                withCredentials: true
            }
        ).then(response => {
            return response.data
        }).catch(error => handleBackendError(error))
    }

    getPosts() {
        return axios.get(
            API_URL,
            {
                withCredentials: true
            }
        ).then( (response) => {
            return response.data.posts
        }).catch(error => handleBackendError(error))
    }

    deletePost(post_id) {
        return axios.post(
            API_URL + "/delete",
            {post_id},
            {
                withCredentials: true
            }
        ).then( response => {
            return response.data.posts
        }).catch(error => handleBackendError(error))
    }
}

export default new ForumService();