import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FormikControl from "../../components/Form/FormikControl";
import CreateButton from "../../components/Button/Button";
// import theme from "../../Theme/Theme";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/login";
import { ToastContainer } from "react-toastify";
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator";
function Login(props) {
  const { Log_in } = props;
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
    console.log("form state", values);
    Log_in(values);

    onSubmitProps.setSubmitting(false);
  };

  return (
    <>
      {props.loading ? <LoadingIndicator /> : null}
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
              </div>
            </>
          );
        }}
      </Formik>
    </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    Log_in: (user) => dispatch(actions.Login(user)),
  };
}
function mapStateToProps(state) {
  console.log(state);
  return {
    loading: state.loginReducer.loading,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
