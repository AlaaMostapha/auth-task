import { call } from "redux-saga/effects";
import { postRegister } from "../../network/api/Register";
import { stopLoader } from "../actions/actions";

function* handleRegister(action) {
  try {
    yield call(postRegister, action.payload.user);
  } catch (error) {
    console.log(error);
    // console.log(yield call(stopLoader));
  }
}

export { handleRegister };
