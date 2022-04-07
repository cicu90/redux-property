import { combineReducers } from "redux";
import properties from "./properties/reducer";

const reducers = combineReducers({
  properties,
}
);

export default reducers;