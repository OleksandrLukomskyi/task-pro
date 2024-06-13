// import { useState } from 'react';
// import axios from 'axios';
// import styles from './CreateNewBoardModal.module.css';

// const CreateNewBoardModal = ({ show, onClose }) => {
  
//   const [title, setTitle] = useState('');
//   const [selectedIcon, setSelectedIcon] = useState('icon1'); // Установка первой иконки по умолчанию
//   const [selectedBackground, setSelectedBackground] = useState('background1'); // Установка первого фона по умолчанию
//   const [error, setError] = useState('');

 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) {
//       setError('Title is required');
     
     
//       return;
//     }

//     try {
//       const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/boards', {
//         title,
//         icon: selectedIcon,
//         background: selectedBackground
//       });
//       console.log('New board created:', response.data);
//       onClose(); // Закрываем модальное окно после успешного создания доски

//     } catch (error) {
//       console.error('Failed to create new board:', error);
//       setError('Failed to create new board');
//     }
//   };



//   return (
   
//     <div className={styles.overlay} style={{ display: show ? 'block' : 'none' }}>
//       <div className={styles.modal}>
//         <button className={styles.closeButton} onClick={onClose}>X</button>
//         <h2>Create New Board</h2>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className={styles.input}
//           />
//           {/* Перечисляем иконки */}
//           <div className={styles.icons}>
//             <label>
//               <input
//                 type="radio"
//                 value="icon1"
//                 checked={selectedIcon === 'icon1'}
//                 onChange={() => setSelectedIcon('icon1')}
//               />
//               <img src="/path/to/icon1.svg" alt="Icon 1" className={styles.icon} />
//             </label>
//             {/* Добавьте другие иконки по аналогии */}
//           </div>
//           {/* Перечисляем фоны */}
//           <div className={styles.backgrounds}>
//             <label>
//               <input
//                 type="radio"
//                 value="background1"
//                 checked={selectedBackground === 'background1'}
//                 onChange={() => setSelectedBackground('background1')}
//               />
//               <img src="/path/to/background1.jpg" alt="Background 1" className={styles.background} />
//             </label>
//             {/* Добавьте другие фоны по аналогии */}
//           </div>
//           <button type="submit" className={styles.createButton}>Create</button>
//           {error && <p className={styles.error}>{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateNewBoardModal;


import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateNewBoardModal.module.css';

const CreateNewBoardModal = ({ show, onClose, onCreate }) => {
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('icon1');
  const [selectedBackground, setSelectedBackground] = useState('background1');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    const newBoard = {
      title,
      icon: selectedIcon,
      background: selectedBackground
    };

    onCreate(newBoard);
  };

  return (
    <div className={styles.overlay} style={{ display: show ? 'block' : 'none' }}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>Create New Board</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
          <div className={styles.icons}>
            <label>
              <input
                type="radio"
                value="icon1"
                checked={selectedIcon === 'icon1'}
                onChange={() => setSelectedIcon('icon1')}
              />
              <img src="/path/to/icon1.svg" alt="Icon 1" className={styles.icon} />
            </label>
            {/* Добавьте другие иконки по аналогии */}
          </div>
          <div className={styles.backgrounds}>
            <label>
              <input
                type="radio"
                value="background1"
                checked={selectedBackground === 'background1'}
                onChange={() => setSelectedBackground('background1')}
              />
              <img src="/path/to/background1.jpg" alt="Background 1" className={styles.background} />
            </label>
            {/* Добавьте другие фоны по аналогии */}
          </div>
          <button type="submit" className={styles.createButton}>Create</button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateNewBoardModal;
