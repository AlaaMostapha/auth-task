import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "../routes/history";
export const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty("handlerEnabled") && config.handlerEnabled
    ? true
    : false;
};
export const requestHandler = (request) => {
  if (isHandlerEnabled(request)) {
    console.log("interceptor request", request);
  }
  return request;
};
export const responseHandler = (response) => {
  console.log(response);
  if (isHandlerEnabled(response.config)) {
    console.log("response", response);
    toast.success("Success !", {
      position: toast.POSITION.TOP_CENTER,
    });
    history.push("home");
  }
  // if () {
  //   history.push("home");
  // }
  return response;
};
export const errorHandler = (error) => {
  const errors = error.response.data.errors;
  console.log("error", error);
  toast.error(error, {
    position: toast.POSITION.TOP_CENTER,
  });
  if (isHandlerEnabled(error.config)) {
    if (errors) {
      errors.map((error, index) => {
        return toast.error(error.error, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    } else {
      return toast.error("Your Email or Password is invalid", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return Promise.reject({ ...error });
};
