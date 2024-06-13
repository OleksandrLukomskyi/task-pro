// import React from 'react';

// const BoardItem = ({ board, onDelete, onEdit }) => {
//   const handleDelete = () => {
//     onDelete(board.id);
//   };

//   const handleEdit = () => {
//     const updatedTitle = prompt('Enter updated title:', board.title);
//     if (updatedTitle) {
//       onEdit(board.id, { ...board, title: updatedTitle });
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


import React from 'react';
import axios from 'axios';

const BoardItem = ({ board, onDelete, onEdit }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${board.id}`);
      onDelete(board.id);
    } catch (error) {
      console.error('Failed to delete the board:', error);
    }
  };

  const handleEdit = async () => {
    const updatedTitle = prompt('Enter updated title:', board.title);
    if (updatedTitle) {
      try {
        const response = await axios.put(`https://project-back-codewave1-rqmw.onrender.com/api/boards/${board.id}`, {
          title: updatedTitle,
        });
        onEdit(board.id, response.data);
      } catch (error) {
        console.error('Failed to update the board:', error);
      }
    }
  };

  return (
    <div className="board-item">
      <h3>{board.title}</h3>
      <div className="board-actions">
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default BoardItem;
