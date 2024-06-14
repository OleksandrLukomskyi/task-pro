import { useState } from "react";
import Modal from "react-modal";
import css from "./AddCard.module.css";

export default function AddCard({ columnId, onAddCard }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardPriority, setCardPriority] = useState("low");

  const handleAddCard = () => {
    if (cardTitle.trim() && cardDescription.trim()) {
      onAddCard({
        columnId,
        title: cardTitle,
        description: cardDescription,
        priority: cardPriority,
      });
      setCardTitle("");
      setCardDescription("");
      setCardPriority("low");
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add another card</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add Card"
      >
        <h2>Add Card</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddCard();
          }}
        >
          <input
            type="text"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            placeholder="Card title"
          />
          <textarea
            value={cardDescription}
            onChange={(e) => setCardDescription(e.target.value)}
            placeholder="Card description"
          />
          <label>
            Priority:
            <select
              value={cardPriority}
              onChange={(e) => setCardPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <button type="submit">Add</button>
        </form>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
