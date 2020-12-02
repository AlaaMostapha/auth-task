import { takeEvery, all } from "redux-saga/effects";
import { handleRegister } from "./register";
import { handleLogin } from "./login";
import * as actionTypes from "../constants/actionTypes";
function* watchAll() {
  yield all([
    takeEvery(actionTypes.REGISTER, handleRegister),
    takeEvery(actionTypes.LOGIN, handleLogin),
  ]);
}

export default watchAll;
