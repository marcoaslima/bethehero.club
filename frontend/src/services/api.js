import axios from 'axios';

let envDev = true;

const baseURL = envDev ? 'http://localhost:3333' : 'https://bethehero-nodejsapi.herokuapp.com';

const api = axios.create({
    baseURL
});

export default api;