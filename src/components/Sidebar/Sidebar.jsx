// src/components/Sidebar/Sidebar.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBoardModal from './CreateBoardModal';
import BoardListItem from './BoardListItem';
import LogoComponent from '../LogoComponent';
import HelpModal from '../HelpModal';
import LogoutButton from '../LogoutButton';

const Sidebar = () => {
  const [boards, setBoards] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('/api/boards');
        setBoards(response.data);
      } catch (error) {
        console.error('Failed to fetch boards:', error);
      }
    };

    fetchBoards();
  }, []);

  const handleCreateNewBoard = async (newBoard) => {
    try {
      const response = await axios.post('/api/boards', newBoard);
      setBoards([...boards, response.data]);
    } catch (error) {
      console.error('Failed to create new board:', error);
    }
  };

  return (
    <div className="sidebar">
      <LogoComponent />
      <button onClick={() => setShowCreateModal(true)}>Create New Board</button>
      <div className="board-list">
        {boards.map(board => (
          <BoardListItem key={board.id} board={board} />
        ))}
      </div>
      <HelpModal />
      <LogoutButton />
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

export default Sidebar;
