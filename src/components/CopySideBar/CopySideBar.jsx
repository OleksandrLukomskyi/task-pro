import { useSelector, useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import css from "./CopySideBar.module.css";
import CopyBoardList from "../../components/CopyBoardList/CopyBoardList";
import { fetchBoards } from "../../redux/boards/operations";
import { getBoard, deleteBoard } from "../../redux/boards/operations";
import { createColumn } from "../../redux/columns/operations";
import CopyAddBoard from "../../components/CopyAddBoard/CopyAddBoard";

export default function CopySideBar({ getId }) {
  const dispatch = useDispatch();
  // Ініціалізуємо стан для збереження id дошки
  let [oneBoardId, setoneBoardId] = useState("");

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  // title не потрібен (для прикладу передачі пропсів)

  const handleRender = (title, boardId) => {
    // console.log(`boardId ${title}: ${boardId}`);

    // передаємо в стан id дошки
    setoneBoardId((oneBoardId = boardId));
    getId(oneBoardId);
  };

  // console.log(oneBoardId);

  // функція сворення нової колонки (форма внизу файла)
  const handleColumnSubmit = (evt) => {
    evt.preventDefault();
    console.log(oneBoardId);
    const form = evt.target;
    const { formTitle } = form.elements;
    let newObj = {
      boardId: oneBoardId,
      title: formTitle.value,
    };

    dispatch(createColumn(newObj));
    form.reset();
  };

  // функція видалення дошки по id
  const handleDeleteBoard = () => {
    dispatch(deleteBoard(oneBoardId));
  };

  return (
    <div className={css.container}>
      {/* передаємо id дошки для редагування */}
      <CopyAddBoard editBoardId={oneBoardId} />
      {"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"}
      <CopyBoardList handleRender={handleRender} />
      {"##################"}

      <div>
        <button type="button" onClick={handleDeleteBoard}>
          DELETE BOARD
        </button>
      </div>

      {"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"}
      <div>
        {"Перед створенням колонки оберіть Board (test-2) вище"}
        {/* форма для створення колонки */}
        <form onSubmit={handleColumnSubmit}>
          <input type="text" name="formTitle" />
          <button type="submit">CREATE COLUMN</button>
        </form>
      </div>
    </div>
  );
}
