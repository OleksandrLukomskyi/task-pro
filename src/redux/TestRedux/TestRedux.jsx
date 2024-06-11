import LoginForm from "./LoginHvorm";
import RegisterForm from "./RegisterHvorm";
import { useDispatch } from "react-redux";
import { Field, Form, Formik } from "formik";
import { editUser, refreshUser, logOut } from "../auth/operations";
import {
  addBoard,
  fetchBoards,
  getBoard,
  deleteBoard,
  editBoard,
} from "../boards/operations";
import {
  createColumn,
  fetchColumns,
  getColumn,
  editColumn,
  deleteColumn,
} from "../columns/operations";

const addBoardic = {
  title: "Test redux5",
  icon: "//www.gravatar.com/avatar/9f1372100c5cd45a5713d0d8158bea5b?s=250&r=pg",
  background: "Dark",
};

const newBoard = {
  title: "Testic_redux-1-!!!!!!!!!!!!!!!!!!!!!!!!!",
  icon: "//www.gravatar.com/avatar/9f1372100c5cd45a5713d0d8158bea5b?s=250&r=pg",
  background: "Light",
};

const updateObjeect = {
  boardId: "6667c61ef1eaa9ee7163d6b9",
  editBoard: newBoard,
};

// const getBoardic = "6667c9a0f1eaa9ee7163d6bf";

const boardsId = "66682cf7764efb49fe92fe98";

const fetchBoardics = {};

const TestRedux = () => {
  const dispatch = useDispatch();
  // -------------------------------
  const addBoards = () => {
    console.log("add board");
    dispatch(addBoard(addBoardic));
  };

  const FetchBoards = () => {
    dispatch(fetchBoards());
  };

  const GetBoard = () => {
    dispatch(getBoard(boardsId));
  };

  const DeleteBoard = () => {
    dispatch(deleteBoard(boardsId));
  };

  const EditBoard = () => {
    dispatch(editBoard(updateObjeect));
  };

  // const usName = { userName: "egorka" };
  const EditUser = () => {
    dispatch(editUser());
  };

  const CurrentUser = () => {
    dispatch(refreshUser());
  };

  const Logout = () => {
    dispatch(logOut());
  };

  const handleNewSubmit = (values, actions) => {
    dispatch(editUser(values));
    actions.resetForm();
  };
  // 777777777&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  const firstBoard = {
    boardId: boardsId,
    title: "hard task-7",
  };

  const columnId = "66686df9e9ed740a4ca555b0";

  const addColumn = () => {
    dispatch(createColumn(firstBoard));
  };

  const getAllColumns = () => {
    dispatch(fetchColumns());
  };

  const getOneColumn = () => {
    dispatch(getColumn(columnId));
  };

  const updateColm = {
    columnId,
    title: "light task",
  };

  const updateColumn = () => {
    dispatch(editColumn(updateColm));
  };

  const deleteOneColumn = () => {
    dispatch(deleteColumn(columnId));
  };
  // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  // -------------------------------
  return (
    <div>
      <div>Test Redux</div>
      <div>Register</div>
      <RegisterForm />
      <div>login</div>
      <LoginForm />
      <div>
        <button type="button" onClick={addBoards}>
          ADD BOARD
        </button>
        <button type="button" onClick={FetchBoards}>
          FETCH BOARDS
        </button>
        <button type="button" onClick={GetBoard}>
          GET BOARD
        </button>
        <button type="button" onClick={DeleteBoard}>
          DELETE BOARD
        </button>
        <button type="button" onClick={EditBoard}>
          EDIT BOARD
        </button>
      </div>
      <div>
        <button type="button" onClick={EditUser}>
          EDIT USER
        </button>
      </div>
      <div>
        <button type="button" onClick={CurrentUser}>
          CURRENT USER
        </button>
      </div>
      <div>
        <button type="button" onClick={Logout}>
          LOGOUT
        </button>
      </div>
      <div>
        <button type="button" onClick={addColumn}>
          CREATE COLUMN
        </button>
      </div>
      <div>
        <button type="button" onClick={getOneColumn}>
          GET COLUMN
        </button>
      </div>
      <div>
        <button type="button" onClick={getAllColumns}>
          GET COLUMNS
        </button>
      </div>
      <div>
        <button type="button" onClick={updateColumn}>
          UPDATE COLUMN
        </button>
      </div>
      <div>
        <button type="button" onClick={deleteOneColumn}>
          DELETE COLUMN
        </button>
      </div>

      <div>
        {/* -------------------------------------------------------- */}

        <Formik
          initialValues={{ userName: "" }}
          onSubmit={handleNewSubmit}
          // validationSchema={FeedbackSchema}
        >
          <Form autoComplete="off">
            <label>newName</label>
            <Field type="text" name="userName" />

            <button type="submit">EDIT USER</button>
          </Form>
        </Formik>
        {/* ----------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default TestRedux;
