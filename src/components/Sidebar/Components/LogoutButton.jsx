// import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import Btn from '../../Btn/Btn.jsx'; // Импортируем компонент Btn

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logOut());
    window.location.href = '/welcome';
  };

  return <Btn onClick={handleLogout}>Logout</Btn>;
};

export default LogoutButton;
