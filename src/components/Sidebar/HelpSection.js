import React, { useState } from 'react';
import HelpModal from './HelpModal'; // Создайте компонент модального окна для помощи

const HelpSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="help-section">
      <button onClick={() => setShowModal(true)}>Need</button>
      {showModal && <HelpModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default HelpSection;
