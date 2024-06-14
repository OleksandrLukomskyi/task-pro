// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../redux/auth/authActions';

// const LogoutButton = () => {
//   const dispatch = useDispatch();
//   const { isLoggingOut, logoutError } = useSelector((state) => state.auth);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   return (
//     <div>
//       <button onClick={handleLogout} disabled={isLoggingOut}>
//         {isLoggingOut ? 'Logging out...' : 'Logout'}
//       </button>
//       {logoutError && <p>Error: {logoutError}</p>}
//     </div>
//   );
// };

// export default LogoutButton;

// src/components/LogoutButton.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/boards/operations';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logOut());
    window.location.href = '/welcome';
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
