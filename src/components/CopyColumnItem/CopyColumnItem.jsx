import css from "./CopyColumnItem.module.css";

export default function CopyColumnItem({ id, boardId, title }) {
  return (
    <div>
      <p>{title}</p>
      <p>columnId: {id}</p>
      <p>boardId: {boardId}</p>
    </div>
  );
}
