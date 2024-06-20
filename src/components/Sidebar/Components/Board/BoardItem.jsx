import { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBoard, getBoard } from '../../../../redux/boards/operations';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';
import EditBoardModal from './EditBoardModal';
import Sprite from '../../../../assets/icons/Sprite.svg'; // Импорт спрайта

const BoardItem = ({ board }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleBoardId = async idBoard => {
    await dispatch(getBoard(idBoard));
  };

  const handleDelete = async _id => {
    try {
      await dispatch(deleteBoard(_id));
      // dispatch(fetchBoards());
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

  const handleClick = () => {
    navigate(`/home/${board.title}`);
  };

  return (
    <div onDoubleClick={() => handleBoardId(board._id)}>
      <Card key={board.title} variant="outlined" sx={{ mb: 2, border: '0' }}>
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
          <SvgIcon sx={{ mr: 2 }}>
            <svg
              width="16"
              height="16"
              stroke="var(--color-plus-no-active)"
              fill="none"
            >
              <use href={`${Sprite}#${board.icon}`} />
            </svg>
          </SvgIcon>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, fontSize: '14px' }}
            onClick={handleClick}
            style={{ cursor: 'pointer', fontSize: '14px' }}
          >
            {board.title}
          </Typography>
          <CardActions>
            <IconButton
              onClick={() => handleEditModalOpen()}
              style={{ width: '16px', height: '16px' }}
              sx={{
                color: 'var(--color-plus-no-active)',
                '&:hover': {
                  backgroundColor: 'transparent', // Устанавливаем прозрачный фон при ховере
                },
              }}
            >
              <div
              // onClick={handleEditModalOpen}
              // style={{ width: '16px', height: '16px' }}
              >
                <FiEdit2 />
              </div>
            </IconButton>
            <IconButton
              onClick={() => handleDelete(board._id)}
              sx={{
                color: 'var(--color-plus-no-active)',
                '&:hover': {
                  backgroundColor: 'transparent', // Устанавливаем прозрачный фон при ховере
                },
              }}
            >
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  cursor: 'pointer', // Добавляем указатель при наведении
                  transition: 'color 0.3s ease', // Плавное изменение цвета при ховере
                  '&:hover': {
                    color: 'red', // Например, изменяем цвет иконки на красный при ховере
                  },
                }}
              >
                <MdOutlineDeleteOutline />
              </div>
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
    </div>
  );
};

export default BoardItem;
