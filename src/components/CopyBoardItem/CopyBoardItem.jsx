import css from "./CopyBoardItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchColumns } from "../../redux/columns/operations";
import CopyColumnList from "../../components/CopyColumnList/CopyColumnList";
import { fetchCards } from "../../redux/cards/operations";
import { fetchBoards } from "../../redux/boards/operations";
import { selectBoard } from "../../redux/boards/selectors";
import { selectCards } from "../../redux/cards/selectors";
import { selectColumnsData } from "../../redux/columns/selectors";
import { userThema, help } from "../../redux/auth/operations";
import { selectThema, selectUser } from "../../redux/auth/selectors";

export default function BoardItem() {
  const dispatch = useDispatch();
  const [idBoard, setIdBoard] = useState("666b6be207902b2daa80d559");

  useEffect(() => {
    dispatch(fetchColumns());
  }, [dispatch]);

  const handleClick = () => {
    console.log(idBoard);
    let id = idBoard;
    dispatch(fetchColumns(id));
  };

  const thema = useSelector(selectThema);
  const cards = useSelector(selectCards);
  const user = useSelector(selectUser);
  const columns = useSelector(selectColumnsData);
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
