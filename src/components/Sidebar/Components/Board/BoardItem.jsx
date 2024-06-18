// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteBoard } from '../../../../redux/boards/operations'; // Импортируем операцию для удаления из Redux
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Btn from '../../../Btn/Btn.jsx'; // Импортируем компонент Btn
// import EditBoardModal from './EditBoardModal'; // Импортируем компонент EditBoardModal

// const BoardItem = ({ board }) => {
//   const dispatch = useDispatch();
//   const [error, setError] = useState('');
//   const [editModalOpen, setEditModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

//   const handleDelete = async (_id) => {
//     try {
//       await dispatch(deleteBoard(_id));
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//       setError('Failed to delete the board');
//     }
//   };

//   const handleEditModalOpen = () => {
//     setEditModalOpen(true);
//   };

//   const handleEditModalClose = () => {
//     setEditModalOpen(false);
//   };

//   return (
//     <>
//       <Card key={board._id} variant="outlined" sx={{ mb: 2 }}>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {board.title}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Btn onClick={handleEditModalOpen}>Edit</Btn>
//           <Btn onClick={() => handleDelete(board._id)}>Delete</Btn>
//         </CardActions>
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}
//       </Card>

//       {/* Модальное окно для редактирования доски */}
//       <EditBoardModal
//         show={editModalOpen}
//         onClose={handleEditModalClose}
//         board={board} // Передаем всю доску в модальное окно, включая _id
//       />
//     </>
//   );
// };

// export default BoardItem;

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteBoard, fetchBoards } from '../../../../redux/boards/operations'; // Импортируем операцию для удаления и загрузки досок из Redux
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditBoardModal from './EditBoardModal'; // Импортируем компонент EditBoardModal

// const BoardItem = ({ board }) => {
//   const dispatch = useDispatch();
//   const [error, setError] = useState('');
//   const [editModalOpen, setEditModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

//   const handleDelete = async (_id) => {
//     try {
//       await dispatch(deleteBoard(_id));
//       // Запрашиваем обновленный список досок после удаления
//       dispatch(fetchBoards());
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//       setError('Failed to delete the board');
//     }
//   };

//   const handleEditModalOpen = () => {
//     setEditModalOpen(true);
//   };

//   const handleEditModalClose = () => {
//     setEditModalOpen(false);
//     // Запрашиваем обновленный список досок после редактирования
//     dispatch(fetchBoards());
//   };

//   return (
//     <>
//       <Card key={board._id} variant="outlined" sx={{ mb: 2 }}>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {board.title}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <IconButton onClick={handleEditModalOpen}>
//             <EditIcon />
//           </IconButton>
//           <IconButton onClick={() => handleDelete(board._id)}>
//             <DeleteIcon />
//           </IconButton>
//         </CardActions>
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}
//       </Card>

//       {/* Модальное окно для редактирования доски */}
//       <EditBoardModal
//         show={editModalOpen}
//         onClose={handleEditModalClose}
//         board={board} // Передаем всю доску в модальное окно, включая _id
//       />
//     </>
//   );
// };

// export default BoardItem;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteBoard, fetchBoards } from '../../../../redux/boards/operations';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditBoardModal from './EditBoardModal';

// const BoardItem = ({ board }) => {
//   const dispatch = useDispatch();
//   const [error, setError] = useState('');
//   const [editModalOpen, setEditModalOpen] = useState(false);

//   const handleDelete = async (_id) => {
//     try {
//       await dispatch(deleteBoard(_id));
//       dispatch(fetchBoards());
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//       setError('Failed to delete the board');
//     }
//   };

//   const handleEditModalOpen = () => {
//     setEditModalOpen(true);
//   };

//   const handleEditModalClose = () => {
//     setEditModalOpen(false);
//     dispatch(fetchBoards());
//   };

//   return (
//     <>
//       <Card key={board._id} variant="outlined" sx={{ mb: 2 }}>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {board.title}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <IconButton onClick={handleEditModalOpen}>
//             <EditIcon />
//           </IconButton>
//           <IconButton onClick={() => handleDelete(board._id)}>
//             <DeleteIcon />
//           </IconButton>
//         </CardActions>
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}
//       </Card>
//       <EditBoardModal
//         show={editModalOpen}
//         onClose={handleEditModalClose}
//         board={board}
//       />
//     </>
//   );
// };

// export default BoardItem;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteBoard, fetchBoards } from '../../../../redux/boards/operations';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Box from '@mui/material/Box';
// import SvgIcon from '@mui/material/SvgIcon';
// import EditBoardModal from './EditBoardModal';
// import Sprite from '../../../../assets/icons/Sprite.svg'; // Импорт спрайта

// const BoardItem = ({ board }) => {
//   const dispatch = useDispatch();
//   const [error, setError] = useState('');
//   const [editModalOpen, setEditModalOpen] = useState(false);

//   const handleDelete = async (_id) => {
//     try {
//       await dispatch(deleteBoard(_id));
//       dispatch(fetchBoards());
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//       setError('Failed to delete the board');
//     }
//   };

//   const handleEditModalOpen = () => {
//     setEditModalOpen(true);
//   };

//   const handleEditModalClose = () => {
//     setEditModalOpen(false);
//     dispatch(fetchBoards());
//   };

//   return (
//     <>
//       <Card key={board._id} variant="outlined" sx={{ mb: 2 }}>
//         <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
//           <SvgIcon sx={{ mr: 2 }}>
//             <svg width="24" height="24">
//               <use href={`${Sprite}#${board.icon}`} />
//             </svg>
//           </SvgIcon>
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//             {board.title}
//           </Typography>
//           <CardActions>
//             <IconButton onClick={handleEditModalOpen}>
//               <EditIcon />
//             </IconButton>
//             <IconButton onClick={() => handleDelete(board._id)}>
//               <DeleteIcon />
//             </IconButton>
//           </CardActions>
//         </CardContent>
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}
//       </Card>
//       <EditBoardModal
//         show={editModalOpen}
//         onClose={handleEditModalClose}
//         board={board}
//       />
//     </>
//   );
// };

// export default BoardItem;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteBoard, fetchBoards } from '../../../../redux/boards/operations';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// // import Box from '@mui/material/Box';
// import SvgIcon from '@mui/material/SvgIcon';
// import EditBoardModal from './EditBoardModal';
// import Sprite from '../../../../assets/icons/Sprite.svg'; // Импорт спрайта

// const BoardItem = ({ board }) => {
//   const dispatch = useDispatch();
//   const [error, setError] = useState('');
//   const [editModalOpen, setEditModalOpen] = useState(false);

//   const handleDelete = async (_id) => {
//     try {
//       await dispatch(deleteBoard(_id));
//       dispatch(fetchBoards());
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//       setError('Failed to delete the board');
//     }
//   };

//   const handleEditModalOpen = () => {
//     setEditModalOpen(true);
//   };

//   const handleEditModalClose = () => {
//     setEditModalOpen(false);
//     dispatch(fetchBoards());
//   };

//   return (
//     <>
//       <Card key={board._id} variant="outlined" sx={{ mb: 2, height: 61 }}>
//         <CardContent sx={{ display: 'flex', alignItems: '' }}>
//           <SvgIcon sx={{ mr: 2 }}>
//             <svg width="24" height="24">
//               <use href={`${Sprite}#${board.icon}`} />
//             </svg>
//           </SvgIcon>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             {board.title}
//           </Typography>
//           <CardActions>
//             <IconButton onClick={handleEditModalOpen}>
//               <EditIcon />
//             </IconButton>
//             <IconButton onClick={() => handleDelete(board._id)}>
//               <DeleteIcon />
//             </IconButton>
//           </CardActions>
//         </CardContent>
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}
//       </Card>
//       <EditBoardModal
//         show={editModalOpen}
//         onClose={handleEditModalClose}
//         board={board}
//       />
//     </>
//   );
// };

// export default BoardItem;

// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteBoard, fetchBoards } from '../../../../redux/boards/operations';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SvgIcon from '@mui/material/SvgIcon';
// import EditBoardModal from './EditBoardModal';
// import Sprite from '../../../../assets/icons/Sprite.svg'; // Импорт спрайта

// const BoardItem = ({ board, onDelete, onEdit }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [error, setError] = useState('');
//   const [editModalOpen, setEditModalOpen] = useState(false);

//   const handleDelete = async (_id) => {
//     try {
//       await dispatch(deleteBoard(_id));
//       dispatch(fetchBoards());
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//       setError('Failed to delete the board');
//     }
//   };

//   const handleEditModalOpen = () => {
//     setEditModalOpen(true);
//   };

//   const handleEditModalClose = () => {
//     setEditModalOpen(false);
//     dispatch(fetchBoards());
//   };

//   const handleClick = () => {
//     navigate(`/home/${board.title}`);
//   };

//   return (
//     <>
//       <Card key={board._id} variant="outlined" onClick={handleClick}>
//         <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
//           <SvgIcon sx={{ mr: 2 }}>
//             <svg width="24" height="24">
//               <use href={`${Sprite}#${board.icon}`} />
//             </svg>
//           </SvgIcon>
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//             {board.title}
//           </Typography>
//           <CardActions>
//             <IconButton onClick={handleEditModalOpen}>
//               <EditIcon />
//             </IconButton>
//             <IconButton onClick={() => handleDelete(board._id)}>
//               <DeleteIcon />
//             </IconButton>
//           </CardActions>
//         </CardContent>
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}
//       </Card>
//       <EditBoardModal
//         show={editModalOpen}
//         onClose={handleEditModalClose}
//         board={board}
//       />
//     </>
//   );
// };

// export default BoardItem;

// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { deleteBoard, fetchBoards } from '../../../../redux/boards/operations';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SvgIcon from '@mui/material/SvgIcon';
// import EditBoardModal from './EditBoardModal';
// import Sprite from '../../../../assets/icons/Sprite.svg'; // Импорт спрайта

// const BoardItem = ({ board }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [error, setError] = useState('');
//   const [editModalOpen, setEditModalOpen] = useState(false);

//   const handleDelete = async (_id) => {
//     try {
//       await dispatch(deleteBoard(_id));
//       dispatch(fetchBoards());
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//       setError('Failed to delete the board');
//     }
//   };

//   const handleEditModalOpen = () => {
//     setEditModalOpen(true);
//   };

//   const handleEditModalClose = () => {
//     setEditModalOpen(false);
//     dispatch(fetchBoards());
//   };

//   const handleClick = () => {
//     navigate(`/home/${board._id}`);
//   };

//   return (
//     <>
//      <Card key={board._id} variant="outlined" sx={{ mb: 2,
//           }}>
//         <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
//           <SvgIcon sx={{ mr: 2 }}>
//             <svg width="24" height="24">
//               <use href={`${Sprite}#${board.icon}`} />
//             </svg>
//           </SvgIcon>
//           <Typography
//             variant="h5"
//             component="div"
//             sx={{ flexGrow: 1 }}
//             onClick={handleClick}
//             style={{ cursor: 'pointer' }} // Белый цвет текста на черной доске
//             >

//             {board.title}
//           </Typography>
//           <CardActions>
//             <IconButton onClick={handleEditModalOpen}>
//               <EditIcon />
//             </IconButton>
//             <IconButton onClick={() => handleDelete(board._id)}>
//               <DeleteIcon />
//             </IconButton>
//           </CardActions>
//         </CardContent>
//         {error && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {error}
//           </Typography>
//         )}
//       </Card>
//       <EditBoardModal
//         show={editModalOpen}
//         onClose={handleEditModalClose}
//         board={board}
//       />
//     </>
//   );
// };

// export default BoardItem;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBoard, fetchBoards } from '../../../../redux/boards/operations';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';
import EditBoardModal from './EditBoardModal';
import Sprite from '../../../../assets/icons/Sprite.svg'; // Импорт спрайта

const BoardItem = ({ board }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleDelete = async _id => {
    try {
      await dispatch(deleteBoard(_id));
      dispatch(fetchBoards());
    } catch (error) {
      console.error('Failed to delete the board:', error);
      setError('Failed to delete the board');
    }
  };

  const handleEditModalOpen = () => {
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setEditModalOpen(false);
    dispatch(fetchBoards());
  };

  const handleClick = () => {
    navigate(`/home/${board._id}`);
  };

  return (
    <>
      <Card key={board._id} variant="outlined" sx={{ mb: 2, border: '0' }}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', backgroundColor: 'var(--sidebar-background)',
           color: ' var(--sidebar-text)', border: 'none', height: '61px', padding: 1} }>
          <SvgIcon sx={{ mr: 2 }}>
            <svg width="24" height="24" fill="var(--color-icons-no-active)">
              <use href={`${Sprite}#${board.icon}`} />
            </svg>
          </SvgIcon>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={handleClick}
            style={{ cursor: 'pointer' }} // Белый цвет текста на черной доске
          >
            {board.title}
          </Typography>
          <CardActions>
            <IconButton onClick={handleEditModalOpen} sx={{ color:'var(--color-icons-no-active)' }}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(board._id)} sx={{ color:'var(--color-icons-no-active)' }}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </CardContent>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Card>
      <EditBoardModal
        show={editModalOpen}
        onClose={handleEditModalClose}
        board={board}
      />
    </>
  );
};

export default BoardItem;
