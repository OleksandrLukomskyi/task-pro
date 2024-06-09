import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBoardModal from './CreateNewBoardModal';

const YourParentComponent = () => {
  const [boards, setBoards] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('https://project-back-codewave1-rqmw.onrender.com/api/boards/');
        setBoards(response.data);
      } catch (error) {
        console.error('Ошибка при получении досок:', error);
      }
    };

    fetchBoards();
  }, []);

  const handleCreateNewBoard = async (newBoard) => {
    try {
      const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/boards/', newBoard);
      setBoards([...boards, response.data]);
    } catch (error) {
      console.error('Ошибка при создании новой доски:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowCreateModal(true)}>+ Create New Board</button>
      {boards.map(board => (
        <div key={board.id}>
          <h3>{board.title}</h3>
          <p>Icon: {board.icon}</p>
          <p>Background: {board.background}</p>
          {/* Здесь можно добавить дополнительную информацию о доске */}
        </div>
      ))}
      {showCreateModal && (
        <CreateBoardModal
          show={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onCreate={handleCreateNewBoard}
        />
      )}
    </div>
  );
};

export default YourParentComponent;
