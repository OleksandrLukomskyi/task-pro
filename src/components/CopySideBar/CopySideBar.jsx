import { useSelector, useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import css from "./CopySideBar.module.css";
import CopyBoardList from "../../components/CopyBoardList/CopyBoardList";
import { fetchBoards } from "../../redux/boards/operations";
import { getBoard } from "../../redux/boards/operations";
import { createColumn } from "../../redux/columns/operations";
import CopyAddBoard from "../../components/CopyAddBoard/CopyAddBoard";

export default function CopySideBar() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  // title не потрібен (для прикладу передачі пропсів)
  let idBoard = "";
  const handleRender = (title, boardId) => {
    console.log(`boardId ${title}: ${boardId}`);
    idBoard = boardId;
    // dispatch(createColumn());
  };

  const handleColumnSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const { formTitle } = form.elements;
    let newObj = {
      boardId: idBoard,
      title: formTitle.value,
    };

    dispatch(createColumn(newObj));
    form.reset();
  };

  return (
    <div className={css.container}>
      <CopyAddBoard />
      {"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"}
      <CopyBoardList handleRender={handleRender} />
      {"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&"}
      <div>
        {"Перед створенням колонки оберіть Board (test-2) вище"}
        <form onSubmit={handleColumnSubmit}>
          <input type="text" name="formTitle" />
          <button type="submit">CREATE COLUMN</button>
        </form>
      </div>
    </div>
  );
}
