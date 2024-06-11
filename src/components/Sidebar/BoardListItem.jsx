// src/components/Sidebar/BoardListItem.js
import React from 'react';

const BoardListItem = ({ board }) => {
  return (
    <div className="board-list-item">
      <h3>{board.title}</h3>
      <p>Icon: {board.icon}</p>
      <p>Background: {board.background}</p>
    </div>
  );
};

export default BoardListItem;
