import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/reactHookForm/input";
import CreateButton from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/login";
import { ToastContainer } from "react-toastify";
// import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
function Login(props) {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.loginReducer.loading);
  const defaultValues = {
    email: "",
    password: "",
  };
  const schema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email format"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    // console.log("form state", values);
    dispatch(actions.Login(values));
  };
  const { handleSubmit, control, errors } = useForm({
    mode: "onSubmit",
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  // console.log("form state", formState);
  // const { isDirty, isValid } = formState;
  return (
    <>
      {/* {loading && <LoadingIndicator />} */}
      <ToastContainer limit={2}></ToastContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          name="email"
          label="email"
          control={control}
          errors={errors}
        />
        <Input
          type="password"
          name="password"
          label="password"
          autoComplete="on"
          control={control}
          errors={errors}
        />
        <CreateButton
          variant="contained"
          type="submit"
          text="Login"
          color="secondary"
          // disabled={!isDirty || (isDirty && !isValid)}
        />
      </form>
      <div>
        If you didn't have an account <Link to="/register"> Register</Link>
      </div>
    </>
  );
}

export default Login;
