// import React from 'react';
import BoardItem from './BoardItem';

const BoardList = ({ boards, onDelete, onEdit }) => {
  if (!Array.isArray(boards)) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className="board-list">
      {boards.map(board => (
        <BoardItem key={board._id} board={board} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default BoardList;


// import React from 'react';
// import BoardItem from './BoardItem';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import CircularProgress from '@mui/material/CircularProgress';

// const BoardList = ({ boards, onDelete, onEdit }) => {
//   if (!Array.isArray(boards)) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ mt: 2 }}>
//       {boards.length === 0 ? (
//         <Typography variant="body1" color="textSecondary">
//           No boards available.
//         </Typography>
//       ) : (
//         boards.map(board => (
//           <BoardItem key={board.id} board={board} onDelete={onDelete} onEdit={onEdit} />
//         ))
//       )}
//     </Box>
//   );
// };

// export default BoardList;


// import React from 'react';
// import BoardItem from './BoardItem';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import CircularProgress from '@mui/material/CircularProgress';

// const BoardList = ({ boards, onDelete, onEdit }) => {
//   // Проверяем, является ли boards массивом
//   if (!Array.isArray(boards)) {
//     // Если boards не является массивом, отображаем индикатор загрузки
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100%">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   // Преобразуем объект в массив, если это необходимо
//   const boardsArray = Array.isArray(boards) ? boards : Object.values(boards);

//   return (
//     <Box sx={{ mt: 2 }}>
//       {boardsArray.length === 0 ? (
//         <Typography variant="body1" color="textSecondary">
//           No boards available.
//         </Typography>
//       ) : (
//         boardsArray.map(board => (
//           <BoardItem key={board.id} board={board} onDelete={onDelete} onEdit={onEdit} />
//         ))
//       )}
//     </Box>
//   );
// };

// export default BoardList;

