import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/slice';
import axios from 'axios';
import styles from './LogoutButton.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post('https://project-back-codewave1-rqmw.onrender.com/users/logout');
      dispatch(logout());
      // redirect to welcome page
      window.location.href = '/welcome';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <button onClick={handleLogout} className={styles.logoutButton}>
      Logout
    </button>
  );
};

export default LogoutButton;
