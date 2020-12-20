import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Form/FormikControl";
import CreateButton from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/login";
import { ToastContainer } from "react-toastify";
import * as passwordActions from "../../redux/actions/password";
function Login(props) {
  const dispatch = useDispatch();

  const forgetPassword = (user) => {
    if (user) {
      dispatch(passwordActions.forgetPassword(user));
    }
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid Email format"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    // console.log("form state", values);
    dispatch(actions.Login(values));
    onSubmitProps.setSubmitting(false);
  };

  return (
    <>
      <ToastContainer limit={2}></ToastContainer>
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <>
              <Form>
                <FormikControl
                  control="material-ui-input"
                  type="email"
                  name="email"
                  label="Email"
                  autoComplete="off"
                />
                <FormikControl
                  control="material-ui-input"
                  type="password"
                  name="password"
                  label="Password"
                  autoComplete="off"
                />
                <CreateButton
                  variant="contained"
                  type="submit"
                  text="Login"
                  // background={theme.palette.primary.main}
                  color="secondary"
                  disabled={!formik.isValid || formik.isSubmitting}
                />
              </Form>
              <div>
                If you didn't have an account{" "}
                <Link to="/register"> Register</Link>
                <button onClick={() => forgetPassword(formik.values)}>
                  forget password
                </button>
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
}

export default Login;
