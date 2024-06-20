import { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { addBoard, fetchBoards } from '../../../../redux/boards/operations';
import BackgroundSelector from './BackgroundSelector'; // Импорт компонента BackgroundSelector

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'var(--modal-backgr)',
  border: 'none',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const CreateNewBoardModal = ({ show, onClose, title }) => {
  const dispatch = useDispatch();
  const [boardTitle, setBoardTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('icon-Project');
  const [selectedBackground, setSelectedBackground] = useState('background1');
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    if (!boardTitle.trim()) {
      setError('Title is required');
      return;
    }

    try {
      await dispatch(
        addBoard({
          title: boardTitle,
          icon: selectedIcon,
          background: selectedBackground,
        })
      ).unwrap();
      onClose(); // Закрываем модальное окно после успешного создания
      dispatch(fetchBoards()); // Обновляем список досок после создания
    } catch (error) {
      console.error('Failed to create new board:', error);
      setError('Failed to create new board');
    } finally {
      setBoardTitle('');
    }
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   if (!boardTitle.trim()) {
  //     setError('Title is required');
  //     return;
  //   }

  //   try {
  //     await dispatch(
  //       addBoard({
  //         title: boardTitle,
  //         icon: selectedIcon,
  //         background: selectedBackground,
  //       })
  //     ).unwrap();
  //     onClose(); // Закрываем модальное окно после успешного создания
  //   } catch (error) {
  //     console.error('Failed to create new board:', error);
  //     setError('Failed to create new board');
  //   }
  // };

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
        <Typography
          id="create-board-modal-title"
          variant="h6"
          component="h2"
          sx={{ color: 'var(--text-color)' }}
        >
          New board
        </Typography>
        <Typography
          id="create-board-modal-title"
          variant="h6"
          component="h2"
          sx={{ color: 'var(--text-color)' }}
        >
          {title}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Title"
            value={boardTitle}
            onChange={e => setBoardTitle(e.target.value)}
            margin="normal"
            sx={{
              color: 'var(--text-color)',
              backgroundColor: 'white',
              borderRadius: '8px',
            }} // Установка цвета текста для TextField
          />
          <FormControl component="fieldset" sx={{ mt: 2 }}>
            <FormLabel component="legend" sx={{ color: 'var(--text-color)' }}>
              Choose an Icon
            </FormLabel>
            <RadioGroup
              row
              value={selectedIcon}
              onChange={e => setSelectedIcon(e.target.value)}
              sx={{
                marginLeft: '10px',
                marginTop: '10px',
              }}
            >
              {[
                'icon-Project',
                'icon-star-04',
                'icon-loading-03',
                'icon-puzzle-piece-02',
                'icon-container',
                'icon-lightning-02',
                'icon-colors',
                'icon-hexagon-01',
              ].map(iconId => (
                <FormControlLabel
                  key={iconId}
                  value={iconId}
                  control={<Radio style={{ display: 'none' }} />}
                  label={
                    <SvgIcon
                      sx={{
                        fill:
                          selectedIcon === iconId
                            ? 'var(--color-icons-active)'
                            : 'var(--color-icons-no-active)',
                        // fill: 'none',
                        width: '18px',
                        height: '18px',
                      }}
                    >
                      <use
                        xlinkHref={`../../../../../src/assets/icons/Sprite.svg#${iconId}`}
                      />
                    </SvgIcon>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>

          <BackgroundSelector
            setSelectedBackground={setSelectedBackground}
            sx={{ marginRight: '10px' }}
          />

          {error && (
            <Typography
              color="error"
              sx={{ marginTop: 2, color: 'var(--text-color)' }}
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: '40px',
              width: '100%',
              height: 49,
              backgroundColor: 'var(--btn-color)',
              color: 'var(--text-color-btn)',
              '&:hover': {
                backgroundColor: 'var( --btn-color-hover)',
              },
            }}
          >
            Create
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateNewBoardModal;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
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
// import SvgIcon from '@mui/material/SvgIcon';
// import { addBoard } from '../../../../redux/boards/operations';

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
//   const dispatch = useDispatch();
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
//       await dispatch(addBoard({ title, icon: selectedIcon, background: selectedBackground })).unwrap();
//       onClose(); // Закрываем модальное окно после успешного создания
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
//           New Board
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
//                 label={
//                   <SvgIcon>
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//                       <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-2 13h-3v-3h3v3zm0-5h-3V7h3v3zm5 5h-3v-3h3v3zm0-5h-3V7h3v3z"/>
//                     </svg>
//                   </SvgIcon>
//                 }
//               />
//               {/* Add other icons similarly */}
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
//               {/* Add other backgrounds similarly */}
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

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
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
// import SvgIcon from '@mui/material/SvgIcon';
// import { addBoard,editBoard } from '../../../../redux/boards/operations';

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

// const CreateOrUpdateBoardModal = ({ show, onClose, mode, board }) => {
//   const dispatch = useDispatch();
//   const [title, setTitle] = useState('');
//   const [selectedIcon, setSelectedIcon] = useState('icon1');
//   const [selectedBackground, setSelectedBackground] = useState('background1');
//   const [error, setError] = useState('');

//   useEffect(() => {
//     if (mode === 'edit' && board) {
//       setTitle(board.title);
//       setSelectedIcon(board.icon);
//       setSelectedBackground(board.background);
//     }
//   }, [mode, board]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) {
//       setError('Title is required');
//       return;
//     }

//     try {
//       if (mode === 'create') {
//         const newBoardData = {
//           title,
//           icon: selectedIcon,
//           background: selectedBackground,
//         };
//         const createdBoard = await dispatch(addBoard(newBoardData));
//         console.log('New board created:', createdBoard);
//       } else if (mode === 'edit' && board) {
//         const updatedBoardData = {
//           title,
//           icon: selectedIcon,
//           background: selectedBackground,
//         };
//         const updatedBoard = await dispatch(editBoard(board._id, updatedBoardData));
//         console.log('Board updated successfully:', updatedBoard);
//       }
//       onClose();
//     } catch (error) {
//       console.error('Failed to create or update board:', error);
//       setError('Failed to create or update board');
//     }
//   };

//   return (
//     <Modal
//       open={show}
//       onClose={onClose}
//       aria-labelledby={mode === 'create' ? 'create-board-modal-title' : 'edit-board-modal-title'}
//       aria-describedby={mode === 'create' ? 'create-board-modal-description' : 'edit-board-modal-description'}
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
//         <Typography variant="h6" component="h2">
//           {mode === 'create' ? 'Create New Board' : 'Edit Board'}
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
//           <TextField
//             fullWidth
//             label="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             margin="normal"
//           />
//           {mode === 'create' && (
//             <FormControl component="fieldset" sx={{ mt: 2 }}>
//               <FormLabel component="legend">Choose an Icon</FormLabel>
//               <RadioGroup
//                 row
//                 value={selectedIcon}
//                 onChange={(e) => setSelectedIcon(e.target.value)}
//               >
//                 <FormControlLabel
//                   value="icon1"
//                   control={<Radio />}
//                   label={
//                     <SvgIcon>
//                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
//                         <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm-2 13h-3v-3h3v3zm0-5h-3V7h3v3zm5 5h-3v-3h3v3zm0-5h-3V7h3v3z"/>
//                       </svg>
//                     </SvgIcon>
//                   }
//                 />
//                 {/* Add other icons similarly */}
//               </RadioGroup>
//             </FormControl>
//           )}
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
//               {/* Add other backgrounds similarly */}
//             </RadioGroup>
//           </FormControl>
//           {error && (
//             <Typography color="error" sx={{ mt: 2 }}>
//               {error}
//             </Typography>
//           )}
//           <Button type="submit" variant="contained" sx={{ mt: 2 }}>
//             {mode === 'create' ? 'Create' : 'Update'}
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// };

// export default CreateOrUpdateBoardModal;
