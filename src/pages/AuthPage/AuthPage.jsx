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
      className={css.container}
      // sx={{ background: "grey", color: "red" }}
    >
      <Tabs
        // className={css.customTabs}
        classes={{ flexContainer: css.customFlexContainer }}
        value={id}
        onChange={handleChange}
        style={{ textTransform: "capitalize" }}
        sx={{
          minHeight: "30px",
          height: "30px",
          // "& .MuiTabs-flexContainer": {
          //   // backgroundColor: "red",
          //   display: "flex",
          //   padding: "0px",
          // },
          // "& .MuiTab-root": {
          //   color: "#FFFFFF", // стилі неактивних вкладок
          //   opacity: "30%",
          //   textTransform: "capitalize",
          //   padding: 0,
          //   border: "solid 1px green",
          //   width: "16px",
          //   // display: flex,
          //   // flexDirection: row,
          // },
          // "& .Mui-selected": {
          //   opacity: "100%", // насиченість активної вкладки
          // },
          // "& .MuiTabs-indicator": {
          //   display: "none", // не відображати індікатор під активной вкладкой
          // },
        }}
      >
        <Tab
          label="Registration"
          value="register"
          // component={Link}
          to="/auth/register"
          style={{ color: "red" }}
          // style={{ color: "var(--text-color-star-white)" }}
        />
        <Tab
          label="Log In"
          value="login"
          // component={Link}
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
