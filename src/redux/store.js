import { createStore, compose } from "redux";
import CombinedReducers from "./reducers";

export const composeEnhancers = (window && (window).REDUX_DEVTOOLS_EXTENSION__COMPOSE) || compose;
const devTools = composeEnhancers();
const applyMiddleware = devTools ? compose( devTools) : compose();
const store = createStore(CombinedReducers, applyMiddleware);

export default store;