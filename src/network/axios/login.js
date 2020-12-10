import { axiosInstance } from "../baseUrl";
import * as Handlers from "../handlers/login";

//interceptors
axiosInstance.interceptors.request.use((request) =>
  Handlers.handleRequest(request)
);
axiosInstance.interceptors.response.use(
  (response) => Handlers.handleResponse(response),
  (error) => Handlers.handleError(error)
);

export default axiosInstance;
