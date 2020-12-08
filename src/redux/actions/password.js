import * as actionTypes from "../constants/actionTypes";

export const forgetPassword = (user) => ({
  type: actionTypes.FORGET_PASSWORD,
  payload: {
    user: user,
  },
});

export const resetPassword = (user) => ({
  type: actionTypes.RESET_PASSWORD,
  payload: {
    user: user,
  },
});
