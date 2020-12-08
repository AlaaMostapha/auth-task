import { takeEvery, all } from "redux-saga/effects";
import { handleRegister } from "./register";
import { handleLogin } from "./login";
import { handelForgetPassword } from "./forgetPassword";
import { handelResetPassword } from "./resetPassword";
import * as actionTypes from "../constants/actionTypes";
function* watchAll() {
  yield all([
    takeEvery(actionTypes.REGISTER, handleRegister),
    takeEvery(actionTypes.LOGIN, handleLogin),
    takeEvery(actionTypes.FORGET_PASSWORD, handelForgetPassword),
    takeEvery(actionTypes.RESET_PASSWORD, handelResetPassword),
  ]);
}

export default watchAll;
