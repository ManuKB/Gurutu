import { loginUser } from "./api";

export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('token');
};

export const login = (token: string): void => {
    localStorage.setItem('token', token);
};

export const logout = (): void => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
};

export const authenticateUser = async (username: string, password: string): Promise<boolean> => {
    // Simulate an API call for authentication
    try {
        const response = await loginUser(username, password);
        if (response.data && response.data.access_token) {
            login(response.data.access_token);
            return true;
        }
    } catch (error) {
        console.error('Authentication failed:', error);
    }
    return false;
};
