// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import history from "../../routes/history";
// import { axiosInstance } from "../baseUrl";

// //interceptors
// axiosInstance.interceptors.request.use((request) => {
//   console.log("interceptor request", request);
//   return request;
// });
// axiosInstance.interceptors.response.use(
//   (response) => {
//     console.log("handle response", response);
//     history.push("home");
//     return response;
//   },
//   (error) => {
//     console.log("handle error", error);
//     console.log(error.response);
//     toast.error("your Email or Password is incorret :(", {
//       position: toast.POSITION.TOP_CENTER,
//     });
//     return Promise.reject({ ...error });
//   }
// );

// export default axiosInstance;
