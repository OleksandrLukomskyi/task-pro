import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { selectLoading, selectError } from "../../redux/auth/selectors";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(64).required(),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [showPassword, setShowPassword] = useState(false);

  // об'єкт конфігурації параметрів хука useForm
  const {
    register, // функція реєстрації кожного поля у формі
    handleSubmit, // обробник валідації форми, передає дані форми у метод обробки onSubmit
    formState: { errors }, // Об'єкт з помилками валідації для кожного поля форми
    reset,
  } = useForm({
    resolver: yupResolver(schema), // використання схеми валідації Yup
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    // Виконання запиту для login
    dispatch(logIn(data))
      .then((result) => {
        if (result.error && result.error.message == "Rejected") {
          console.log(result.payload.response.data.message);
        } else {
          // Если логин успешный, перенаправляем пользователя на страницу /home
          navigate("/home");
          reset();
        }
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      borderRadius={8}
    >
      <TextField
        {...register("email")}
        label="Enter your email"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
        autoComplete="email"
      />
      <TextField
        {...register("password")}
        label="Confirm a password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
        autoComplete="current-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                edge="end"
                style={{ color: "var(--text-color)" }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      {error && (
        <Typography color="error" variant="body2" margin="normal">
          {error.message}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ textTransform: "capitalize" }}
        disabled={loading}
        fullWidth
      >
        Log In Now
      </Button>
    </Box>
  );
};

export default LoginForm;
