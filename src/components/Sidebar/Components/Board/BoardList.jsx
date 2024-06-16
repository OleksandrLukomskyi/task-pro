import React from 'react';
import BoardItem from './BoardItem';
import styles from './BoardList.module.css'

const BoardList = ({ boards, onDelete, onEdit }) => {
  if (!Array.isArray(boards)) {
    return <div>Loading...</div>;
  }

  

  return (
    <div className={styles['board-list']}>
      {boards.map(board => (
        <BoardItem key={ board._id} board={board} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default BoardList;





// import { useSelector, useDispatch } from 'react-redux';
// import { selectBoard } from '../../../../redux/boards/selectors';
// import { fetchBoards } from '../../../../redux/boards/operations';
// import { useEffect } from 'react';
// import BoardItem from './BoardItem';
// import css from '../../../CopyBoardList/CopyBoardList';

// const BoardList = () => {
//   const boards = useSelector(selectBoard);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchBoards());
//   }, [dispatch]);

//   return (
//     <div className={css.container}>
//       <ul className={css.boardList}>
//         {boards.map((board) => (
//           <li className={css.boardItem} key={board._id}>
//             <BoardItem board={board} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default BoardList;

