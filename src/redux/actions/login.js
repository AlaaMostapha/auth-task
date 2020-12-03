import * as actionTypes from "../constants/actionTypes";

export const Login = (user) => ({
  type: actionTypes.LOGIN,
  payload: {
    user: user,
    loading: true,
  },
});

export const return_user_data = (user) => ({
  type: actionTypes.RETURN_USER_DATA,
  payload: {
    user_data: user,
    loading: false,
  },
});
