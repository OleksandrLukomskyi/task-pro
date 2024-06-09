import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(64).required(),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null); // Состояние для ошибок
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      // Отправляем данные на сервер
      const response = await fetch(
        "https://project-back-codewave1-rqmw.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Login failed");
      }

      // Если логин успешный, перенаправляем пользователя на страницу /home
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Login failed. Please try again."); // Устанавливаем ошибку в состояние
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      display="flex"
      flexDirection="column"
      borderRadius={8}
      height={424}
      width={508}
    >
      <TextField
        {...register("email")}
        label="Enter your email"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
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
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Log In Now
      </Button>
    </Box>
  );
};

export default LoginForm;
