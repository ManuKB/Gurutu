import axiosInstance from './axiosInstance';
const appid = 'isirirajinimohan'
// Get user profile
export const getUserProfile = () => {
  return axiosInstance.get('/users/profile');
};

// Login
export const loginUser = (email: string, password: string) => {
  return axiosInstance.post('/sign_in', { email, password });
};

// Logout (optional API-side if needed)
export const logoutUser = () => {
  return axiosInstance.post('/auth/logout');
};

export const  addCredentials = (credentials:any) => {
  return axiosInstance.post(`/pwd/${appid}/`, credentials);
}

export const getCredentials = () => {
  return axiosInstance.get(`/pwd/${appid}/`); 
}

export const getConstants = () => {
  return axiosInstance.get(`/constants/${appid}/`);
}
