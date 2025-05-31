import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/community', // Adjust if deployed or port changed
});

export default api;
