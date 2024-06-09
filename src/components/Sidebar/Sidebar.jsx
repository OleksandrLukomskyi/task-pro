import React from 'react';
import LogoComponent from './LogoComponent';
import YourParentComponent from './YourParentComponent';
import HelpModal from './HelpModal';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <LogoComponent />
      <h3>My boards</h3>
      <YourParentComponent />
      <HelpModal />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
