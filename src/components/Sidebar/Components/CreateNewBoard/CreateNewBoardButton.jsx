// import CreateNewBoardModal from './CreateNewBoardModal'; // Импорт модального окна
import { useState } from 'react';
import css from './CreateNewBoardModal.module.css';
import CreateNewBoardModal from './CreateNewBoardModal';

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
      <div className={css.text}>
        <p>Create a new board</p>
      </div>

      {/* Кнопка для открытия модального окна */}
      <button className={css.btnPlus} onClick={openModal}>
        <div>+</div>
      </button>
      {/* Модальное окно */}
      <CreateNewBoardModal show={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CreateNewBoardButton;
