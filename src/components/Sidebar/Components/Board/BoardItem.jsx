import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBoard } from '../../../../redux/boards/operations'; // Импортируем операцию для удаления из Redux
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Btn from '../../../Btn/Btn.jsx'; // Импортируем компонент Btn
import EditBoardModal from './EditBoardModal'; // Импортируем компонент EditBoardModal

const BoardItem = ({ board }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна

  const handleDelete = async (_id) => {
    try {
      await dispatch(deleteBoard(_id));
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
  };

  return (
    <>
      <Card key={board._id} variant="outlined" sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {board.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Btn onClick={handleEditModalOpen}>Edit</Btn>
          <Btn onClick={() => handleDelete(board._id)}>Delete</Btn>
        </CardActions>
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Card>
      
      {/* Модальное окно для редактирования доски */}
      <EditBoardModal
        show={editModalOpen}
        onClose={handleEditModalClose}
        board={board} // Передаем всю доску в модальное окно, включая _id
      />
    </>
  );
};

export default BoardItem;


