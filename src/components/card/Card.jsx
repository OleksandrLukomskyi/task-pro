import React from "react";
import EditCard from "./EditCard.jsx";
import { useState } from "react";
import { editCard, moveCard, deleteCard, fetchCards } from "../../redux/cards/operations.js";
import { useDispatch, useSelector } from "react-redux";
import sprite from "../../assets/icons/Sprite.svg"
import css from './Card.module.css';
import {
  selectColumnsData
} from "../../redux/columns/selectors.js";
export default function Card({ id, columnId, title, description, priority, deadline }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const columns = useSelector(selectColumnsData);
  const dispatch = useDispatch();

  const checkDeadline = (deadline) => {
    const today = new Date();
    const deadlineDay = new Date(deadline);
    return today.toDateString() === deadlineDay.toDateString();
  };
  const isDeadlineDay = checkDeadline(deadline);

  
  const handleEditCard = (updateCard) => {
    dispatch(editCard({ cardId: id, updateCard }));
    setIsEditing(false);
  };

  const handleMoveCard = (newColumnId) => {
    dispatch(moveCard({cardId: id, columnId: newColumnId}));
    setIsPopupOpen(false);
  }
  
  const handleDeleteCard = () => {
    dispatch(deleteCard(id));
  }

  return (
    <div className={`${css.card} ${css[`card-${priority.toLowerCase()}`]}`}>
      <div>
      <h4 className={css.title}>{title}</h4>
      <p className={css.description}>{description}</p>
      </div>
      <div className={css.cardDivider}></div>
      <div className={css.cardFooter}>
        <div className={css.priority}>
        <span className={css.priorityTitle}>Priority</span>
        <div className={css.priorityType}>
        <span className={`${css.dot} ${css[`dot-${priority.toLowerCase()}`]}`}></span>
        <span className={css.priorityValue}>{priority}</span>
        </div>
        </div>
        <div className={css.deadline}>
        <span className={css.deadlineTitle}>Deadline</span>
        <span className={css.deadlineValue}>{deadline}</span>
        </div>


        <div className={css.icons}>
        {isDeadlineDay && (
          <svg className={css.logoIcon}>
            <use href={`${sprite}#bell`}></use>
          </svg>
        )}
        <button className={css.deleteCard} onClick={() => setIsPopupOpen(!isPopupOpen)}>
            <svg className={css.logoIcon}>
              <use href={`${sprite}#icon-arrow-circle-broken-right`}></use>
            </svg>   
        </button>
        {isPopupOpen && (
          <div className="popup">
            {columns.map((column) => (
              <div key={column._id} onClick={() => handleMoveCard(column._id)}>
               <span>{column.name}</span>
               <svg className={css.popupIcon}>
                    <use href={`${sprite}#icon-arrow-circle-broken-right`}></use>
                  </svg> 
              </div>
            ))}
          </div>
        )}
        <button className={css.deleteCard} onClick={() => setIsEditing(true)}>
        <svg className={css.logoIcon}>
            <use href={`${sprite}#icon-pencil-01`}></use>
          </svg>
        </button>
        <button className={css.deleteCard} onClick={handleDeleteCard}>
        <svg className={css.logoIcon}>
            <use href={`${sprite}#icon-trash-04`}></use>
          </svg>
        </button>
        </div>
      </div>
      {isEditing && (
        <EditCard
          card={{id, columnId, title, description, priority, deadline}}
          onSave={handleEditCard}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
