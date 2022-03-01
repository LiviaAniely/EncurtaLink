import axios from 'axios';

export const key = 'ce91b13ab307223f1fcac18feefff39a90a6786e';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;