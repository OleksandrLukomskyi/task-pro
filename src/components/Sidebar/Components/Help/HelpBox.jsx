import React, { useState } from 'react';
import HelpModal from '../HelpModal/HelpModal.jsx';
import css from './HelpBox.module.css';

function HelpBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={css.helpBox}>
      <ul>
        <li></li>
        <li>
          <p>If you need help with TaskPro, check out our support resources or reach out to our customer support team.</p>
        </li>
        <li>
          <button onClick={openModal}>Need Help</button>
          <HelpModal show={isModalOpen} onClose={closeModal} />
        </li>
      </ul>
    </div>
  );
}

export default HelpBox;
