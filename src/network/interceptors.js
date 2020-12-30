import { toast } from "react-toastify";
// import "react-toastownify/dist/ReactToastify.css";
import history from "../routes/history";
export const isHandlerEnabled = (config = {}) => {
  console.log(config.handlerEnabled);
  return config.hasOwnProperty("handlerEnabled") && config.handlerEnabled
    ? true
    : false;
};
export const requestHandler = (request) => {
  if (isHandlerEnabled) {
    console.log("interceptor request", request);
  }
  return request;
};
export const responseHandler = (response) => {
  console.log(response);
  if (isHandlerEnabled) {
    toast.success("Success !", {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  // if () {
  //   history.push("home");
  // }
  return response;
};
export const errorHandler = (error) => {
  const errors = error.response.data.errors;
  if (isHandlerEnabled) {
    errors.map((error, index) => {
      return toast.error(error.error, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
  }

  return Promise.reject({ ...error });
};
