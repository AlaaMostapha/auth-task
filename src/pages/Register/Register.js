import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/Form/FormikControl";
import CreateButton from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/register";
import { ToastContainer } from "react-toastify";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";

function Register(props) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.registerReducer.loading);
  console.log("loading", loading);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  const validationSchema = Yup.object({
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

  const onSubmit = (values, onSubmitProps) => {
    // console.log("form state", values);
    dispatch(actions.Registiration(values));
    onSubmitProps.setSubmitting(false);
  };
  return (
    <>
      {loading ? <LoadingIndicator /> : null}
      <ToastContainer limit={2}></ToastContainer>
      <h1>Registiration</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="material-ui-input"
                type="text"
                name="username"
                label="Username"
                autoComplete="off"
              />
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
              <FormikControl
                control="material-ui-input"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                autoComplete="off"
              />
              <FormikControl
                control="material-ui-input"
                type="text"
                name="phoneNumber"
                label="Phone Number"
                autoComplete="off"
              />
              <CreateButton
                variant="contained"
                type="submit"
                text="Register"
                color="secondary"
                disabled={!formik.isValid || formik.isSubmitting}
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default Register;
