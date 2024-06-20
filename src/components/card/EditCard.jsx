import React, { useState } from 'react';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import sprite from '../../assets/icons/Sprite.svg';
import css from './EditCard.module.css';

export default function EditCard({ card, onSave, onClose }) {
  const [newTitle, setNewTitle] = useState(card.title);
  const [newDescription, setNewDescription] = useState(card.description);
  const [newPriority, setNewPriority] = useState(card.priority);
  const [newDeadline, setNewDeadline] = useState(
    new Date(card.deadline).toISOString().slice(0, -8)
  );

  const handleEditCard = () => {
    if (newTitle.trim() && newDescription.trim() && newDeadline.trim()) {
      onSave({
        ...card,
        title: newTitle,
        description: newDescription,
        priority: newPriority,
        deadline: new Date(newDeadline).toISOString(),
      });
      onClose(); // Close modal after saving
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Edit Card"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <h2>Edit Card</h2>
      <form onSubmit={handleEditCard}>
        <input
          type="text"
          value={newTitle}
          onChange={e => setNewTitle(e.target.value)}
          placeholder="Card title"
          required
          className={css.input}
        />
        <textarea
          value={newDescription}
          onChange={e => setNewDescription(e.target.value)}
          placeholder="Card description"
          required
          className={css.textarea}
        />
        <label>
          Label color:
          <div className={css.colorContainer}>
            <label>
              <input
                type="radio"
                name="priority"
                value="Low"
                checked={newPriority === 'Low'}
                onChange={() => setNewPriority('Low')}
              />
              <div className={`${css.colorOption} ${css.colorLow}`}></div>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Medium"
                checked={newPriority === 'Medium'}
                onChange={() => setNewPriority('Medium')}
              />
              <div className={`${css.colorOption} ${css.colorMedium}`}></div>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="High"
                checked={newPriority === 'High'}
                onChange={() => setNewPriority('High')}
              />
              <div className={`${css.colorOption} ${css.colorHigh}`}></div>
            </label>
            <label>
              <input
                type="radio"
                name="priority"
                value="Critical"
                checked={newPriority === 'Critical'}
                onChange={() => setNewPriority('Critical')}
              />
              <div className={`${css.colorOption} ${css.colorCritical}`}></div>
            </label>
          </div>
        </label>
        <label>
          Deadline:
          <input
            type="datetime-local"
            value={newDeadline}
            onChange={e => setNewDeadline(e.target.value)}
            required
            className={css.input}
          />
        </label>
        <button type="submit" className={css.submitButton}>
          <svg className={css.logoIcon} viewBox="0 0 32 32">
            <rect
              className={css.iconBackground}
              width="28"
              height="28"
              rx="6"
              ry="6"
            />
            <use
              href={sprite + '#icon-plus'}
              x="7"
              y="7"
              width="14"
              height="14"
            />
          </svg>
          Update
        </button>
      </form>
      <span className={css.spanClose} onClick={onClose}>
        <FiX className={css.closeIcon} />
      </span>
    </Modal>
  );
}
