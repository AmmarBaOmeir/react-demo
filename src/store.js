import { createStore } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

// const middleware = applyMiddleware(thunk, logger());
const store = createStore(rootReducer); //middleware

export default store;
