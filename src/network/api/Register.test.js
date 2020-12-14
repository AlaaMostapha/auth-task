import "regenerator-runtime/runtime";
import mockAxios from "axios";
const postRegister = require("./Register");
// const axiosInstance = require("../axios/Register");
// jest.mock("axiosInstance");

const data = {
  data: {
    name: "alaa",
    email: "alaa.moustafa@ibtikar.net.sa",
    password: "12345678",
    password_confirmation: "12345678",
    mobile_number: "01150550943",
  },
};
it("check register", async () => {
  mockAxios.mockResolvedValue({
    data: [data],
  });
  const result = await postRegister(data);
  const response = {
    data: {
      errors: [
        { type: "email", error: "The email has already been taken" },
        { type: "mobile_number", error: "The mobile number is invalid" },
      ],
    },
  };
  expect(result).toEqual(response);
});
