import { useState } from 'react';
import Modal from 'react-modal';
import styles from './CreateBoardModal.module.css';

import background1 from '../path/to/background1.jpg';
import background2 from '../path/to/background2.jpg';

const icons = [
  { id: 'icon-computer', title: 'Computer' },
  { id: 'icon-phone', title: 'Phone' },
  // Добавьте другие иконки
];

const backgrounds = [
  { id: 'none', title: 'Без фона' },
  { id: 'background1', title: 'Красный', image: background1 },
  { id: 'background2', title: 'Синий', image: background2 },
  // Добавьте другие фоны
];

const CreateBoardModal = ({ isOpen, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(icons[0].id);
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0].id);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (title.trim() === '') {
      alert('Title is required');
      return;
    }

    const newBoard = {
      title,
      icon: selectedIcon,
      background: selectedBackground,
    };

    await onCreate(newBoard);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal} contentLabel="Create New Board">
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
          
          <div className={styles.icons}>
            <h3>Choose Icon:</h3>
            {icons.map((icon) => (
              <label key={icon.id} className={styles.radioLabel}>
                <input
                  type="radio"
                  value={icon.id}
                  checked={selectedIcon === icon.id}
                  onChange={() => setSelectedIcon(icon.id)}
                />
                <svg className={styles.icon}>
                  <use xlinkHref={`#${icon.id}`} />
                </svg>
                {icon.title}
              </label>
            ))}
          </div>
          
          <div className={styles.backgrounds}>
            <h3>Choose Background:</h3>
            {backgrounds.map((background) => (
              <label key={background.id} className={styles.radioLabel}>
                <input
                  type="radio"
                  value={background.id}
                  checked={selectedBackground === background.id}
                  onChange={() => setSelectedBackground(background.id)}
                />
                {background.id !== 'none' && (
                  <img src={background.image} alt={background.title} className={styles.backgroundImage} />
                )}
                {background.title}
              </label>
            ))}
          </div>
          
          <button type="submit" className={styles.createButton}>Create</button>
          <button type="button" onClick={onClose} className={styles.closeButton}>Close</button>
        </form>
      </div>
    </Modal>
  );
};

export default CreateBoardModal;
