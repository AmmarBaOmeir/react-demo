import React, { useState } from "react";

import { AddToDo, RemoveToDo, ClearTodos } from "../redux/todoActions";
import { connect } from "react-redux";

import {
  ToDoInputContainer,
  ToDoInputText,
  ToDoInputSubmitBtn,
} from "./ToDoListStyles";

function ToDoListInput(props) {
  const [state, setstate] = useState({
    id: "0",
    text: "",
  });

  return (
    <div style={ToDoInputContainer}>
      <input
        style={ToDoInputText}
        type="text"
        placeholder="what to do"
        value={state.text}
        onChange={(e) =>
          setstate({
            ...state,
            id: Math.random(),
            text: e.target.value,
          })
        }
      />

      <input
        className="btn btn-primary"
        style={ToDoInputSubmitBtn}
        type="submit"
        value="Add"
        onClick={() => {
          props.AddToDo(state.id, state.text);
          setstate({ id: "0", text: "" });
        }}
      />
    </div>
  );
}

export default connect(
  (state) => {
    console.log("from connect", state);
    return state;
  },
  { AddToDo, RemoveToDo, ClearTodos }
)(ToDoListInput);
