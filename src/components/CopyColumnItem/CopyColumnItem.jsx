import css from "./CopyColumnItem.module.css";

export default function CopyColumnItem({ id, boardId }) {
  return (
    <div>
      <p>columnId: {id}</p>
      <p>boardId: {boardId}</p>
    </div>
  );
}
