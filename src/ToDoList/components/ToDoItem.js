import React from "react";
import "../ToDoList.css";
import { ToDoItemStyle } from "./ToDoListStyles";
import { RemoveToDo, EndEditToDo, StartEditToDo } from "../redux/todoActions";
import { connect } from "react-redux";

let isEdit = false;
const switchEdit = () => {
  if (isEdit === false) {
    isEdit = true;
  } else {
    isEdit = false;
  }
};

function ToDoItem(props) {
  return (
    <li key={props.id} className="list-group-item" style={ToDoItemStyle}>
      <div>{props.text}</div>
      <div
        hidden={!isEdit}
        id="ItemMainActions"
        style={{ display: "flex", justifyContent: "flex-end" }}
        onClick={switchEdit}
      >
        <div
          className="remove btn btn-danger mr-1"
          onClick={() => props.RemoveToDo(props.id)}
        >
          X
        </div>
        <div
          className="edit btn btn-info"
          onClick={() => props.StartEditToDo(props.id)}
        >
          E
        </div>
      </div>

      <div
        id="ItemEditAction"
        className="edit btn btn-info"
        hidden={isEdit}
        onClick={switchEdit}
      >
        Save
      </div>
    </li>
  );
}

export default connect(
  (state) => {
    console.log("from connect", state);
    return state;
  },
  { RemoveToDo, EndEditToDo, StartEditToDo }
)(ToDoItem);
