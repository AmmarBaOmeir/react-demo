import { ADD_ToDo, REMOVE_ToDo, CLEAR_ToDos, EDIT_ToDo } from "./todoTypes";

export const AddToDo = (id, text) => {
  // console.log("Add To Do: ", text);
  return {
    type: ADD_ToDo,
    id,
    text,
  };
};

export const RemoveToDo = (id) => {
  // console.log("Remove To Do: ", id);

  return {
    type: REMOVE_ToDo,
    id,
  };
};

export const EditToDo = (id, text) => {
  // console.log("End Edit To Do: ", id);

  return {
    type: EDIT_ToDo,
    text,
    id,
  };
};

export const ClearTodos = () => {
  // console.log("Clear all ToDos: ");

  return {
    type: CLEAR_ToDos,
  };
};
