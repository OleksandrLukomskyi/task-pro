// import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import Btn from '../../Btn/Btn.jsx'; // Импортируем компонент Btn
import { TbLogin2 } from 'react-icons/tb';
import css from './LogoutButton.module.css';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logOut());
    window.location.href = '/welcome';
  };

  return (
    <button className={css.btn} onClick={handleLogout}>
      <TbLogin2 className={css.icon} />
      Logout
    </button>
  );
};

export default LogoutButton;
