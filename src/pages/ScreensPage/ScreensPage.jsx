import { useState, useEffect } from 'react';
import MainDashboard from '../../components/MainDashboard/MainDashboard';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import { selectBoard, selectOneBoard } from '../../redux/boards/selectors.js';

import css from './ScreensPage.module.css';
import { useSelector } from 'react-redux';
import BlankBoard from '../../components/BlankBoard/BlankBoard';

export default function ScreensPage() {
  const [titleBoad, setTitleBoad] = useState('');
  const board = useSelector(selectOneBoard);
  const boards = useSelector(selectBoard);

  useEffect(() => {
    if (boards.length == 0) return;
    Object.keys(board).length == 0
      ? setTitleBoad(boards[0].title)
      : setTitleBoad(board.title);
  }, [boards, board]);

  return (
    <div className={css.screensPage}>
      <HeaderDashboard boardName={titleBoad} />
      {boards.length != 0 ? <MainDashboard /> : <BlankBoard />}
    </div>
  );
}
