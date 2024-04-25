import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./user-reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  userReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
