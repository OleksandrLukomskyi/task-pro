import css from "./CopyAddBoard.module.css";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addBoard } from "../../redux/boards/operations";

export default function CopyAddBoard() {
  const dispatch = useDispatch();
  const handleNewSubmit = (values, actions) => {
    dispatch(addBoard(values));
    actions.resetForm();
  };
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

          <button type="submit">EDIT BOARD</button>
        </Form>
      </Formik>
    </div>
  );
}
