

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
