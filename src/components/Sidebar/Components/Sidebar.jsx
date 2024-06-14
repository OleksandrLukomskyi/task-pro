// import { useState, useEffect } from 'react';
// import axios from 'axios';
// // import LogoComponent from '../../logoComponent/LogoComponent.jsx'
// import BoardList from './Board/BoardList';
// import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton';
// import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal';
// import HelpModal from './HelpModal/HelpModal';
// import LogoutButton from './LogoutButton';
// import './HelpModal/HelpModal.jsx';

// function Sidebare () {
//   const [boards, setBoards] = useState([]); // Ініціалізація як порожній масив
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

//   useEffect(() => {
//     // Fetch boards from the API
//     axios.get('https://project-back-codewave1-rqmw.onrender.com/api/boards')
//       .then(response => {
//         setBoards(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching boards:', error);
//       });
//   }, []);

//   const handleDeleteBoard = (id) => {
//     // Implement delete board functionality
//     setBoards(boards.filter(board => board.id !== id));
//   };

//   const handleEditBoard = (id, updatedBoard) => {
//     // Implement edit board functionality
//     setBoards(boards.map(board => (board.id === id ? updatedBoard : board)));
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const openHelpModal = () => {
//     setIsHelpModalOpen(true);
//   };

//   const closeHelpModal = () => {
//     setIsHelpModalOpen(false);
//   };

//   return (
//     <div className='sidebar'>
//       {/* <LogoComponent/> */}
//       <h1>Task Pro</h1>
//       <CreateNewBoardButton onOpen={openModal} />
//       <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
//       <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
//       <button onClick={openHelpModal}>Need Help</button>
//       <HelpModal show={isHelpModalOpen} onClose={closeHelpModal} />
//       <LogoutButton />
//     </div>
//   );
// }

// export default Sidebare;


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import BoardList from './Board/BoardList.jsx';
// import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton.jsx';
// import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal.jsx';
// import HelpModal from './HelpModal/HelpModal.jsx';
// import LogoutButton from './LogoutButton.jsx';
// // import BoardsConsoleLogger from '../Components/Board/BoardsConsoleLoger.jsx'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// function Sidebar() {
//   const [boards, setBoards] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

//   useEffect(() => {
//     // Fetch boards from the API
//     axios.get('https://project-back-codewave1-rqmw.onrender.com/api/boards')
//       .then(response => {
//         setBoards(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching boards:', error);
//       });
//   }, []);

//   const handleDeleteBoard = (id) => {
//     setBoards(boards.filter(board => board.id !== id));
//   };

//   const handleEditBoard = (id, updatedBoard) => {
//     setBoards(boards.map(board => (board.id === id ? updatedBoard : board)));
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const openHelpModal = () => {
//     setIsHelpModalOpen(true);
//   };

//   const closeHelpModal = () => {
//     setIsHelpModalOpen(false);
//   };

//   return (
//     <Box className='sidebar' sx={{ padding: 2 }}>
//       <Typography variant="h4" component="h1" gutterBottom>
//         Task Pro
//       </Typography>
//       <CreateNewBoardButton onOpen={openModal} />
//       <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
//       <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
//       <Button variant="contained" onClick={openHelpModal} sx={{ marginTop: 2 }}>
//         Need Help
//       </Button>
//       <HelpModal show={isHelpModalOpen} onClose={closeHelpModal} />
//       <LogoutButton />
//       {/* <BoardsConsoleLogger/> */}
//     </Box>
//   );
// }

// export default Sidebar;

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import css from "../../CopySideBar/CopySideBar";
// import CopyBoardList from "../../CopyBoardList/CopyBoardList.jsx";
// import { fetchBoards } from "../../../redux/boards/operations";
// import { createColumn } from "../../../redux/columns/operations";
// import CopyAddBoard from "../../CopyAddBoard/CopyAddBoard.jsx";

// export default function CopySideBar() {
//   const dispatch = useDispatch();
//   const [idBoard, setIdBoard] = useState("");

//   useEffect(() => {
//     dispatch(fetchBoards());
//   }, [dispatch]);

//   const handleRender = (title, boardId) => {
//     console.log(`boardId ${title}: ${boardId}`);
//     setIdBoard(boardId);
//   };

//   const handleColumnSubmit = (evt) => {
//     evt.preventDefault();
//     const form = evt.target;
//     const { formTitle } = form.elements;
//     let newObj = {
//       boardId: idBoard,
//       title: formTitle.value,
//     };

//     dispatch(createColumn(newObj));
//     form.reset();
//   };

//   return (
//     <div className={css.container}>
//       <CopyAddBoard />
//       {"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"}
//       <CopyBoardList handleRender={handleRender} />
//       {"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"}
//       <div>
//         {"Перед створенням колонки оберіть Board (test-2) вище"}
//         <form onSubmit={handleColumnSubmit}>
//           <input type="text" name="formTitle" />
//           <button type="submit">CREATE COLUMN</button>
//         </form>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBoards, deleteBoard, editBoard } from '../../redux/boards/operations';
// import BoardList from './Board/BoardList';
// import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton';
// import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal';
// import HelpModal from './HelpModal/HelpModal';
// import LogoutButton from './LogoutButton';

// function Sidebar() {
//   const dispatch = useDispatch();
//   const boards = useSelector((state) => state.boards.items);
//   const isLoading = useSelector((state) => state.boards.loading);
//   const error = useSelector((state) => state.boards.error);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

//   useEffect(() => {
//     dispatch(fetchBoards());
//   }, [dispatch]);

//   const handleDeleteBoard = (id) => {
//     dispatch(deleteBoard(id));
//   };

//   const handleEditBoard = (id, updatedBoard) => {
//     dispatch(editBoard({ id, updatedBoard }));
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const openHelpModal = () => {
//     setIsHelpModalOpen(true);
//   };

//   const closeHelpModal = () => {
//     setIsHelpModalOpen(false);
//   };

//   return (
//     <div className="sidebar">
//       <h1>Task Pro</h1>
//       <CreateNewBoardButton onOpen={openModal} />
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error fetching boards</p>
//       ) : (
//         <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
//       )}
//       <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
//       <button onClick={openHelpModal}>Need Help</button>
//       <HelpModal show={isHelpModalOpen} onClose={closeHelpModal} />
//       <LogoutButton />
//     </div>
//   );
// }

// export default Sidebar;


// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBoards, deleteBoard, editBoard } from '../../../redux/boards/operations';
// import BoardList from './Board/BoardList';
// import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton';
// import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal';
// import HelpModal from './HelpModal/HelpModal';
// import LogoutButton from './LogoutButton';

// function Sidebar() {
//   const dispatch = useDispatch();
//   const boards = useSelector((state) => state.boards.items);
//   const isLoading = useSelector((state) => state.boards.loading);
//   const error = useSelector((state) => state.boards.error);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

//   useEffect(() => {
//     dispatch(fetchBoards());
//   }, [dispatch]);

//   const handleDeleteBoard = (id) => {
//     dispatch(deleteBoard(id));
//   };

//   const handleEditBoard = (id, updatedBoard) => {
//     dispatch(editBoard({ id, ...updatedBoard }));
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const openHelpModal = () => {
//     setIsHelpModalOpen(true);
//   };

//   const closeHelpModal = () => {
//     setIsHelpModalOpen(false);
//   };

//   return (
//     <div className="sidebar">
//       <h1>Task Pro</h1>
//       <CreateNewBoardButton onOpen={openModal} />
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p>Error fetching boards</p>
//       ) : (
//         <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
//       )}
//       <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
//       <button onClick={openHelpModal}>Need Help</button>
//       <HelpModal show={isHelpModalOpen} onClose={closeHelpModal} />
//       <LogoutButton />
//     </div>
//   );
// }

// export default Sidebar;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, deleteBoard, editBoard } from '../../../redux/boards/operations';
import BoardList from './Board/BoardList';
import CreateNewBoardButton from './CreateNewBoard/CreateNewBoardButton';
import CreateNewBoardModal from './CreateNewBoard/CreateNewBoardModal';
import HelpModal from './HelpModal/HelpModal';
import LogoutButton from './LogoutButton';
import Btn from '../../Btn/Btn.jsx'; // Импортируем компонент Btn

function Sidebar() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.items);
  const isLoading = useSelector((state) => state.boards.loading);
  const error = useSelector((state) => state.boards.error);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleDeleteBoard = (id) => {
    dispatch(deleteBoard(id));
  };

  const handleEditBoard = (id, updatedBoard) => {
    dispatch(editBoard({ id, updatedBoard }));
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
    <div className="sidebar">
      <h1>Task Pro</h1>
      <CreateNewBoardButton onOpen={openModal} />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching boards</p>
      ) : (
        <BoardList boards={boards} onDelete={handleDeleteBoard} onEdit={handleEditBoard} />
      )}
      <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
      <Btn onClick={openHelpModal}>Need Help</Btn>
      <HelpModal show={isHelpModalOpen} onClose={closeHelpModal} />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
