import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducers from "./authReducer";
import streamReducers from "./streamReducer";
export default combineReducers({
  auth: authReducers,
  streams: streamReducers,
  form: formReducer,
});
