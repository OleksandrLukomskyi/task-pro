// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { TextField, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// ------------------------------------------------
import { register } from "../auth/operations";
// ------------------------------------------------

import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { useId } from "react";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

const RegisterForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log("hello");
    dispatch(register(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ userName: "", email: "", password: "" }}
      onSubmit={handleSubmit}
      //   validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor={nameFieldId}>
          Username
        </label>
        <Field
          className={css.input}
          type="text"
          name="userName"
          id={nameFieldId}
        />

        <label className={css.label} htmlFor={emailFieldId}>
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          name="email"
          id={emailFieldId}
        />

        <label className={css.label} htmlFor={passwordFieldId}>
          password
        </label>
        <Field
          className={css.input}
          type="password"
          name="password"
          id={passwordFieldId}
        />
        <button className={css.button} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
