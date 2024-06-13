import css from "./CopyColumnList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchColumns } from "../../redux/columns/operations";
import { CopyColumnItem } from "../CopyColumnItem/CopyColumnItem";

export default function CopyColumnList({ boardId }) {
  const columns = useSelector(selectColumns);

  return (
    <div>
      <ul className={css.columnList}>
        {columns.map((item) => {
          return (
            //   кнопка з назвою дошки
            <li className={css.columnItem} key={item.id}>
              <CopyColumnItem
                id={item.id}
                title={item.title}
                boardId={boardId}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
