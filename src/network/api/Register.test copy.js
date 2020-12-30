import "regenerator-runtime/runtime";
import axios from "axios";
import { postRegister } from "./Register";
jest.mock("axios");

afterEach(() => {
  // cleaning up the mess left behind the previous test
  jest.resetModules();
});
const data = {
  data: {
    name: "alaa",
    email: "alaa.moustafa@ibtikar.net.sa",
    password: "12345678",
    password_confirmation: "12345678",
    mobile_number: "01150550943",
  },
};
describe("regiestration", () => {
  it("success", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(postRegister(data)).resolves.toEqual(data);
  });
  it("error", async () => {
    const errorMessage = "Network Error";
    axios.get.mockImplementationOnce(() => {
      Promise.reject(new Error(errorMessage));
    });
    await expect(postRegister(data)).rejects.toThrow(undefined);
  });
});
