import { userData } from "./constants";

export const setUsersList = (data) => (dispatch) => {
  dispatch({
    type: userData.SET_USER_DATA,
    data: data,
  });
};

export const resetUserList = (data) => (dispatch) => {
  dispatch({
    type: userData.RESET_USER_DATA,
  });
};
