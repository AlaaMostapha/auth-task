const { postRegister } = require("./Register");
jest.mock("../../../__mocks__/axios.js");

const data = {
  data: {
    errors: [
      { type: "email", error: "The email has already been taken" },
      { type: "mobile_number", error: "The mobile number is invalid" },
    ],
  },
};
test("test regiester", () => {
  expect(postRegister()).toBe(data);
});
