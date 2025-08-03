import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://manurajjuphoto1.pythonanywhere.com/api/v1', // replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add token to every request if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
