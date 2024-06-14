// import { useState } from 'react';
// import axios from 'axios';
// import styles from './HelpModal.module.css';

// const HelpModal = ({ show, onClose }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name.trim() || !email.trim()) {
//       setError('All fields are required');
//       return;
//     }

//     try {
//       const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/help', { name, email });
//       console.log('Help request sent:', response.data);
//       onClose(); // Закриваємо модальне вікно після успішного відправлення запиту
//     } catch (error) {
//       console.error('Failed to send help request:', error);
//       setError('Failed to send help request');
//     }
//   };

//   return (
//     <div className={styles.overlay} style={{ display: show ? 'block' : 'none' }}>
//       <div className={styles.modal}>
//         <button className={styles.closeButton} onClick={onClose}>X</button>
//         <h2>Need Help?</h2>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <input
//             type="text"
//             placeholder="Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className={styles.input}
//           />
//           <input
//             type="email"
//             placeholder="Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className={styles.input}
//           />
//           <button type="submit" className={styles.sendButton}>Send</button>
//           {error && <p className={styles.error}>{error}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default HelpModal;


import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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

const HelpModal = ({ show, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('https://project-back-codewave1-rqmw.onrender.com/api/help', { name, email });
      console.log('Help request sent:', response.data);
      onClose(); // Закрываем модальное окно после успешной отправки запроса
    } catch (error) {
      console.error('Failed to send help request:', error);
      setError('Failed to send help request');
    }
  };

  return (
    <Modal
      open={show}
      onClose={onClose}
      aria-labelledby="help-modal-title"
      aria-describedby="help-modal-description"
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
        <Typography id="help-modal-title" variant="h6" component="h2">
          Need Help?
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Your Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Send
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default HelpModal;
