import axiosInstance from "../baseUrl";
const X_API_KEY = process.env.REACT_APP_X_API_KEY;
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
      "X-Api-Key": X_API_KEY,
    },
    data: data,
    handlerEnabled: true,
  };
  return await axiosInstance(config);
};
