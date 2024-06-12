import React, { useState } from 'react';
import axios from 'axios';
import styles from './HelpModal.module.css';

const HelpModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSend = async () => {
    if (email.trim() && comment.trim()) {
      try {
        await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/help', { email, comment });
        setShowModal(false);
        setEmail('');
        setComment('');
      } catch (error) {
        console.error('Error sending help request:', error);
      }
    } else {
      alert('All fields are required');
    }
  };

  return (
    <>
      <button onClick={() => setShowModal(true)} className={styles.helpButton}>
        Need Help
      </button>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Need Help</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
              required
            />
            <textarea
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className={styles.textarea}
              required
            />
            <button onClick={handleSend} className={styles.sendButton}>
              Send
            </button>
            <button onClick={() => setShowModal(false)} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpModal;
