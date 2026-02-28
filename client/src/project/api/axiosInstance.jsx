import axios from 'axios';
const API_URL = window.location.href.includes("faustova") ? "http://localhost:3000/api" : "http://localhost:3000/api"
const axiosInstance = axios.create({
    baseURL:  API_URL,
    timeout: 5000, 
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
