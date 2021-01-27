// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import rootReducer from "./rootReducer";

// const initalState = {

// }

// const middleware = [thunk]
// const store = createStore(rootReducer, initalState, applyMiddleware(...middleware))

// export default store;


import { applyMiddleware, createStore, compose } from 'redux';
import promise from 'redux-promise-middleware';
import rootReducer from './rootReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(promise);
const store = createStore(rootReducer, composeEnhancers(middleware));
export default store;