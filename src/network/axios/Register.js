import * as Handlers from "../handlers/Register";
import { axiosInstance } from "../baseUrl";

//interceptors
axiosInstance.interceptors.request.use((request) =>
  Handlers.handleRequest(request)
);
axiosInstance.interceptors.response.use(
  (response) => Handlers.handleResponse(response),
  (error) => Handlers.handleError(error)
);

export default axiosInstance;
