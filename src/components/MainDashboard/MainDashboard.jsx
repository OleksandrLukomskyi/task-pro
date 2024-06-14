import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createColumn,
  deleteColumn,
  editColumn,
} from "../../redux/columns/slice";
import { addCard } from "../../redux/cards/slice";
import Btn from "../Btn/Btn";
import Modal from "react-modal";
import Column from "../Column/Column";
import css from "./MainDashboard.module.css";
import AddCard from "./cards/AddCard";

Modal.setAppElement("#root");

export default function MainDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns.items);

  const handleAddColumn = () => {
    if (newColumnTitle.trim()) {
      dispatch(createColumn({ title: newColumnTitle }));
      setNewColumnTitle("");
      setIsModalOpen(false);
    }
  };

  const handleDeleteColumn = (_id) => {
    dispatch(deleteColumn(_id));
  };

  const handleEditColumn = (_id, title) => {
    dispatch(editColumn({ _id, title }));
  };

  const handleAddCard = (newCard) => {
    dispatch(addCard(newCard));
  };

  return (
    <div>
      {columns.map((column) => (
        <div key={column.id}>
          <Column
            column={column}
            onDelete={handleDeleteColumn}
            onEdit={handleEditColumn}
          />
          <AddCard columnId={column.id} onAddCard={handleAddCard} />
        </div>
      ))}

      <Btn onClick={() => setIsModalOpen(true)}>
        <svg className={css.icon_plus}>
          <use xlinkHref="#icon-plus" />
        </svg>
        Add another column
      </Btn>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Column"
      >
        <h2>Add Column</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddColumn();
          }}
        >
          <input
            type="text"
            value={newColumnTitle}
            onChange={(e) => {
              setNewColumnTitle(e.target.value);
            }}
            placeholder="Column title"
          />
          <button type="submit">Add</button>
        </form>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
