import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import history from "../../routes/history";

export const handleRequest = (request) => {
  console.log("interceptor request", request);
  return request;
};
export const handleResponse = (response) => {
  console.log("handle response", response);
  history.push("home");
  return response;
};
export const handleError = (error) => {
  console.log("handle error", error);
  console.log(error.response);
  toast.error("your Email or Password is incorret :(", {
    position: toast.POSITION.TOP_CENTER,
  });
  return Promise.reject({ ...error });
};
