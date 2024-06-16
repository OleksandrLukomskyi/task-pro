import css from "./CopyBoardItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchColumns } from "../../redux/columns/operations";
import CopyColumnList from "../../components/CopyColumnList/CopyColumnList";
import { fetchCards } from "../../redux/cards/operations";
import { fetchBoards } from "../../redux/boards/operations";
import { selectBoard } from "../../redux/boards/selectors";
import { selectCards } from "../../redux/cards/selectors";
import { selectColumns } from "../../redux/columns/selectors";
import { userThema, help } from "../../redux/auth/operations";
import { selectThema, selectUser } from "../../redux/auth/selectors";

export default function BoardItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColumns());
  }, [dispatch]);
  //  для хелп потрібен емайл, передивитися схему теми
  const columnId = "";
  const boardId = "666b6be207902b2daa80d559";
  const handleClick = () => {
    dispatch(fetchColumns(boardId));
  };

  const thema = useSelector(selectThema);
  const cards = useSelector(selectCards);
  const user = useSelector(selectUser);
  const columns = useSelector(selectColumns);
  console.log(columns);

  return (
    <div className={css.container}>
      {"user board-------------------------------------------------"}
      <CopyColumnList />
      <div>
        <button type="button" onClick={handleClick}>
          REQUEST
        </button>
      </div>
    </div>
  );
}
