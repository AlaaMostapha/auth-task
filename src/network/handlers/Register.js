// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const handleRequest = (request) => {
//   // console.log("interceptor request", request);
//   return request;
// };
// export const handleResponse = (response) => {
//   // console.log("handle response", response);
//   toast.success("Success !", {
//     position: toast.POSITION.TOP_CENTER,
//   });
//   return response;
// };
// export const handleError = (error) => {
//   // console.log("handle error", error);
//   // console.log(error.response.data.errors);
//   const errors = error.response.data.errors;
//   errors.map((error, index) => {
//     return toast.error(error.error, {
//       position: toast.POSITION.TOP_CENTER,
//     });
//   });

//   return Promise.reject({ ...error });
// };
