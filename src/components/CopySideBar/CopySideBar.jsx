import { useSelector, useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { useState, useEffect } from "react";
import css from "./CopySideBar.module.css";
import CopyBoardList from "../../components/CopyBoardList/CopyBoardList";
import { fetchBoards } from "../../redux/boards/operations";
import { getBoard, deleteBoard } from "../../redux/boards/operations";
import { createColumn } from "../../redux/columns/operations";
import CopyAddBoard from "../../components/CopyAddBoard/CopyAddBoard";

export default function CopySideBar() {
  const dispatch = useDispatch();
  let [oneBoardId, setoneBoardId] = useState("");

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  // title не потрібен (для прикладу передачі пропсів)
  let idBoard = "";
  const handleRender = (title, boardId) => {
    console.log(`boardId ${title}: ${boardId}`);
    // return { boardtitle: title, boardsId: boardId };
    idBoard = boardId;
    setoneBoardId((oneBoardId = idBoard));
  };

  console.log(oneBoardId);

  const handleColumnSubmit = (evt) => {
    evt.preventDefault();
    console.log(oneBoardId);
    const form = evt.target;
    const { formTitle } = form.elements;
    let newObj = {
      boardId: oneBoardId,
      // boardId: "666b6be207902b2daa80d559",
      title: formTitle.value,
    };

    dispatch(createColumn(newObj));
    form.reset();
  };

  const handleDeleteBoard = () => {
    dispatch(deleteBoard(oneBoardId));
  };

  return (
    <div className={css.container}>
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
        <form onSubmit={handleColumnSubmit}>
          <input type="text" name="formTitle" />
          <button type="submit">CREATE COLUMN</button>
        </form>
      </div>
    </div>
  );
}
