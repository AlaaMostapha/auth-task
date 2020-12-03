import * as actionTypes from "../constants/actionTypes";

export const Registiration = (user) => ({
  type: actionTypes.REGISTER,
  payload: {
    user: user,
    loading: true,
  },
});
