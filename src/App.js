// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link className="App-link" to="/PeopleList">
            People List
          </Link>
          <Link className="App-link" to="/ToDoList">
            To Do List
          </Link>
        </header>
        <main>
          <Switch>
            <Route path="/PeopleList">
              <PeopleList />
            </Route>
            <Route path="/ToDoList">
              <ToDoList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function PeopleList() {
  return <h2>PeopleList</h2>;
}

function ToDoList() {
  return <h2>ToDoList</h2>;
}

export default App;
