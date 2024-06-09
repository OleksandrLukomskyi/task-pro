import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectRefreshing } from "../redux/auth/selectors";

export const PrivateRoute = ({
  component: Component,
  redirectTo = "/welcome",
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectRefreshing);

  return isLoggedIn || isRefreshing ? (
    Component
  ) : (
    <Navigate to={redirectTo}></Navigate>
  );
};
