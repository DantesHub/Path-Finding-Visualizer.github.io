import { combineReducers } from "redux";
import buttons from "./buttons";
import algorithms from "./algorithms";
import speeds from "./speeds";

export default combineReducers({
  buttons,
  algorithms,
  speeds
});
