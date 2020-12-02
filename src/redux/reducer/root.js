import { combineReducers } from "redux";
import registerReducer from "./register";
import loginReducer from "./login";
const rootReducers = combineReducers({
  registerReducer,
  loginReducer,
});

export default rootReducers;
