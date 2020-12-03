import { call } from "redux-saga/effects";
import { postRegister } from "../../network/api/Register";
// import { requestUsersFromApi } from "../../axios/api/login";
// import { getUsersFromApi } from "../actions/login";

function* handleRegister(action) {
  console.log("saga", action);
  try {
    yield call(postRegister, action.payload.user);
  } catch (error) {
    console.log(error);
  }
}

export { handleRegister };
