import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './Board/BoardList.jsx';
import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal.jsx';
import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import './Sidebar.css';


function Sidebare() {
  const [boards, setBoards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('https://project-back-codewave1-rqmw.onrender.com/api/boards');
        setBoards(response.data);
      } catch (error) {
        console.error('Failed to fetch boards:', error);
      }
    };

    fetchBoards();
  }, []);

  const handleDeleteBoard = async (id) => {
    try {
      await axios.delete(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${id}`);
      setBoards(boards.filter((board) => board.id !== id));
    } catch (error) {
      console.error('Failed to delete the board:', error);
    }
  };

  const handleEditBoard = async (id, updatedBoard) => {
    try {
      const response = await axios.put(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${id}`, updatedBoard);
      setBoards(boards.map((board) => (board.id === id ? response.data : board)));
    } catch (error) {
      console.error('Failed to update the board:', error);
    }
  };

  const handleCreateBoard = async (newBoard) => {
    try {
      const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/boards', newBoard);
      setBoards([...boards, response.data]);
      setIsModalOpen(false); // Закрываем модальное окно после успешного создания доски
    } catch (error) {
      console.error('Failed to create new board:', error);
    }
  };

  return (
    <>
      <div>

     
      <h1>Task Pro</h1>
      <CreateNewBoardButton onCreate={() => setIsModalOpen(true)} />
      <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
      {isModalOpen && <CreateNewBoardModal show={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreateBoard} />}
      <LogoutButton />
      </div>
    </>
  );
}

export default Sidebare;
