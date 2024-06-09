import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";

const schema = yup.object().shape({
  name: yup.string().min(2).max(32).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(64).required(),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // Виконання асинхронного запиту для реєстрації
    try {
      const result = await registerUser(data);
      console.log("Registration successful:", result);
      // ескпорт user id  з  result
      const userId = result._id;
      console.log("User ID:", userId);
      // Після успішної реєстрації автоматично логінізувати користувача
      // Сохраняем токен аутентификации в локальном хранилище после регистрации
      localStorage.setItem("authToken", result.token);
      // і перенаправити на /home
      navigate("/home");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register("name")}
        label="Enter your name"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.name}
        helperText={errors.name?.message}
      />
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
        label="Create a password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register Now
      </Button>
    </Box>
  );
};

export default RegisterForm;
