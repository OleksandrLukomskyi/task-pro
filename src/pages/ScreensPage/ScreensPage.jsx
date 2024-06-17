import { useState, useEffect } from 'react';
import MainDashboard from '../../components/MainDashboard/MainDashboard';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';
import { selectBoard } from '../../redux/boards/selectors.js';

import css from './ScreensPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import BlankBoard from '../../components/BlankBoard/BlankBoard';
import { getBoard } from '../../redux/boards/operations.js';

export default function ScreensPage({ idBoard }) {
  const dispatch = useDispatch();
  const [titleBoad, setTitleBoad] = useState('');
  const boards = useSelector(selectBoard);
  const [id, setId] = useState(idBoard);

  console.log(boards);

  useEffect(() => {
    if (idBoard == 0) return;
    const getTitle = async () => {
      const board = await dispatch(getBoard(idBoard));
      setTitleBoad(board.payload.title);
    };
    getTitle();
  }, [idBoard, dispatch]);

  useEffect(() => {
    if (boards.length == 0 || idBoard != 0) return;
    setTitleBoad(boards[0].title);
    setId(boards[0]._id);
  }, [boards, idBoard]);

  return (
    <div className={css.screensPage}>
      <HeaderDashboard boardName={titleBoad} />
      {boards.length != 0 ? <MainDashboard idBoard={id} /> : <BlankBoard />}
    </div>
  );
}
