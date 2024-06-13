import css from "./CopyBoardItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectColumns } from "...";
import { CopyColumnList } from "../../components/CopyColumnList/CopyColumnList";

export default function BoardItem({ id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColumns());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <CopyColumnList boardId={id} />
    </div>
  );
}
