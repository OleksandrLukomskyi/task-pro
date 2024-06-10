import { useParams, Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { Box, Tabs, Tab } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import css from "./AuthPage.module.css";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     width: "100%",
//     height: "100vh",
//     backgroundColor: theme.palette.background.default,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   button: {
//     fontSize: "16px",
//     padding: "8px 16px",
//     [theme.breakpoints.up(375)]: {
//       fontSize: "20px",
//       padding: "10px 20px",
//     },
//     [theme.breakpoints.up(768)]: {
//       fontSize: "24px",
//       padding: "15px 30px",
//     },
//     [theme.breakpoints.up(1440)]: {
//       fontSize: "28px",
//       padding: "20px 40px",
//     },
//   },
// }));

const AuthPage = () => {
  // const classes = useStyles(); //makeStyles
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    navigate(`/auth/${newValue}`);
  };

  return (
    <Box className={css.container}>
      <Tabs value={id} onChange={handleChange}>
        <Tab
          className={css.tabLabel}
          label="Registration"
          value="register"
          component={Link}
          to="/auth/register"
          style={{ textTransform: "capitalize" }}
        />
        <Tab
          label="Log In"
          value="login"
          component={Link}
          to="/auth/login"
          style={{ textTransform: "capitalize" }}
        />
      </Tabs>
      {id === "login" && <LoginForm />}
      {id === "register" && <RegisterForm />}
    </Box>
  );
};

export default AuthPage;
