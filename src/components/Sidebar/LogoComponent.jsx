import React from 'react';
import { ReactComponent as Logo } from '../logo.svg'; 

const LogoComponent = () => (
  <div className="flex items-center space-x-2">
    <Logo className="w-6 h-6" />
    <h1 className="text-2xl font-bold">Task Pro</h1>
  </div>
);

export default LogoComponent;
