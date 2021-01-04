import React from "react";
import ToDoListInput from "./components/ToDoListInput";
import { todoContainer } from "./components/ToDoListStyles";
import ToDoItem from "./components/ToDoItem";
import { connect } from "react-redux";

function ToDoList(props) {
  const renderToDoList = () => {
    const { todos } = props.todoReducer;
    console.log("renderToDoList Props: ", props.todoReducer);
    console.log("renderToDoList todos: ", todos);
    return (
      <ul className="list-group">
        {todos.map((todo) => {
          return <ToDoItem id={todo.id} text={todo.text} />;
        })}
      </ul>
    );
  };

  return (
    <div style={todoContainer}>
      <ToDoListInput />

      <div className="list-container">{renderToDoList()}</div>
    </div>
  );
}

export default connect((state) => {
  // console.log("from connect", state);
  return state;
})(ToDoList);
