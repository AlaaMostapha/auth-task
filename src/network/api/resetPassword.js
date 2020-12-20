import { axiosInstance } from "../baseUrl";

export const resetPassword = async (user) => {
  var data = new FormData();
  console.log(user);
  data.append("email", user.email);
  data.append("token", "Ifv7d69yyO");
  data.append("password", user.newPassword);

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
