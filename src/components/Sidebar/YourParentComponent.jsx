// import React, { useState, useEffect } from 'react';
// import BoardList from './BoardList';
// import CreateNewBoardButton from './CreateNewBoardButton';
// import EditBoardModal from './EditBoardModal';
// import boardsData from '../boards.json';

// const YourParentComponent = () => {
//   const [boards, setBoards] = useState([]);
//   const [selectedBoard, setSelectedBoard] = useState(null);

//   useEffect(() => {
//     setBoards(boardsData);
//   }, []);

//   const handleCreateNewBoard = (newBoard) => {
//     setBoards([...boards, newBoard]);
//   };

//   const handleEditBoard = (editedBoard) => {
//     const updatedBoards = boards.map(board => {
//       if (board.id === editedBoard.id) {
//         return editedBoard;
//       }
//       return board;
//     });
//     setBoards(updatedBoards);
//     setSelectedBoard(null); // Закрываем модальное окно после сохранения изменений
//   };

//   const openEditModal = (board) => {
//     setSelectedBoard(board);
//   };

//   const closeEditModal = () => {
//     setSelectedBoard(null);
//   };

//   return (
//     <div>
//       <CreateNewBoardButton onCreateNewBoard={handleCreateNewBoard} />
//       <BoardList boards={boards} onEdit={openEditModal} />
//       {selectedBoard && (
//         <EditBoardModal
//           board={selectedBoard}
//           onSave={handleEditBoard}
//           onClose={closeEditModal}
//         />
//       )}
//     </div>
//   );
// };

// export default YourParentComponent;



// // import React, { useState } from 'react';
// // import { Button } from 'flowbite-react';
// // import EditBoardModal from './EditBoardModal'; // Импортируем компонент модального окна редактирования

// // const BoardItem = ({ board, onEdit, onDelete }) => {
// //   const [isEditModalOpen, setIsEditModalOpen] = useState(false);

// //   const handleBoardClick = () => {
// //     setIsEditModalOpen(true);
// //   };

// //   const handleCloseModal = () => {
// //     setIsEditModalOpen(false);
// //   };

// //   const handleSaveChanges = (editedBoard) => {
// //     onEdit(editedBoard); // Вызываем функцию редактирования с отредактированной доской
// //     handleCloseModal();
// //   };

// //   const handleDeleteBoard = () => {
// //     onDelete(board.id); // Вызываем функцию удаления доски по ее id
// //     handleCloseModal();
// //   };

// //   return (
// //     <>
// //       <div className="flex justify-between items-center p-4 border rounded" onClick={handleBoardClick}>
// //         <div>
// //           <h2 className="text-xl font-semibold">{board.title}</h2>
// //           {/* Добавьте другие данные о доске, если нужно */}
// //         </div>
// //       </div>
// //       {isEditModalOpen && (
// //         <EditBoardModal
// //           board={board}
// //           onClose={handleCloseModal}
// //           onSave={handleSaveChanges}
// //           onDelete={handleDeleteBoard}
// //         />
// //       )}
// //     </>
// //   );
// // };

// // export default BoardItem;


import  { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBoardModal from './CreateBoardModal'; // убедитесь, что путь к компоненту правильный

const YourParentComponent = () => {
  const [boards, setBoards] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('/api/boards');
        setBoards(response.data);
      } catch (error) {
        console.error('Ошибка при получении досок:', error);
      }
    };

    fetchBoards();
  }, []);

  const handleCreateNewBoard = async (newBoard) => {
    try {
      const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/boards', newBoard);
      setBoards([...boards, response.data]);
    } catch (error) {
      console.error('Ошибка при создании новой доски:', error);
    }
  };

  return (
    <div>
      <button onClick={() => setShowCreateModal(true)}>+ Create New Board</button>
      {/* Здесь будет ваш компонент, отображающий список досок */}
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
