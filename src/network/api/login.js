import axiosInstance from "../baseUrl";
// import { X_API_KEY } from "../apiKeys";
const X_API_KEY = process.env.REACT_APP_X_API_KEY;
export const postLogin = async (user) => {
  var FormData = require("form-data");
  var data = new FormData();
  data.append("email", user.email);
  data.append("password", user.password);
  data.append("client_id", "2");
  data.append("client_secret", "fhMZQxfVREJrII50IeN4ThIZCerdOFjxiRGu7Lc0");

  var config = {
    method: "post",
    url: "/api/v1/users/login",
    headers: {
      "Accept-Language": "en",
      "X-Api-Key": X_API_KEY,
    },
    data: data,
    handlerEnabled: true,
  };
  return await axiosInstance(config);
};
