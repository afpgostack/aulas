import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.11.12.18:3333',
});

export default api;