import * as actionTypes from "../constants/actionTypes";

export default function registerReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.REGISTER: {
      return {
        ...state,
        user: action.payload.user,
      };
    }
    default:
      return state;
  }
}
