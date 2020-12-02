import axios from "axios";
import * as Handlers from "../handlers/Register";

const axiosInstance = axios.create({
  baseURL: "https://boiler-stage.ibtikar.sa/",
});

//interceptors
axiosInstance.interceptors.request.use((request) =>
  Handlers.handleRequest(request)
);
axiosInstance.interceptors.response.use(
  (response) => Handlers.handleResponse(response),
  (error) => Handlers.handleError(error)
);

export default axiosInstance;
