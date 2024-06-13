import { useDispatch } from "react-redux";
import {logOut}  from "../../redux/auth/operations.js";


export default function LogOut() {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div>
        <button type="button" onClick={Logout}>
          LOGOUT
        </button>
      </div>
    </>
  );
}
