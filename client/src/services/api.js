import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Match your Node.js server port
});

// Add JWT to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (credentials) => API.post('/auth/login', credentials);
export const createExam = (examData) => API.post('/exams', examData);