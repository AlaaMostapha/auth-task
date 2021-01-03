import axiosInstance from "../baseUrl";

export const postRegister = async (user) => {
  var data = new FormData();

  data.append("name", user.username);
  data.append("email", user.email);
  data.append("password", user.password);
  data.append("password_confirmation", user.confirmPassword);
  data.append("mobile_number", user.phoneNumber);

  var config = {
    method: "post",
    url: "api/v1/users",
    headers: {
      "Accept-Language": "en",
      "X-Api-Key": "boilerplate_web",
    },
    data: data,
    handlerEnabled: false,
  };
  return await axiosInstance(config);
};
