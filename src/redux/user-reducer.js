import { userData } from "./constants";

const defaultState = {
  usersList: [],
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case userData.SET_USER_DATA:
      return {
        ...state,
        usersList: action.data,
      };

    case userData.RESET_USER_DATA:
      return {
        ...state,
        usersList: [],
      };

    default:
      return state;
  }
};

export default userReducer;
