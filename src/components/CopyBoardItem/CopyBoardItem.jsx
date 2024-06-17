import css from "./CopyBoardItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchColumns } from "../../redux/columns/operations";
import CopyColumnList from "../../components/CopyColumnList/CopyColumnList";
import { fetchCards, moveCard, addCard } from "../../redux/cards/operations";
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
  const [idColumn, setIdColumn] = useState("666ee140e8ec519583df0d15");
  const [idCard, setIdCard] = useState("6670434cfe887f59396f1d00");

  //  отримуємо картки
  const handleColumnClick = () => {
    // console.log(idColumn);
    let id = "666ee140e8ec519583df0d15";
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

  // Об'єкт створення нової картки ----------------------------------
  const newCard = {
    title: "Test card 7",
    description: "try create-7",
    priority: "Low",
    deadline: "2024-06-17T13:36:06.154Z",
    columnId: "666ee140e8ec519583df0d15",
    board: "666b6be207902b2daa80d559",
  };
  // -----------------------------------------------------------------

  const handleCreateCard = () => {
    dispatch(addCard(newCard));
  };

  // Запит moveCard і параметри необхідні для запиту ----------------
  const newColumnId = "666e686edba6a962091c7f91";
  const currentCardId = "667076585a9508910eb9b572";
  const currentColumn = { columnId: idColumn };
  const queryMoveObj = { newColumnId, currentCardId, currentColumn };

  const handleMoveCardClick = () => {
    dispatch(moveCard(queryMoveObj));
  };
  // -----------------------------------------------------------------

  const cards = useSelector(selectCards);
  const user = useSelector(selectUser);
  const columns = useSelector(selectColumnsData);

  console.log(cards);

  return (
    <div className={css.container}>
      {"user board-------------------------------------------------"}
      <CopyColumnList />
      <div>
        <button type="button" onClick={handleCreateCard}>
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
      <div>
        <button type="button" onClick={handleMoveCardClick}>
          MOVE CARD
        </button>
      </div>
      <MainDashboard />
    </div>
  );
}
