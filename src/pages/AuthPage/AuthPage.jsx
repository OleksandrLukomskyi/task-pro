import { useParams, Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Box, Tabs, Tab } from "@mui/material";
import css from "./AuthPage.module.css";

const AuthPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/auth/${newValue}`);
  };

  return (
    <Box className={css.customContainer}>
      <Tabs
        classes={{
          root: css.customTabs,
          flexContainer: css.customFlexContainer,
          indicator: css.customTabsIndicator,
        }}
        value={id}
        onChange={handleChange}
      >
        <Tab
          label="Registration"
          value="register"
          component={Link}
          to="/auth/register"
          classes={{
            root: css.customTab,
            selected: css.customSelectedTab,
            wrapper: css.customTabWrapper,
            textColorInherit: css.customTabTextColorInherit,
          }}
        />
        <Tab
          label="Log In"
          value="login"
          component={Link}
          to="/auth/login"
          classes={{
            root: css.customTab,
            selected: css.customSelectedTab,
            wrapper: css.customTabWrapper,
            textColorInherit: css.customTabTextColorInherit,
          }}
        />
      </Tabs>
      {id === "login" && <LoginForm />}
      {id === "register" && <RegisterForm />}
    </Box>
  );
};

export default AuthPage;
