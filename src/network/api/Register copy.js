import axiosInstance from "../axios/Register";

export const postRegister = async (user) => {
  var myHeaders = new Headers();
  myHeaders.append("Accept-Language", "en");
  console.log("user api", user);
  var formdata = new FormData();

  formdata.append("name", user.username);
  formdata.append("email", user.email);
  formdata.append("password", user.password);
  formdata.append("password_confirmation", user.confirmPassword);
  formdata.append("mobile_number", user.phoneNumber);
  console.log("form data", formdata);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };
  // return await axiosInstance.post(requestOptions);
  return await axiosInstance("api/v1/users", { requestOptions });
};
