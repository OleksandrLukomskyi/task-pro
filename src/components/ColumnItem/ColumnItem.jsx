import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectCards } from '../../redux/cards/selectors';
import { fetchCards } from '../../redux/cards/operations';
import {
  createColumn,
  deleteColumn,
  editColumn,
  fetchColumns,
} from '../../redux/columns/slice';
import { addCard } from '../../redux/cards/operations.js';
import css from './ColumnItem.module.css';
import sprite from '../../assets/icons/Sprite.svg';
import {
  selectColumnsData,
  selectLoading,
  selectError,
} from '../../redux/columns/selectors';
import Modal from 'react-modal';
import Card from '../card/Card.jsx';
import AddCard from '../card/AddCard.jsx';

export default function ColumnItem({ id, boardId, title, owner, idBoard }) {
  const dispatch = useDispatch();
  const [idColumn, setIdColumn] = useState(id);
  let [isModalOpen, setIsModalOpen] = useState(false);
  let [isModalAddCardOpen, setIsModalAddCardOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState('');
  let [oneBoardId, setoneBoardId] = useState(boardId);
  // useEffect(() => {
  //   dispatch(fetchColumns(oneBoardId));
  // }, [dispatch, oneBoardId]);

  console.log(id);
  useEffect(() => {
    dispatch(fetchCards(id, idBoard));
  }, [dispatch, id, idBoard]);
  const cards = useSelector(selectCards);

  const handleDeleteColumn = () => {
    dispatch(deleteColumn(idColumn));
  };

  const handleEditColumn = e => {
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
  const handleCreateCard = newCard => {
    dispatch(addCard(newCard))
      .then(() => dispatch(fetchCards(id)))
      .catch(err => toast.error(`Error adding card: ${err.message}`));
  };
  const handleAddCard = () => {
    setIsModalAddCardOpen(true);
  };
  return (
    <div className={css.columnItem}>
      <div className={css.columnList}>
        <div className={css.columnHeader}>
          <h3 className={css.title}>{`${title}`}</h3>
        </div>
        <ul className={css.buttonList}>
          <li>
            <button
              className={css.btnColumn}
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              <svg className={css.logoIcon}>
                <use href={`${sprite}#icon-pencil-01`}></use>
              </svg>
            </button>
          </li>
          <li>
            <button
              className={css.btnColumn}
              type="button"
              onClick={handleDeleteColumn}
            >
              <svg className={css.logoIcon}>
                <use href={`${sprite}#icon-trash-04`}></use>
              </svg>
            </button>
          </li>
        </ul>
      </div>

      {/* <p>{`column id: ${id}`}</p>
      <p>{`board id: ${boardId}`}</p>
      <p>{`owner: ${owner}`}</p>
    */}
      <div className={css.cardsContainer}></div>
      <ul className={css.cardsList}>
        {cards.map(item => {
          return (
            <li className={css.cardItem} key={item._id}>
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
        <button className={css.buttonAddCard} onClick={handleAddCard}>
          <svg className={css.logoPlus} viewBox="0 0 32 32">
            <rect
              className={css.iconBackground}
              rx="6"
              ry="6"
              width="28"
              height="28"
            />
            <use
              href={`${sprite}#icon-plus`}
              x="7"
              y="7"
              width="14"
              height="14"
            ></use>
          </svg>
          <span className={css.buttonTitle}>Add another card</span>
        </button>

        {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}
        <AddCard
          columnId={id}
          boardId={boardId}
          onAddCard={handleCreateCard}
          isModalOpen={isModalAddCardOpen}
          setIsModalOpen={setIsModalAddCardOpen}
        />
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
              onSubmit={e => {
                e.preventDefault();
                // handleAddColumn();
              }}
              className={css.modalForm}
            >
              <input
                type="text"
                value={newColumnTitle}
                onChange={e => setNewColumnTitle(e.target.value)}
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
