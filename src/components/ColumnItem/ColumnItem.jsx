import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectCards } from "../../redux/cards/selectors";
import { fetchCards } from "../../redux/cards/operations";
import {
  createColumn,
  deleteColumn,
  editColumn,
  fetchColumns,
} from "../../redux/columns/slice";
import css from "./ColumnItem.module.css";
import sprite from "../../assets/icons/Sprite.svg";
import {
  selectColumnsData,
  selectLoading,
  selectError,
} from "../../redux/columns/selectors";
import Modal from "react-modal";
import Card from "../card/Card.jsx";

export default function ColumnItem({ id, boardId, title, owner }) {
  const dispatch = useDispatch();
  const [idColumn, setIdColumn] = useState(id);
  let [isModalOpen, setIsModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  let [oneBoardId, setoneBoardId] = useState(boardId);

  // useEffect(() => {
  //   dispatch(fetchColumns(oneBoardId));
  // }, [dispatch, oneBoardId]);

  useEffect(() => {
    dispatch(fetchCards(id));
  }, [dispatch]);
  const cards = useSelector(selectCards);

  const handleDeleteColumn = () => {
    dispatch(deleteColumn(idColumn));
  };

  const handleEditColumn = (e) => {
    e.preventDefault();

    let newObj = {
      columnId: idColumn,
      editColumn: {
        title: newColumnTitle,
      },
    };

    dispatch(editColumn(newObj));

    setIsModalOpen(false);
  };

  return (
    <div className={css.columnItem}>
      <div>
        <div className={css.columnHeader}>
          <h3>{`${title}`}</h3>
        </div>
        <ul>
          <li>
            <button type="button" onClick={() => setIsModalOpen(true)}>
              edit
            </button>
          </li>
          <li>
            <button type="button" onClick={handleDeleteColumn}>
              delete
            </button>
          </li>
        </ul>
      </div>

      <p>{`column id: ${id}`}</p>
      <p>{`board id: ${boardId}`}</p>
      <p>{`owner: ${owner}`}</p>
   
      <div className={css.cardsContainer}></div>
      <ul className={css.cardsList}>
        {cards.map((item) => {
          return (
            <li className={css.cardItem} key={item._id}>
              {/* Компонент CARD */}
              <Card
                id={item._id}
                boardId={item.boardId}
                columnId={item.columnId}
                title={item.title}
                description={item.description}
                priority={item.priority}
                deadline={item.deadline}
              />
            </li>
          );
        })}
      </ul>
      <div>
        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Edit Column"
          className={css.modal}
          overlayClassName={css.overlay}
        >
          <div className={css.modalContent}>
            <button
              onClick={() => setIsModalOpen(false)}
              className={css.closeButton}
            >
              <svg className={css.closeIcon}>
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
            <h2 className={css.modalTitle}>Edit Column</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // handleAddColumn();
              }}
              className={css.modalForm}
            >
              <input
                type="text"
                value={newColumnTitle}
                onChange={(e) => setNewColumnTitle(e.target.value)}
                placeholder="Column title"
                className={css.modalInput}
              />
              <button
                type="button"
                onClick={handleEditColumn}
                className={css.modalButton}
              >
                Edit column
              </button>
            </form>
          </div>
        </Modal>

        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
      </div>
    </div>
  );
}
