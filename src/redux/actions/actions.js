import * as actionTypes from "../constants/actionTypes";

export const stopLoader = () => ({
  type: actionTypes.STOP_LOADER,
  payload: {
    loading: false,
  },
});
