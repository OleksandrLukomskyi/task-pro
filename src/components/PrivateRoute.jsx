import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectRefreshing } from "../redux/auth/selectors";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);

  return isLoggedIn || isRefreshing ? (
    Component
  ) : (
    <Navigate to={redirectTo}></Navigate>
  );
};
