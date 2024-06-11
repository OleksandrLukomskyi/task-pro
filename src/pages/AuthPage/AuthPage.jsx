import { useParams, Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Box, Tabs, Tab } from "@mui/material";
import css from "./AuthPage.module.css";

const AuthPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/auth/${newValue}`);
  };

  return (
    <Box
      className={css.containerl}
      // sx={{ background: "grey", color: "red" }}
    >
      <Tabs value={id} onChange={handleChange}>
        <Tab
          className={css.tabLabel}
          label="Registration"
          value="register"
          component={Link}
          to="/auth/register"
          style={{ color: "red" }}
          // style={{ color: "var(--text-color-star-white)" }}
        />
        <Tab
          className={css.tabLabel}
          label="Log In"
          value="login"
          component={Link}
          to="/auth/login"
          // style={{ textTransform: "capitalize" }}
        />
      </Tabs>
      {id === "login" && <LoginForm />}
      {id === "register" && <RegisterForm />}
    </Box>
  );
};

export default AuthPage;
