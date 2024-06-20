import BoardItem from './BoardItem';
import styles from './BoardList.module.css';
import { selectBoard } from '../../../../redux/boards/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoards, getBoard } from '../../../../redux/boards/operations';
import { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

const BoardList = () => {
  const boards = useSelector(selectBoard);

  if (!Array.isArray(boards)) {
    return <BeatLoader color="#FFFFFF" />;
  }

  return (
    <div className={styles['board-list']}>
      <ul>
        {boards.map(board => {
          return (
            <li key={board._id}>
              <BoardItem board={board} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BoardList;
