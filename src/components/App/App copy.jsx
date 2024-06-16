import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// -------------------------------------------------------------
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
// --------------------------------------------------------------


import { PrivateRoute } from "../PrivateRoute.jsx";
import { RestrictedRoute } from "../RestrictedRoute.jsx";

import Layout from "../Layout/Layout.jsx";
import LoginForm from "../LoginForm/LoginForm.jsx";
import RegisterForm from "../RegisterForm/RegisterForm.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage.jsx"));
const WelcomePage = lazy(() =>
  import("../../pages/WelcomePage/WelcomePage.jsx")
);
const ScreensPage = lazy(() =>
  import("../../pages/ScreensPage/ScreensPage.jsx")
);
const NotFoundPage = lazy(() => import("../../pages/NotFound/NotFound.jsx"));

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <p>Please wait</p>
    
    </div>
  ) : (
    <Layout>
      <Suspense fallback={"LOADING"}>
        <Routes>
          <Route
            path="/welcome"
            element={
              <RestrictedRoute component={<WelcomePage />}></RestrictedRoute>
            }
          />
          <Route
            path="/auth/:id"
            element={
              <RestrictedRoute component={<AuthPage />}></RestrictedRoute>
            }
          >
            <Route
              path="login"
              element={
                <RestrictedRoute component={<LoginForm />}></RestrictedRoute>
              }
            />
            <Route
              path="register"
              element={
                <RestrictedRoute component={<RegisterForm />}></RestrictedRoute>
              }
            />
          </Route>
          <Route
            path="/home"
            element={
              <PrivateRoute
                component={<HomePage />}
                redirectTo="/welcome"
              ></PrivateRoute>
            }
          />
          <Route path="/home/:boardName" element={<ScreensPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
