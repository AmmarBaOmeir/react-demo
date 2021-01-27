import { combineReducers } from "redux";
import todoReducer from "./ToDoList/redux/todoReducers";
import CharacterReducer from "./Characters/redux/CharacterReducers";
import RequestReducer from "./JisrRequests/redux/RequestReducer"

const rootReducer = combineReducers({ todoReducer, CharacterReducer , RequestReducer});

export default rootReducer;
