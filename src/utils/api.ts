import axiosInstance from './axiosInstance';

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
  return axiosInstance.post('/constants/mri', credentials);
}
