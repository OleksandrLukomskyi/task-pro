// src/components/LogoutButton.js
import React from 'react';

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      // Відправка запиту на сервер для виходу з системи
      await fetch('https://project-back-codewave1-rqmw.onrender.com/users/logout', {
        method: 'POST', 
      });
      // Перенаправлення користувача на WelcomePage 
      window.location.href = '/welcome';
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
