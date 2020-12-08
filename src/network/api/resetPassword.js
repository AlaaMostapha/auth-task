import { axiosInstance } from "../baseUrl";

export const resetPassword = async (user) => {
  var data = new FormData();
  console.log(user);
  data.append("email", user.email);
  data.append("token", "");
  data.append("password", user.password);
  data.append("password_confirmation", user.confirmPassword);

  var config = {
    method: "post",
    url: "api/v1/users/password/reset",
    headers: {
      "Accept-Language": "en",
    },
    data: data,
  };

  return await axiosInstance(config);
};
