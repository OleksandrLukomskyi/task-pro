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
      setCardPriority("Low");
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
            <div>
              <label>
                <input
                  type="radio"
                  value="Low"
                  checked={cardPriority === "Low"}
                  onChange={(e) => setCardPriority(e.target.value)}
                />
                <span className={css.radioLabel} style={{ color: "#E09CB5" }}>
                  Low
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Medium"
                  checked={cardPriority === "Medium"}
                  onChange={(e) => setCardPriority(e.target.value)}
                />
                <span className={css.radioLabel} style={{ color: "#BEDBB0" }}>
                  Medium
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="High"
                  checked={cardPriority === "High"}
                  onChange={(e) => setCardPriority(e.target.value)}
                />
                <span className={css.radioLabel} style={{ color: "#8FA1D0" }}>
                  High
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  value="Critical"
                  checked={cardPriority === "Critical"}
                  onChange={(e) => setCardPriority(e.target.value)}
                />
                <span className={css.radioLabel} style={{ color: "#000000" }}>
                  Critical
                </span>
              </label>
            </div>
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
