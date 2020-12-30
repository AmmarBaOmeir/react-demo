import { createStore } from "redux";
import todoReducers from "./todoReducers";

const store = createStore(todoReducers);

export default store;
