import { call } from "redux-saga/effects";
import { postRegister } from "../../network/api/Register";
// import { requestUsersFromApi } from "../../axios/api/login";
// import { getUsersFromApi } from "../actions/login";

function* handleRegister(action) {
  console.log("saga", action);
  yield call(postRegister, action.payload.user);
  //  yield put(postRegister(action))
  // console.log("register response", response.data);
}

export { handleRegister };
