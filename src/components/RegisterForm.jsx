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
import { register } from "../redux/auth/operations";
import { selectLoading, selectError } from "../redux/auth/selectors";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const schema = yup.object().shape({
  userName: yup.string().min(2).max(32).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(64).required(),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  // об'єкт налаштування useForm Деструктуризація
  const {
    register: registerField, // Перейменовання функції register на registerField, щоб уникнути конфлікту імен з іншими частинами коду.
    // Функція - обробляє подання форми, приймає два аргументи: onSubmit (функцію, яка буде викликана після валідації форми) і actions (додаткові дії з формою).
    handleSubmit,
    formState: { errors }, //  Витягує об'єкт errors зі стану форми, який містить всі помилки валідації форми.
    reset, // скидає форму до початкового стану
  } = useForm({
    resolver: yupResolver(schema), // Використовує yupResolver для інтеграції схеми валідації yup з react-hook-form.
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  onSubmit = { handleSubmit };
  const onSubmit = async (data) => {
    console.log("Data:", data);
    // Виконання асинхронного запиту для реєстрації
    try {
      // localStorage.setItem("authToken", " ");
      const result = await dispatch(register(data));

      console.log("Registration successful result:", result);
      if (result.error.message == "Rejected") {
        console.log(result.payload.response.data.message);
      }

      // ескпорт user id  з  result
      const userId = result.payload._id;

      console.log("User ID:", userId);
      console.log("authToken:", result.payload.token);
      // Після успішної реєстрації автоматично логінізувати користувача

      // Сохраняем токен аутентификации в локальном хранилище после регистрации
      localStorage.setItem("authToken", result.payload.token);
      if (error) {
      }
      // і перенаправити на /home або /
      navigate("/home");
      reset(); // Очищаємо поля форми після успішної реєстрації
    } catch (error) {
      console.error("Registration failed:", error.message);
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
      // style={{ color: "var(--text-color)" }}
      style={{ color: "red" }}
    >
      <TextField
        {...registerField("userName")}
        label="Enter your name"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.name}
        helperText={errors.name?.message}
        autoComplete="username"
        style={{ color: "red" }}
      />
      <TextField
        {...registerField("email")}
        label="Enter your email"
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.email}
        helperText={errors.email?.message}
        autoComplete="email"
      />
      <TextField
        {...registerField("password")}
        label="Create a password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        margin="normal"
        fullWidth
        error={!!errors.password}
        helperText={errors.password?.message}
        autoComplete="current-password"
        InputLabelProps={{ style: { color: "var(--text-color)" } }}
        InputProps={{
          style: { color: "var(--text-color)" },
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
        <Typography color="error" variant="body2" marginTop="normal">
          {error.message}
        </Typography>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        style={{ textTransform: "capitalize" }}
        disabled={loading}
      >
        Register Now
      </Button>
    </Box>
  );
};

export default RegisterForm;
