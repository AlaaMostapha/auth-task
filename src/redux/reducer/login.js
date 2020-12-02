import * as actionTypes from "../constants/actionTypes";

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      console.log("action from reducer", action);
      return {
        ...state,
        user: action.payload.user,
      };
    }
    case actionTypes.RETURN_USER_DATA: {
      return {
        ...state,
        user_data: action.payload.user_data,
      };
    }
    default:
      return state;
  }
}
