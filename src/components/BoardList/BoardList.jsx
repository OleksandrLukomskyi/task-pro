import { useState, useEffect } from 'react';
import axios from 'axios';
import CreateNewBoardButton from '../CreateNewBoardButton/CreateNewBoardButton';
import styles from './BoardList.module.css';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('https://project-back-codewave1-rqmw.onrender.com/api/boards');
        setBoards(response.data);
      } catch (error) {
        console.error('Error fetching boards:', error);
      }
    };

    fetchBoards();
  }, []);

  const handleBoardCreated = (newBoard) => {
    setBoards([...boards, newBoard]);
  };

  return (
    <div className={styles.boardList}>
      <CreateNewBoardButton onBoardCreated={handleBoardCreated} />
      <ul>
        {boards.map((board) => (
          <li key={board.id} className={styles.boardItem}>
            {board.title}
            {/* Add edit and delete functionality here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
