import React, { useState } from "react";
import "../ToDoList.css";
import { ToDoItemStyle } from "./ToDoListStyles";
import { RemoveToDo, EditToDo } from "../redux/todoActions";
import { connect } from "react-redux";

function ToDoItem(props) {
  const [isEdit, switchEdit] = useState(false);
  // const [newText, setItemNewText] = useState("");
  const [current, setCurrent] = useState("");

  const validateEditingText = (text) => {
    if (text.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <li key={props.id} className="list-group-item" style={ToDoItemStyle}>
      <div style={{ display: isEdit ? "none" : "inline" }}>{props.text}</div>
      <div
        id="ItemMainActions"
        style={{
          display: isEdit ? "none" : "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          className="remove btn btn-danger mr-1"
          onClick={() => props.RemoveToDo(props.id)}
        >
          Delete
        </div>
        <div
          className="edit btn btn-info"
          onClick={() => {
            switchEdit(!isEdit);
            setCurrent(props.text);
          }}
        >
          {/*onClick={setItemNewText(props.text)} */}
          Edit
        </div>
      </div>

      <div
        style={{
          display: isEdit ? "flex" : "none",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          defaultValue={current}
          style={{ outline: "none", minWidth: "16rem", width: "100%" }}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
        />
        <div
          id="ItemEditAction"
          className="edit btn btn-info ml-1"
          onClick={() => {
            if (validateEditingText(current)) {
              // console.log("newText edit text: ", cu);

              props.EditToDo(props.id, current);
              switchEdit(!isEdit);
              setCurrent("");
              // window.location.reload();
              // console.log("SAVED");
            } else {
              alert("can not be empty!");
              // console.log("Empty Text");
            }
          }}
        >
          Save
        </div>
        <div
          id="ItemEditAction"
          className="edit btn btn-info ml-1"
          onClick={() => {
            switchEdit(!isEdit);
            // console.log("Text Edit Canceled");
          }}
        >
          Cancel
        </div>
      </div>
    </li>
  );
}

export default connect(
  (state) => {
    // console.log("from connect", state);
    return state;
  },
  { RemoveToDo, EditToDo }
)(ToDoItem);
