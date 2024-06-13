import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'; 

const LogoComponent = () => (
  <div className={styles.logoContainer}>
    <Logo className={styles.logo} />
    <h1 className={styles.title}>Task Pro</h1>
  </div>
);

export default LogoComponent;
