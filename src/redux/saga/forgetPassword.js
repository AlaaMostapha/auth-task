import { call } from "redux-saga/effects";
import { forgetPassword } from "../../network/api/forgetPassword";

function* handelForgetPassword(action) {
  try {
    const response = yield call(forgetPassword, action.payload.user);
    console.log("forget pass response", response);
  } catch (error) {
    // console.log(error);
  }
}

export { handelForgetPassword };
