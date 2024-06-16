import React from "react";
import Btn from "../Btn/Btn.jsx";
import EditCard from "./EditCard.jsx";
import { useState } from "react";
import { editCard, moveCard, deleteCard } from "../../redux/cards/slice";
import { useDispatch } from "react-redux";

export default function Card({ card, columns }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const dispatch = useDispatch();


  const checkDeadline = (deadline) => {
    const today = new Date();
    const deadlineDay = new Date(deadline);
    return today.toISOString() === deadlineDay.toISOString();
  };
  const isDeadlineDay = checkDeadline(card.deadline);

  
  const handleEditCard = (updateCard) => {
    dispatch(editCard({id: card._id, updateCard: updateCard }));
    setIsEditing(false);
  };

  const handleMoveCard = (columnId) => {
    dispatch(moveCard({id: card._id, columnId}));
    setIsPopupOpen(false);
  }
  
  const handleDeleteCard = () => {
    dispatch(deleteCard(card._id));
  }
  return (
    <div className={`card ${card.priority.toLowerCase()}`}>
      <h4>{card.title}</h4>
      <p>{card.description}</p>
      <div>
        <span>Priority: {card.priority}</span>
        <span>Deadline: {card.deadline}</span>
        {isDeadlineDay && (
          <svg>
            <use xlinkHref="#bell" />
          </svg>
        )}
        <Btn className="btn" onClick={() => setIsPopupOpen(!isPopupOpen)}>
            <svg>
              <use xlinkHref="#arrow-circle-broken-right" />
            </svg>
        </Btn>
        {isPopupOpen && (
          <div className="popup">
            {columns.map((column) => (
              <div key={column.id} onClick={() => handleMoveCard(column.id)}>
                {column.name}
              </div>
            ))}
          </div>
        )}
        <Btn className="btn" onClick={() => setIsEditing(true)}>
        <svg>
            <use xlinkHref="#pencel" />
          </svg>
        </Btn>
        <Btn className="btn" onClick={handleDeleteCard}>
        <svg>
            <use xlinkHref="#trash-04" />
          </svg>
        </Btn>
      </div>
      {isEditing && (
        <EditCard
          card={card}
          onSave={handleEditCard}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
