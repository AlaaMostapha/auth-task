import { call, put } from "redux-saga/effects";
import { resetPassword } from "../../network/api/resetPassword";

function* handelResetPassword(action) {
  try {
    console.log("reset pass saga");
    const response = yield call(resetPassword, action.payload.user);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export { handelResetPassword };
