// import React from 'react';
// import { Button } from 'flowbite-react';

// const BoardItem = ({ board, onEdit, onDelete }) => (
//   <div className="flex justify-between items-center p-4 border rounded">
//     <div>
//       <h2 className="text-xl font-semibold">{board.title}</h2>
//       {/* Добавьте другие данные о доске, если нужно */}
//     </div>
//     <div className="flex space-x-2">
//       <Button onClick={() => onEdit(board)}>Edit</Button>
//       <Button color="failure" onClick={() => onDelete(board.id)}>Delete</Button>
//     </div>
//   </div>
// );

// export default BoardItem;

// import React from 'react';
// import { Button } from 'flowbite-react';

// const BoardItem = ({ board, onEdit, onDelete }) => (
//   <div className="flex justify-between items-center p-4 border rounded">
//     <div>
//       <h2 className="text-xl font-semibold">{board.title}</h2>
//       {/* Добавьте другие данные о доске, если нужно */}
//     </div>
//     <div className="flex space-x-2">
//       <Button onClick={() => onEdit(board)}>Edit</Button>
//       <Button color="failure" onClick={() => onDelete(board.id)}>Delete</Button>
//     </div>
//   </div>
// );

// export default BoardItem;


// import React from 'react';
// import { Button } from 'flowbite-react';


// const BoardItem = ({ board, onEdit, onDelete }) => {

//   const handleEdit = () => {
//     // Вызываем функцию onEdit, передавая ей информацию о доске
//     if (onEdit) {
//       onEdit(board);
//     }
//   };

//   const handleDelete = () => {
//     // Вызываем функцию onDelete, передавая ей ID доски
//     if (onDelete) {
//       onDelete(board.id);
//     }
//   };

//   return (
//     <div className="flex justify-between items-center p-4 border rounded">
//       <div>
//         <h2 className="text-xl font-semibold">{board.title}</h2>
//         {/* Добавьте другие данные о доске, если нужно */}
//       </div>
//       <div className="flex space-x-2">
//         <Button onClick={handleEdit}>Edit</Button>
//         <Button color="failure" onClick={handleDelete}>Delete</Button>
//       </div>
//     </div>
//   );
// };

// export default BoardItem;


// import React from 'react';

// const BoardItem = ({ board, onEdit, onDelete }) => {

//   const handleClickBoard = () => {
//     if (onEdit) {
//       onEdit(board);
//     }
//   };

//   const handleDeleteBoard = () => {
//     if (onDelete) {
//       onDelete(board.id);
//     }
//   };

//   return (
//     <div className="flex justify-between items-center p-4 border rounded" onClick={handleClickBoard}>
//       <div>
//         <h2 className="text-xl font-semibold">{board.title}</h2>
//         {/* Добавьте другие данные о доске, если нужно */}
//       </div>
//       <button onClick={handleDeleteBoard}>Delete</button>
//     </div>
//   );
// };

// export default BoardItem;


import React from 'react';

const BoardItem = ({ board, onClick }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded" onClick={onClick}>
      <div>
        <h2 className="text-xl font-semibold">{board.title}</h2>
        {/* Добавьте другие данные о доске, если нужно */}
      </div>
    </div>
  );
};

export default BoardItem;



