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
      console.log("todo reducer add action : ", obj);
      return obj;
    case REMOVE_ToDo:
      let todos = state.todos.filter((todo) => todo.id !== action.id);
      console.log("from Index  Reducer Remove action: ", todos);
      return {
        ...state,
        todos,
      };
    case EDIT_ToDo:
      let obj1 = state.todos;
      for (let i = 0; i < state.todos.length; i++) {
        // console.log(
        //   "action id: ",
        //   action.id,
        //   "Action id = state.todos id",
        //   obj1[i].id === action.id
        // );

        if (obj1[i].id === action.id) {
          console.log("id found: ", action.id, "Text: ", action.text);
          obj1[i].text = action.text;
          break;
        }
      }
      console.log(
        "todo reducer Edit action : ",
        state.todos,
        "Object values: ",
        obj1
      );

      return { ...state, obj1 };
    case CLEAR_ToDos:
      return { ...state, numOfCakes: 0 };
    default:
      return state;
  }
};

export default todoReducers;
