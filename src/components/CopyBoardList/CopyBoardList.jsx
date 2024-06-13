import { useSelector, useDispatch } from "react-redux";
import css from "./CopyBoardList.module.css";
import { selectBoard } from "../../redux/boards/selectors";

export default function BoardList({ handleRender }) {
  const boards = useSelector(selectBoard);

  // console.log(boards);
  console.log(boards.boards);

  return (
    <div className={css.container}>
      <ul className={css.boardList}>
        {boards.map((item) => {
          return (
            <li className={css.boardItem} key={item.id}>
              <button
                id={item.id}
                type="button"
                onClick={() => handleRender(id)}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
