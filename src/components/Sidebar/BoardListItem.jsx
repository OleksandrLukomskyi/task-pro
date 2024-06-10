


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



