import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import css from "./CopySideBar.module.css";
import CopyBoardList from "../../components/CopyBoardList/CopyBoardList";
import { fetchBoards } from "../../redux/boards/operations";
import { getBoard } from "../../redux/boards/operations";

export default function CopySideBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  // const handleRender = (boardId) => {
  //   dispatch(getBoard(boardId));
  // };
  const handleRender = (boardId) => {
    console.log(`boardId: ${boardId}`);
  };

  return (
    <div className={css.container}>
      <CopyBoardList handleRender={handleRender} />
    </div>
  );
}
