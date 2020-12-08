import * as actionTypes from "../constants/actionTypes";

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        loading: action.payload.loading,
      };
    }
    case actionTypes.RETURN_USER_DATA: {
      return {
        ...state,
        user_data: action.payload.user_data,
        loading: action.payload.loading,
      };
    }
    default:
      return state;
  }
}
