import { ADD_ToDo, REMOVE_ToDo, CLEAR_ToDos, EDIT_ToDo } from "./todoTypes";

const initState = {
  todos: [],
};

const todoReducers = (state = initState, action) => {
  switch (action.type) {
    case ADD_ToDo:
      const obj = {
        ...state,
        todos: [...state.todos, { id: action.id, text: action.text }],
      };
      console.log("todo reducer action : ", obj);
      return obj;
    case REMOVE_ToDo:
      let todos = state.todos.filter((todo) => todo.id !== action.id);
      console.log("from Index Reducer: ", todos);
      return {
        ...state,
        todos,
      };
    case CLEAR_ToDos:
      return { ...state, numOfCakes: 0 };
    default:
      return state;
  }
};

export default todoReducers;
