import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBoard, fetchBoards } from '../../../../redux/boards/operations';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import SvgIcon from '@mui/material/SvgIcon';
import EditBoardModal from './EditBoardModal';
import Sprite from '../../../../assets/icons/Sprite.svg'; // Импорт спрайта
import css from './BoardItem.module.css';

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
                                                                              {/* Доска */}
      <Card key={board._id} variant="outlined" sx={{ mb: 2, border: '0' }}>  
        <CardContent
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'var(--sidebar-background)',
            color: ' var(--sidebar-text)',
            border: 'none',
            height: '40px',
            padding: 1,
          }}
        >
                                                          {/* Иконка доски */}
          <SvgIcon sx={{ mr: 2, width: 16, height: 16 }}>
            <svg
              width="16"
              height="16"
              stroke="var(--color-plus-no-active)"
              fill="none"
            >
              <use href={`${Sprite}#${board.icon}`} />
            </svg>
          </SvgIcon>
                                                          {/* Название доски */}
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontSize: '14px' }}
            onClick={handleClick}
            style={{ cursor: 'pointer', fontSize: '14px' }}
          >
            {board.title}
          </Typography>  
                                                          {/* Раздел кнопок */}

          <CardActions>

                                                         {/* Кнопка редактирования */}

          <button
          className={css.deleteColumn}
          onClick={handleEditModalOpen}>
          {' '}
          <svg className={css.logoIcon}>
            <use href={Sprite + '#icon-pencil-01'}></use>
          </svg>{' '}
        </button>

                                                          {/* Кнопка удаления */}

            <button className={css.deleteColumn} onClick={() => handleDelete(board._id)}>
          {' '}
          <svg className={css.logoIcon}>
            <use href={Sprite + '#icon-trash-04'}></use>
          </svg>{' '}
        </button>            
          </CardActions>

        </CardContent>

        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}

      </Card>

                                     {/* модальное окно */}

      <EditBoardModal
        show={editModalOpen}
        onClose={handleEditModalClose}
        board={board}
      />
    </>
  );
};

export default BoardItem;




