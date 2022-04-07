import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CombinedReducers from "./reducers";

const middleware = applyMiddleware(thunk);
const store = createStore(CombinedReducers, middleware);

export default store;