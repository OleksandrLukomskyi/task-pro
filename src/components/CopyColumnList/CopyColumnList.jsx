import css from "./CopyColumnList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchColumns } from "../../redux/columns/operations";
import CopyColumnItem from "../../components/CopyColumnItem/CopyColumnItem";
import { selectColumns } from "../../redux/columns/selectors";

export default function CopyColumnList() {
  const columns = useSelector(selectColumns);
  console.log(columns);

  return (
    <div>
      {"*****************************************************************"}
      <ul className={css.columnList}>
        {columns.map((item) => {
          return (
            <li className={css.columnItem} key={item._id}>
              <CopyColumnItem
                id={item._id}
                boardId={item.board}
                title={item.title}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
