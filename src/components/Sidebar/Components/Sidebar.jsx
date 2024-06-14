import { useState, useEffect } from 'react';
import axios from 'axios';
// import LogoComponent from '../../logoComponent/LogoComponent.jsx'
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
      {/* <LogoComponent/> */}
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
