import axios from "axios";
import * as Handlers from "./interceptors";
export const axiosInstance = axios.create({
  baseURL: "https://boiler-stage.ibtikar.sa/",
});

axiosInstance.interceptors.request.use((request) =>
  Handlers.requestHandler(request)
);
axiosInstance.interceptors.response.use(
  (response) => Handlers.responseHandler(response),
  (error) => Handlers.errorHandler(error)
);

export default axiosInstance;
