import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'; // Убедитесь, что путь к SVG правильный
import styles from './LogoComponent.module.css';

const LogoComponent = () => (
  <div className={styles.logoContainer}>
    <Logo className={styles.logo} />
    <h1 className={styles.title}>Task Pro</h1>
  </div>
);

export default LogoComponent;
