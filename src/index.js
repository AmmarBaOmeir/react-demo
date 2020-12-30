import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import todoReducers from "./ToDoList/redux/todoReducers";

const store = createStore(todoReducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();
