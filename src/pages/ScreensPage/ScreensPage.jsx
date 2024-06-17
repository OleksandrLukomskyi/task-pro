import { useState, useEffect } from "react";
import MainDashboard from "../../components/MainDashboard/MainDashboard";
import HeaderDashboard from "../../components/HeaderDashboard/HeaderDashboard";
import { selectBoard } from '../../redux/boards/selectors.js';

import css from "./ScreensPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import BlankBoard from "../../components/BlankBoard/BlankBoard";

export default function ScreensPage() {
  // const dispatch = useDispatch();
  // const [hasBoards, setHasBoards] = useState(true);
  const boards = useSelector(selectBoard);


  // useEffect(() => {
  //   const checkBoards = async () => {
  //     // Імітація перевірки з сервера
  //     const boards = await getBoards();
  //     setHasBoards(boards.length > 0);
  //   };

  //   checkBoards();
  // }, []);

  return (
    <div className={css.screensPage}>
    <HeaderDashboard boardName="Current Board" />
    {boards.length > 0 ? (
        <MainDashboard />
    ) : (
        <BlankBoard/>
    )}
</div>
  );
}