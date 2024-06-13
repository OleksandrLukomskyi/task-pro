// import { useState } from 'react';
// import axios from 'axios';
// import reactLogo from '../assets/react.svg';
// import viteLogo from '/vite.svg';
// import BoardItem from './Board/BoardItem.jsx';
// import BoardList from './Board/BoardList.jsx';
// import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton.jsx';
// import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal.jsx';
// import LogoutButton from './LogoutButton.jsx';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Task Pro</h1>
//       <CreateNewBoardButton/>
//       {/* <BoardItem/> */}
//       {/* <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} /> */}
//       <CreateNewBoardModal/>
//       <LogoutButton/>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './Board/BoardList.jsx';
import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton.jsx';
import LogoutButton from './LogoutButton.jsx';
import './App.css';

function App() {
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
      await axios.delete(`https://your-backend-url/api/boards/${id}`);
      setBoards(boards.filter((board) => board.id !== id));
    } catch (error) {
      console.error('Failed to delete the board:', error);
    }
  };

  const handleEditBoard = async (id, updatedBoard) => {
    try {
      const response = await axios.put(`https://your-backend-url/api/boards/${id}`, updatedBoard);
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

      </div>
      <h1>Task Pro</h1>
      <CreateNewBoardButton onCreate={() => setIsModalOpen(true)} />
      <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
      {isModalOpen && <CreateNewBoardModal show={isModalOpen} onClose={() => setIsModalOpen(false)} onCreate={handleCreateBoard} />}
      <LogoutButton />
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
