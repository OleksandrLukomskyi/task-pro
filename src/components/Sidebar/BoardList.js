// // // src/components/BoardList.js
// // import React from 'react';
// // import BoardItem from './BoardItem';

// // const BoardList = ({ boards, onEdit, onDelete }) => (
// //   <div className="space-y-4">
// //     {boards.map((board) => (
// //       <BoardItem key={board.id} board={board} onEdit={onEdit} onDelete={onDelete} />
// //     ))}
// //   </div>
// // );

// // export default BoardList;

// import React from 'react';

// const BoardList = ({ boards }) => {
//   return (
//     <ul>
//       {boards.map((board) => (
//         <li key={board.id} className="p-2 border-b">
//           {board.title}
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default BoardList;


// import React, { useEffect, useState } from 'react';
// import BoardListItem from './BoardListItem'; // Создайте компонент элемента списка досок


// const BoardList = () => {
//   const [boards, setBoards] = useState([]);

//   useEffect(() => {
//     // Запрос на получение списка досок с бэкенда
//     const fetchBoards = async () => {
//       try {
//         const response = await fetch('your-backend-url/boards');
//         const data = await response.json();
//         setBoards(data);
//       } catch (error) {
//         console.error('Failed to fetch boards:', error);
//       }
//     };

//     fetchBoards();
//   }, []);

//   return (
//     <div className="board-list">
//       <h3>Boards</h3>
//       <ul>
//         {boards.map(board => (
//           <BoardListItem key={board.id} board={board} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BoardList;

// BoardList.js
// import React from 'react';
// import BoardItem from './BoardListItem';

// const BoardList = ({ boards, onEdit, onDelete }) => {

//   const handleClickBoard = (board) => {
//     if (onEdit) {
//       onEdit(board);
//     }
//   };

//   return (
//     <div className="board-list">
//       <h3>Boards</h3>
//       <ul>
//         {boards.map(board => (
//           <BoardItem key={board.id} board={board} onEdit={handleClickBoard} onDelete={onDelete} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BoardList;


import React from 'react';
import BoardItem from './BoardListItem';

const BoardList = ({ boards, onEdit }) => {
  const handleClickBoard = (board) => {
    if (onEdit) {
      onEdit(board);
    }
  };

  return (
    <div className="board-list">
      
     
        {boards.map(board => (
          <BoardItem key={board.id} board={board} onClick={() => handleClickBoard(board)} />
        ))}
      
    </div>
  );
};

export default BoardList;
