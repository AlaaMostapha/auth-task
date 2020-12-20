import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../../components/reactHookForm/input";
import CreateButton from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/register";
import { ToastContainer } from "react-toastify";

function Register(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.registerReducer.loading);
  console.log("loading", loading);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  const schema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email format"),
    password: Yup.string().required("Password is required").min(8),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), ""], "Passwords must be matched"),
    phoneNumber: Yup.number().required("Phone number is required"),
  });
  const onSubmit = (values) => {
    // console.log("form state", values);
    dispatch(actions.Registiration(values));
  };
  const { handleSubmit, control, errors } = useForm({
    mode: "onSubmit",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  return (
    <>
      <ToastContainer limit={2}></ToastContainer>
      <h1>Registiration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="username"
          label="Username"
          control={control}
          errors={errors}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          control={control}
          errors={errors}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          control={control}
          errors={errors}
        />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          control={control}
          errors={errors}
        />
        <Input
          type="text"
          name="phoneNumber"
          label="Phone Number"
          control={control}
          errors={errors}
        />

        <CreateButton
          id="registerBtn"
          variant="contained"
          type="submit"
          text="Register"
          color="secondary"
        />
      </form>
    </>
  );
}

export default Register;
