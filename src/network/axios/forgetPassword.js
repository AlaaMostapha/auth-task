import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../baseUrl";

//interceptors
axiosInstance.interceptors.request.use((request) => {
  console.log("forget interceptor request", request);
  return request;
});
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("forget handle response", response);
    toast.success("Email is send successfully :) check you email !", {
      position: toast.POSITION.TOP_CENTER,
    });
    return response;
  },
  (error) => {
    const errors = error.response.data.errors;
    errors.map((error, index) => {
      console.log(error.error);
      return toast.error(error.error, {
        position: toast.POSITION.TOP_CENTER,
      });
    });
    return Promise.reject({ ...error });
  }
);

export default axiosInstance;
