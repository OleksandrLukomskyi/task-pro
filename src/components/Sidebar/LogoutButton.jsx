import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from '../.././redux/auth/operations';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logOut()).unwrap();
      // Перенаправить пользователя на WelcomePage
      history.push('/welcome');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="logout-button">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default LogoutButton;
