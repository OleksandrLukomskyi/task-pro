import css from "./CopyBoardItem.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchColumns } from "../../redux/columns/operations";
import CopyColumnList from "../../components/CopyColumnList/CopyColumnList";

export default function BoardItem() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColumns());
  }, [dispatch]);

  return (
    <div className={css.container}>
      {"user board-------------------------------------------------"}
      <CopyColumnList />
    </div>
  );
}
