import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../components/Form/FormikControl";
import CreateButton from "../../components/Button/Button";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/password";
function ResetPassword() {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required").min(8),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), ""], "Passwords must be matched"),
  });
  const onSubmit = (values, onSubmitProps) => {
    // console.log("form state", values);
    dispatch(actions.resetPassword(values));
    onSubmitProps.setSubmitting(false);
  };
  return (
    <>
      <h1>Login</h1>
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
                label="Confrim Password"
                autoComplete="off"
              />
              <CreateButton
                variant="contained"
                type="submit"
                text="Reset Password"
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

export default ResetPassword;
