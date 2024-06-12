import { useState } from 'react';
import CreateBoardModal from '../CreateBoardModal/CreateBoardModal';
import axios from 'axios';
import styles from './CreateNewBoardButton.module.css';

const CreateNewBoardButton = ({ onBoardCreated }) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleCreateBoard = async (newBoard) => {
    try {
      const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/boards', newBoard);
      onBoardCreated(response.data); // Notify parent component about the new board
      setShowCreateModal(false);
    } catch (error) {
      console.error('Error creating new board:', error);
    }
  };

  return (
    <>
      <button onClick={() => setShowCreateModal(true)} className={styles.createButton}>
        + Create New Board
      </button>
      {showCreateModal && (
        <CreateBoardModal
          show={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreateBoard}
        />
      )}
    </>
  );
};

export default CreateNewBoardButton;
