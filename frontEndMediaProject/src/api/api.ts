import axios from 'axios';

const API_URL = 'http://localhost:4000'; // your backend port

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to every request if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (email: string, password: string) => {
  return api.post('/auth/login', { email, password });
};

export const register = (username: string, email: string, password: string) => {
  return api.post('/auth/register', { username, email, password });
};

export default api;