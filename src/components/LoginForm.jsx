import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/auth/operations";
import { selectLoading, selectError } from "../redux/auth/selectors";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(64).required(),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  // об'єкт конфігурації параметрів хука useForm
  const {
    register, // функція реєстрації кожного поля у формі
    handleSubmit, // обробник валідації форми, передає дані форми у метод обробки onSubmit
    formState: { errors }, // Об'єкт з помилками валідації для кожного поля форми
  } = useForm({
    resolver: yupResolver(schema), // використання схеми валідації Yup
  });

  const onSubmit = async (data) => {
    console.log("data: ", data);
    try {
      // Отправляем данные на сервер
      const response = await dispatch(logIn(data));

      if (!response.ok) {
        throw new Error("Login failed");
      }
      //
      // Если логин успешный, перенаправляем пользователя на страницу /home
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
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
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
        autoComplete="current-password"
      />
      {error && (
        <Typography color="error" variant="body2" margin="normal">
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ textTransform: "capitalize" }}
        disabled={loading}
      >
        Log In Now
      </Button>
    </Box>
  );
};

export default LoginForm;
