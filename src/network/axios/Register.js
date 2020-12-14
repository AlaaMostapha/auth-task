import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../baseUrl";

//interceptors
axiosInstance.interceptors.request.use((request) => {
  return request;
});
axiosInstance.interceptors.response.use(
  (response) => {
    toast.success("Success !", {
      position: toast.POSITION.TOP_CENTER,
    });
    return response;
  },
  (error) => {
    const errors = error.response.data.errors;
    errors.map((error, index) => {
      return toast.error(error.error, {
        position: toast.POSITION.TOP_CENTER,
      });
    });

    return Promise.reject({ ...error });
  }
);

export default axiosInstance;
