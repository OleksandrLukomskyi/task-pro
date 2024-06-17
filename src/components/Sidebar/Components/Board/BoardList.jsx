import React from 'react';
import BoardItem from './BoardItem';
import styles from './BoardList.module.css';
import { selectBoard } from '../../../../redux/boards/selectors';
import { useSelector } from 'react-redux';

const BoardList = ({ handleBoardId }) => {
  const boards = useSelector(selectBoard);

  if (!Array.isArray(boards)) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles['board-list']}>
      {/* {boards.map((board) => (
        <BoardItem
          key={board._id}
          board={board}
          onClick={() => handleBoardId(board._id)}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))} */}
      <ul>
        {boards.map(board => {
          return (
            <li key={board._id} onClick={() => handleBoardId(board._id)}>
              <BoardItem
                // key={board._id}
                board={board}
                // onClick={() => handleBoardId(board._id)}
                // onDelete={onDelete}
                // onEdit={onEdit}
              />
              {/* <button
                title={board.title}
                type="button"
                onClick={() => handleRender(board._id)}
              >
                {board.title}
              </button> */}
            </li>
          );
        })}
      </ul>
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
