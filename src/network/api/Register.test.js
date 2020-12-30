import "regenerator-runtime/runtime";
import mockAxios from "axios";
// const postRegister = require("./Register");
import { postRegister } from "./Register";
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
it("check user register", async () => {
  mockAxios.mockResolvedValue({
    data: [data],
  });
  const result = await postRegister(data);
  const response = {
    data: [
      {
        data: {
          name: "alaa",
          email: "alaa.moustafa@ibtikar.net.sa",
          password: "12345678",
          password_confirmation: "12345678",
          mobile_number: "01150550943",
        },
      },
    ],
  };
  expect(result).toEqual(response);
});

it.todo("Registeration");
