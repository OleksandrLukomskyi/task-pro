import { useState, useEffect } from 'react';
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
import { editBoard } from '../../../../redux/boards/operations';

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

const EditBoardModal = ({ show, onClose, board }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [selectedBackground, setSelectedBackground] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (board) {
      setTitle(board.title);
      setSelectedIcon(board.icon);
      setSelectedBackground(board.background);
    }
  }, [board]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    try {
      const updatedBoardData = {
        ...board,
        title,
        icon: selectedIcon,
        background: selectedBackground,
      };
      await dispatch(editBoard(board._id, updatedBoardData)); // Передаем _id и обновленные данные доски в операцию editBoard
      onClose(); // Закрываем модальное окно после успешного обновления
    } catch (error) {
      console.error('Failed to update board:', error);
      setError('Failed to update board');
    }
  };

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="edit-board-modal-title"
      aria-describedby="edit-board-modal-description"
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
        <Typography id="edit-board-modal-title" variant="h6" component="h2">
          Edit Board
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
            Update
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditBoardModal;
