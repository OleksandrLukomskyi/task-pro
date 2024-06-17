// import { useState } from 'react';
// import CreateNewBoardModal from './CreateNewBoardModal.jsx'; // Импорт модального окна

// const CreateNewBoardButton = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

//   // Функция для открытия модального окна
//   const openModal = () => {
//     setIsModalOpen(true);


//   };

//   // Функция для закрытия модального окна
//   const closeModal = () => {
//     setIsModalOpen(false);

//   };

//   return (
//     <div>
//       {/* Кнопка для открытия модального окна */}
//       <button onClick={openModal}>Create New Board</button>
//       {/* Модальное окно */}
//       <CreateNewBoardModal isOpen={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// };

// export default CreateNewBoardButton;


// import React from 'react';

// const CreateNewBoardButton = ({ onCreate }) => {
//   return (
//     <div>
//       <button onClick={onCreate}>Create New Board</button>
//     </div>
//   );
// };

// export default CreateNewBoardButton;


// import { useState } from 'react';
// import CreateNewBoardModal from './CreateNewBoardModal'; // Импорт модального окна
// import Button from '@mui/material/Button';

// const CreateNewBoardButton = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

//   // Функция для открытия модального окна
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Функция для закрытия модального окна
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div>
//       {/* Кнопка для открытия модального окна */}
//       <Button variant="contained" color="primary" onClick={openModal}>
//         Create New Board
//       </Button>
//       {/* Модальное окно */}
//       <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// };

// export default CreateNewBoardButton;


import { useState } from 'react';
import CreateNewBoardModal from './CreateNewBoardModal'; // Импорт модального окна
import css from './CreateNewBoardModal.module.css'

const CreateNewBoardButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

  // Функция для открытия модального окна
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={css.create}>
      {/* Кнопка для открытия модального окна */}
      <button onClick={openModal}>
        + Create New Board
      </button>
      {/* Модальное окно */}
      <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CreateNewBoardButton;
