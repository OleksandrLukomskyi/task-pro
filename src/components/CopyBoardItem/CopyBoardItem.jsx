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
// import { userThema, help } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { editThema } from "../../redux/thema/operations";
import MainDashboard from "../../components/MainDashboard/MainDashboard";

export default function BoardItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColumns());
  }, [dispatch]);

  const [idBoard, setIdBoard] = useState("666b6be207902b2daa80d559");
  // передаємо в стан id колонки
  const [idColumn, setIdColumn] = useState("666e686edba6a962091c7f91");

  //  отримуємо картки
  const handleColumnClick = () => {
    // console.log(idColumn);
    let id = idColumn;
    dispatch(fetchCards(id));
  };

  const allCards = useSelector(selectCards);
  // console.log(allCards);

  // enum: ["dark", "light", "violet"],
  const handleThemaClick = () => {
    const them = { thema: "light" };
    dispatch(editThema(them));
  };

  const handleClick = () => {
    // console.log(idBoard);
    let id = idBoard;
    dispatch(fetchColumns(id));
  };

  const cards = useSelector(selectCards);
  const user = useSelector(selectUser);
  const columns = useSelector(selectColumnsData);

  return (
    <div className={css.container}>
      {"user board-------------------------------------------------"}
      <CopyColumnList />
      <div>
        <button type="button" onClick={handleClick}>
          REQUEST
        </button>
      </div>
      <div>
        <button type="button" onClick={handleThemaClick}>
          REQUEST THEMA
        </button>
      </div>

      <div>
        <button type="button" onClick={handleColumnClick}>
          GET CARDS
        </button>
      </div>
      <MainDashboard />
    </div>
  );
}
