import { useState } from 'react';
import axios from 'axios';
import styles from './HelpModal.module.css';

const HelpModal = ({ show, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/help', { name, email });
      console.log('Help request sent:', response.data);
      onClose(); // Закриваємо модальне вікно після успішного відправлення запиту
    } catch (error) {
      console.error('Failed to send help request:', error);
      setError('Failed to send help request');
    }
  };

  return (
    <div className={styles.overlay} style={{ display: show ? 'block' : 'none' }}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Need Help?</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.sendButton}>Send</button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default HelpModal;
