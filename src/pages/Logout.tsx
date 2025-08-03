import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../utils/auth'; // Assuming you have a utility to clear auth data

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear all relevant data from localStorage
    logout();

    // Optionally show a message or delay, then redirect
    navigate('/login', { replace: true });
  }, [navigate]);

  return null; // or <p>Logging out...</p> if you want a loading message
};

export default Logout;
