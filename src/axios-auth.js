import axios from "axios";

const instance = axios.create({
    baseURL:
        'https://firestore.googleapis.com/v1/projects/vuejs-http-41e84/databases/(default)/documents'
});

export default instance;

