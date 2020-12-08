import * as actionTypes from "../constants/actionTypes";

export default function registerReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.REGISTER: {
      return {
        ...state,
        user: action.payload.user,
        loading: action.payload.loading,
      };
    }
    case actionTypes.STOP_LOADER: {
      console.log(state, action);
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    default:
      return state;
  }
}
