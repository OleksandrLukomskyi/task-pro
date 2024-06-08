import { useParams, Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { Box, Tabs, Tab } from "@mui/material";
// import css from "./AuthPage.module.css";

const AuthPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/auth/${newValue}`);
  };

  return (
    <Box>
      <Tabs value={id} onChange={handleChange}>
        <Tab label="Log In" value="login" component={Link} to="/auth/login" />
        <Tab
          label="Register"
          value="register"
          component={Link}
          to="/auth/register"
        />
      </Tabs>
      {id === "login" && <LoginForm />}
      {id === "register" && <RegisterForm />}
    </Box>
  );
};

export default AuthPage;
