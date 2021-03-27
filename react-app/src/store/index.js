import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import modalReducer from "./modal";
import spotslistReducer from "./spotslist";
import sessionReducer from "./session";
import spotReducer from "./spot";

const rootReducer = combineReducers({
  session: sessionReducer,
  modal: modalReducer,
  spotslist: spotslistReducer,
  spot: spotReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
