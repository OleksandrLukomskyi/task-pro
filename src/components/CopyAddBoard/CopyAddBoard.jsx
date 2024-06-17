import css from "./CopyAddBoard.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addBoard,
  editBoard,
  deleteBoard,
} from "../../redux/boards/operations";

export default function CopyAddBoard({ editBoardId }) {
  const dispatch = useDispatch();

  // створення дошки
  const handleNewSubmit = (values, actions) => {
    dispatch(addBoard(values));
    actions.resetForm();
  };

  console.log(editBoardId);

  // редагування дошки
  const handleEditSubmit = (values, actions) => {
    const editObj = {
      boardId: editBoardId,
      editBoard: values,
    };
    dispatch(editBoard(editObj));
    actions.resetForm();
  };

  // const handleDeleteBoard = (editBoardId) => {
  //   dispatch(deleteBoard(editBoardId));
  // };

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          icon: "//www.gravatar.com/avatar/9f1372100c5cd45a5713d0d8158bea5b?s=250&r=pg",
          background: "Light",
        }}
        //   //www.gravatar.com/avatar/9f1372100c5cd45a5713d0d8158bea5b?s=250&r=pg
        //   Light
        onSubmit={handleNewSubmit}
        // validationSchema={FeedbackSchema}
      >
        <Form autoComplete="off">
          <label>title</label>
          <Field type="text" name="title" />

          <label>icon</label>
          <Field type="text" name="icon" />

          <label>background</label>
          <Field type="text" name="background" />

          <button type="submit">ADD BOARD</button>
        </Form>
      </Formik>

      {"------------------------------------------------------------------"}
      <Formik
        initialValues={{
          title: "",
          icon: "//www.gravatar.com/avatar/9f1372100c5cd45a5713d0d8158bea5b?s=250&r=pg",
          background: "Light",
        }}
        //   //www.gravatar.com/avatar/9f1372100c5cd45a5713d0d8158bea5b?s=250&r=pg
        //   Light
        onSubmit={handleEditSubmit}
        // validationSchema={FeedbackSchema}
      >
        <Form autoComplete="off">
          <label>title</label>
          <Field type="text" name="title" />

          <label>icon</label>
          <Field type="text" name="icon" />

          <label>background</label>
          <Field type="text" name="background" />

          <button type="submit">EDIT BOARD</button>
        </Form>
      </Formik>
    </div>
  );
}
