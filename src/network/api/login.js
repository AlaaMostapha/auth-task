import axiosInstance from "../axios/login";

export const postLogin = async (user) => {
  var data = new FormData();

  data.append("email", user.email);
  data.append("password", user.password);
  data.append("client_id", "2");
  data.append("client_secret", "fhMZQxfVREJrII50IeN4ThIZCerdOFjxiRGu7Lc0");

  var config = {
    method: "post",
    url: "api/v1/users/login",
    headers: {
      "Accept-Language": "en",
    },
    data: data,
  };

  return await axiosInstance(config);
};
