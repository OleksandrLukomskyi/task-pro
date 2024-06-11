import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateBoardModal.module.css';

const CreateBoardModal = ({ show, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState(0);
  const [background, setBackground] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }

    const newBoard = {
      title,
      icon,
      background,
    };

    await onCreate(newBoard);
  };

  if (!show) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h2>Create New Board</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className={styles.input}
          />
          {/* Add more form fields for icons and backgrounds */}
          <button type="submit" className={styles.createButton}>Create</button>
          <button type="button" onClick={onClose} className={styles.closeButton}>Close</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBoardModal;
