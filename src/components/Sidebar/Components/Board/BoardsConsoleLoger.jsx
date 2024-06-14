import React, { useEffect } from 'react';
import axios from 'axios';

const BoardsConsoleLogger = () => {
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await axios.get('https://project-back-codewave1-rqmw.onrender.com/api/boards');
        console.log('Boards fetched from backend:', response.data);
      } catch (error) {
        console.error('Error fetching boards:', error);
      }
    };

    fetchBoards();
  }, []);

  return (
    <div>
      <h1>Fetching and Logging Boards from Backend</h1>
      {/* Дополнительный интерфейс или компоненты могут быть добавлены здесь */}
    </div>
  );
};

export default BoardsConsoleLogger;
