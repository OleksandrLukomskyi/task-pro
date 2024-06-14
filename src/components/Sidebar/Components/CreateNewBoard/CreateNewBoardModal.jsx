// // import { useState } from 'react';
// // import axios from 'axios';
// // import styles from './CreateNewBoardModal.module.css';

// // const CreateNewBoardModal = ({ show, onClose }) => {
  
// //   const [title, setTitle] = useState('');
// //   const [selectedIcon, setSelectedIcon] = useState('icon1'); // Установка первой иконки по умолчанию
// //   const [selectedBackground, setSelectedBackground] = useState('background1'); // Установка первого фона по умолчанию
// //   const [error, setError] = useState('');

 

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!title.trim()) {
// //       setError('Title is required');
     
     
// //       return;
// //     }

// //     try {
// //       const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/boards', {
// //         title,
// //         icon: selectedIcon,
// //         background: selectedBackground
// //       });
// //       console.log('New board created:', response.data);
// //       onClose(); // Закрываем модальное окно после успешного создания доски

// //     } catch (error) {
// //       console.error('Failed to create new board:', error);
// //       setError('Failed to create new board');
// //     }
// //   };



// //   return (
   
// //     <div className={styles.overlay} style={{ display: show ? 'block' : 'none' }}>
// //       <div className={styles.modal}>
// //         <button className={styles.closeButton} onClick={onClose}>X</button>
// //         <h2>Create New Board</h2>
// //         <form onSubmit={handleSubmit} className={styles.form}>
// //           <input
// //             type="text"
// //             placeholder="Title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             className={styles.input}
// //           />
// //           {/* Перечисляем иконки */}
// //           <div className={styles.icons}>
// //             <label>
// //               <input
// //                 type="radio"
// //                 value="icon1"
// //                 checked={selectedIcon === 'icon1'}
// //                 onChange={() => setSelectedIcon('icon1')}
// //               />
// //               <img src="/path/to/icon1.svg" alt="Icon 1" className={styles.icon} />
// //             </label>
// //             {/* Добавьте другие иконки по аналогии */}
// //           </div>
// //           {/* Перечисляем фоны */}
// //           <div className={styles.backgrounds}>
// //             <label>
// //               <input
// //                 type="radio"
// //                 value="background1"
// //                 checked={selectedBackground === 'background1'}
// //                 onChange={() => setSelectedBackground('background1')}
// //               />
// //               <img src="/path/to/background1.jpg" alt="Background 1" className={styles.background} />
// //             </label>
// //             {/* Добавьте другие фоны по аналогии */}
// //           </div>
// //           <button type="submit" className={styles.createButton}>Create</button>
// //           {error && <p className={styles.error}>{error}</p>}
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateNewBoardModal;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import styles from './CreateNewBoardModal.module.css';

// // const CreateNewBoardModal = ({ show, onClose, onCreate }) => {
// //   const [title, setTitle] = useState('');
// //   const [selectedIcon, setSelectedIcon] = useState('icon1');
// //   const [selectedBackground, setSelectedBackground] = useState('background1');
// //   const [error, setError] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!title.trim()) {
// //       setError('Title is required');
// //       return;
// //     }

// //     const newBoard = {
// //       title,
// //       icon: selectedIcon,
// //       background: selectedBackground
// //     };

// //     onCreate(newBoard);
// //   };

// //   return (
// //     <div className={styles.overlay} style={{ display: show ? 'block' : 'none' }}>
// //       <div className={styles.modal}>
// //         <button className={styles.closeButton} onClick={onClose}>X</button>
// //         <h2>Create New Board</h2>
// //         <form onSubmit={handleSubmit} className={styles.form}>
// //           <input
// //             type="text"
// //             placeholder="Title"
// //             value={title}
// //             onChange={(e) => setTitle(e.target.value)}
// //             className={styles.input}
// //           />
// //           <div className={styles.icons}>
// //             <label>
// //               <input
// //                 type="radio"
// //                 value="icon1"
// //                 checked={selectedIcon === 'icon1'}
// //                 onChange={() => setSelectedIcon('icon1')}
// //               />
// //               <img src="/path/to/icon1.svg" alt="Icon 1" className={styles.icon} />
// //             </label>
// //             {/* Добавьте другие иконки по аналогии */}
// //           </div>
// //           <div className={styles.backgrounds}>
// //             <label>
// //               <input
// //                 type="radio"
// //                 value="background1"
// //                 checked={selectedBackground === 'background1'}
// //                 onChange={() => setSelectedBackground('background1')}
// //               />
// //               <img src="/path/to/background1.jpg" alt="Background 1" className={styles.background} />
// //             </label>
// //             {/* Добавьте другие фоны по аналогии */}
// //           </div>
// //           <button type="submit" className={styles.createButton}>Create</button>
// //           {error && <p className={styles.error}>{error}</p>}
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CreateNewBoardModal;


// import { useState } from 'react';
// import axios from 'axios';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// const CreateNewBoardModal = ({ show, onClose }) => {
//   const [title, setTitle] = useState('');
//   const [selectedIcon, setSelectedIcon] = useState('icon1');
//   const [selectedBackground, setSelectedBackground] = useState('background1');
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
//       onClose();
//     } catch (error) {
//       console.error('Failed to create new board:', error);
//       setError('Failed to create new board');
//     }
//   };

//   return (
//     <Modal
//       open={show}
//       onClose={onClose}
//       aria-labelledby="create-board-modal-title"
//       aria-describedby="create-board-modal-description"
//     >
//       <Box sx={style}>
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: 'absolute',
//             right: 8,
//             top: 8,
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <Typography id="create-board-modal-title" variant="h6" component="h2">
//           Create New Board
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//           <TextField
//             fullWidth
//             label="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             margin="normal"
//           />
//           <FormControl component="fieldset" sx={{ mt: 2 }}>
//             <FormLabel component="legend">Choose an Icon</FormLabel>
//             <RadioGroup
//               row
//               value={selectedIcon}
//               onChange={(e) => setSelectedIcon(e.target.value)}
//             >
//               <FormControlLabel
//                 value="icon1"
//                 control={<Radio />}
//                 label={<img src="/path/to/icon1.svg" alt="Icon 1" style={{ width: 24, height: 24 }} />}
//               />
//               {/* Добавьте другие иконки по аналогии */}
//             </RadioGroup>
//           </FormControl>
//           <FormControl component="fieldset" sx={{ mt: 2 }}>
//             <FormLabel component="legend">Choose a Background</FormLabel>
//             <RadioGroup
//               row
//               value={selectedBackground}
//               onChange={(e) => setSelectedBackground(e.target.value)}
//             >
//               <FormControlLabel
//                 value="background1"
//                 control={<Radio />}
//                 label={<img src="/path/to/background1.jpg" alt="Background 1" style={{ width: 50, height: 50 }} />}
//               />
//               {/* Добавьте другие фоны по аналогии */}
//             </RadioGroup>
//           </FormControl>
//           {error && (
//             <Typography color="error" sx={{ mt: 2 }}>
//               {error}
//             </Typography>
//           )}
//           <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//             Create
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default CreateNewBoardModal;


import React, { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import SvgIcon from '@mui/material/SvgIcon';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CreateNewBoardModal = ({ show, onClose }) => {
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

    try {
      const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/boards', {
        title,
        icon: selectedIcon,
        background: selectedBackground
      });
      console.log('New board created:', response.data);
      onClose();
    } catch (error) {
      console.error('Failed to create new board:', error);
      setError('Failed to create new board');
    }
  };

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="create-board-modal-title"
      aria-describedby="create-board-modal-description"
    >
      <Box sx={style}>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography id="create-board-modal-title" variant="h6" component="h2">
          Create New Board
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Choose an Icon</FormLabel>
            <RadioGroup
              row
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
            >
              <FormControlLabel
                value="icon1"
                control={<Radio />}
                label={
                  <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-2 13h-3v-3h3v3zm0-5h-3V7h3v3zm5 5h-3v-3h3v3zm0-5h-3V7h3v3z"/>
                    </svg>
                  </SvgIcon>
                }
              />
              {/* Add other icons similarly */}
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend">Choose a Background</FormLabel>
            <RadioGroup
              row
              value={selectedBackground}
              onChange={(e) => setSelectedBackground(e.target.value)}
            >
              <FormControlLabel
                value="background1"
                control={<Radio />}
                label={<img src="/path/to/background1.jpg" alt="Background 1" style={{ width: 50, height: 50 }} />}
              />
              {/* Add other backgrounds similarly */}
            </RadioGroup>
          </FormControl>
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateNewBoardModal;
