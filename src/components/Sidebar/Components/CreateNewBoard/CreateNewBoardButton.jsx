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


import React from 'react';

const CreateNewBoardButton = ({ onCreate }) => {
  return (
    <div>
      <button onClick={onCreate}>Create New Board</button>
    </div>
  );
};

export default CreateNewBoardButton;
