import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './Board/BoardList';
import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton';
import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal';
import HelpModal from './HelpModal/HelpModal';
import LogoutButton from './LogoutButton';
import './HelpModal/HelpModal.jsx';

function Sidebare () {
  const [boards, setBoards] = useState([]); // Ініціалізація як порожній масив
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  useEffect(() => {
    // Fetch boards from the API
    axios.get('https://project-back-codewave1-rqmw.onrender.com/api/boards')
      .then(response => {
        setBoards(response.data);
      })
      .catch(error => {
        console.error('Error fetching boards:', error);
      });
  }, []);

  const handleDeleteBoard = (id) => {
    // Implement delete board functionality
    setBoards(boards.filter(board => board.id !== id));
  };

  const handleEditBoard = (id, updatedBoard) => {
    // Implement edit board functionality
    setBoards(boards.map(board => (board.id === id ? updatedBoard : board)));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <div className='sidebar'>
      <h1>Task Pro</h1>
      <CreateNewBoardButton onOpen={openModal} />
      <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
      <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
      <button onClick={openHelpModal}>Need Help</button>
      <HelpModal show={isHelpModalOpen} onClose={closeHelpModal} />
      <LogoutButton />
    </div>
  );
}

export default Sidebare;
