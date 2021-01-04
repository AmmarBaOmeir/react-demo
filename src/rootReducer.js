import { combineReducers } from "redux";
import todoReducer from "./ToDoList/redux/todoReducers";
import CharacterReducer from "./Characters/redux/CharacterReducers";

const rootReducer = combineReducers({ todoReducer, CharacterReducer });

export default rootReducer;
