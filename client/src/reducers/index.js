import { combineReducers } from "redux";
import authReducer from "./authReducer";
import createStreamReducer from "./createStreamReducer";

export default combineReducers({
  auth: authReducer,
  createNewStream: createStreamReducer
});
