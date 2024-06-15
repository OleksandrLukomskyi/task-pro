import { useState } from "react";
import Modal from "react-modal";
import css from "./AddCard.module.css";

export default function AddCard({ columnId, boardId, onAddCard }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");
  const [cardPriority, setCardPriority] = useState("Low");
  const [cardDeadline, setCardDeadline] = useState("");

  const handleAddCard = () => {
    if (cardTitle.trim() && cardDescription.trim() && cardDeadline.trim()) {
      onAddCard({
        columnId,
        title: cardTitle,
        description: cardDescription,
        priority: cardPriority,
        deadline: new Date(cardDeadline).toISOString(),
        board: boardId,
      });
      setCardTitle("");
      setCardDescription("");
      setCardPriority(" Low");
      setCardDeadline("");
      setIsModalOpen(false);
    } else {
      alert("Please fill in all fields.");
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
            required
          />
          <textarea
            value={cardDescription}
            onChange={(e) => setCardDescription(e.target.value)}
            placeholder="Card description"
            required
          />
          <label>
            Priority:
            <select
              value={cardPriority}
              onChange={(e) => setCardPriority(e.target.value)}
              required
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <label>
            Deadline:
            <input
              type="datetime-local"
              value={cardDeadline}
              onChange={(e) => setCardDeadline(e.target.value)}
              required
            />
          </label>
          <button type="submit">Add</button>
        </form>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}
