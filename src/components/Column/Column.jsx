import { useState, useEffect } from "react";
import Modal from "react-modal";
import css from "./Column.module.css";
import { deleteColumn, editColumn } from "../../redux/columns/slice";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/icons/Sprite.svg";
import AddCard from "../card/AddCard";
import { addCard, editCard, deleteCard } from "../../redux/cards/slice";
import { selectCards } from "../../redux/cards/selectors";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Column({
  column: { _id, title },
  onDeleteColumn,
  onEditColumn,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false);
  const dispatch = useDispatch();
  const boardId = "666b2baa72f2dcf6bb1959d1";

  const cardId = "";
  const [cardsData, setCardsData] = useState([]);
  const cards = useSelector(selectCards);

  console.log(_id);

  console.log(cardsData);

  const handleDelete = () => {
    onDeleteColumn(_id);
  };

  const handleEdit = () => {
    onEditColumn(_id, newTitle);
  };

  const handleAddCard = async (card) => {
    try {
      const response = await axios.post(
        `https://project-back-codewave1-rqmw.onrender.com/api/cards/`,
        { ...card, columnId: _id },
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmUwNjA3MzRjOWFlNjk2OGVlZTgyNCIsImVtYWlsIjoiYW5ueUBnbWFpbC5jb20iLCJpYXQiOjE3MTg0ODY3MjEsImV4cCI6MTcxOTM1MDcyMX0.SSKDFJDnvqkY1tUxZ3azbZWcmWqVC0gLtYSz4KRA4RA",
          },
        }
      );
      setCardsData((prevCards) => [...prevCards, response.data]);
      toast.success("Card added successfully!");
    } catch (error) {
      toast.error("Failed to add card. Please try again.");
    }
    setIsAddCardModalOpen(false);
  };
  ("");

  const fetchCards = async (cardId) => {
    try {
      const response = await axios.get(
        `https://project-back-codewave1-rqmw.onrender.com/api/cards/?boardId=${cardId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmI1NTYxNDhiMTY4ZTdjMWM3NWQ2MSIsImVtYWlsIjoicDNAcC5jb20iLCJpYXQiOjE3MTgzMTAyNDEsImV4cCI6MTcxOTE3NDI0MX0.MB7dXShXVl1aqxvRkxsMvhMAYiuk0LbHjLTeAPOQXdE",
          },
        }
      );
      console.log(response.data);
      setCardsData(response.data.cards);
    } catch (error) {
      console.error("Fetch columns error:", error);
      setCardsData([]);
    }
  };
  useEffect(() => {
    fetchCards(cardId);
  }, [cardId]);

  console.log(cardsData);

  return (
    <div className={css.container_columns}>
      <Toaster />
      <div className={css.column}>
        <h2 className={css.column_title}>{title}</h2>
        <button
          className={css.deleteColumn}
          onClick={() => setIsModalOpen(true)}
        >
          {" "}
          <svg className={css.logoIcon}>
            <use href={sprite + "#icon-pencil-01"}></use>
          </svg>{" "}
        </button>
        <button className={css.deleteColumn} onClick={handleDelete}>
          {" "}
          <svg className={css.logoIcon}>
            <use href={sprite + "#icon-trash-04"}></use>
          </svg>{" "}
        </button>
      </div>

      <div className={css.container_cards}>
        <ul className={css.cards_list}>
          {cardsData.map((card) => (
            <li key={card._id} className={css.card}>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <p>Priority: {card.priority}</p>
              <p>Deadline: {new Date(card.deadline).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.button_add_card}>
        <button onClick={() => setIsAddCardModalOpen(true)}>
          Add another card
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Column"
      >
        <h2>Edit</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEdit();
            setIsModalOpen(false);
          }}
        >
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Column title"
          />
          <button type="submit">Add</button>
        </form>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>

      <AddCard
        columnId={_id}
        boardId={boardId}
        onAddCard={handleAddCard}
        isModalOpen={isAddCardModalOpen}
        setIsModalOpen={setIsAddCardModalOpen}
      />
    </div>
  );
}
