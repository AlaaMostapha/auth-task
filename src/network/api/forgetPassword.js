import axiosInstance from "../axios/forgetPassword";

export const forgetPassword = async (user) => {
  var data = new FormData();

  data.append("email", user.email);

  var config = {
    method: "post",
    url: "api/v1/users/password/forget",
    headers: {
      "Accept-Language": "en",
    },
    data: data,
  };

  return await axiosInstance(config);
};
