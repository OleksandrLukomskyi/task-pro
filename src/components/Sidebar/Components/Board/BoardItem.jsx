// import React from 'react';
// import axios from 'axios';

// const BoardItem = ({ board, onDelete, onEdit }) => {
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${board.id}`);
//       onDelete(board.id);
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//     }
//   };

//   const handleEdit = async () => {
//     const updatedTitle = prompt('Enter updated title:', board.title);
//     if (updatedTitle) {
//       try {
//         const response = await axios.put(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${board.id}`, {
//           title: updatedTitle,
//         });
//         onEdit(board.id, response.data);
//       } catch (error) {
//         console.error('Failed to update the board:', error);
//       }
//     }
//   };

//   return (
//     <div className="board-item">
//       <h3>{board.title}</h3>
//       <div className="board-actions">
//         <button onClick={handleEdit}>Edit</button>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>
//   );
// };

// export default BoardItem;


// import React from 'react';
// import axios from 'axios';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const BoardItem = ({ board, onDelete, onEdit }) => {
//   const handleDelete = async () => {
//     try {
//       await axios.delete(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${board.id}`);
//       onDelete(board.id);
//     } catch (error) {
//       console.error('Failed to delete the board:', error);
//     }
//   };

//   const handleEdit = async () => {
//     const updatedTitle = prompt('Enter updated title:', board.title);
//     if (updatedTitle) {
//       try {
//         const response = await axios.put(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${board.id}`, {
//           title: updatedTitle,
//         });
//         onEdit(board.id, response.data);
//       } catch (error) {
//         console.error('Failed to update the board:', error);
//       }
//     }
//   };

//   return (
//     <Card variant="outlined" sx={{ mb: 2 }}>
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {board.title}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small" onClick={handleEdit}>Edit</Button>
//         <Button size="small" onClick={handleDelete}>Delete</Button>
//       </CardActions>
//     </Card>
//   );
// };

// export default BoardItem;


import React from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const BoardItem = ({ board, onDelete, onEdit }) => {
  // Преобразование объекта в массив, если board является объектом
  const boardsArray = Array.isArray(board) ? board : [board];

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Failed to delete the board:', error);
    }
  };

  const handleEdit = async (id) => {
    const updatedTitle = prompt('Enter updated title:', boardsArray.find(b => b.id === id)?.title);
    if (updatedTitle) {
      try {
        const response = await axios.put(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${id}`, {
          title: updatedTitle,
        });
        onEdit(id, response.data);
      } catch (error) {
        console.error('Failed to update the board:', error);
      }
    }
  };

  return (
    <Box>
      {boardsArray.map(b => (
        <Card key={b.id} variant="outlined" sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {b.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => handleEdit(b.id)}>Edit</Button>
            <Button size="small" onClick={() => handleDelete(b.id)}>Delete</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default BoardItem;
