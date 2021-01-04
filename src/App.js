// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ToDoList from "./ToDoList/ToDoList";
import Characters from "./Characters/Characters";
import CharDetails from "./Characters/components/CharDetails";

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
        <main style={{ display: "flex", justifyContent: "center" }}>
          <Switch>
            <Route path="/PeopleList">
              <Characters />
            </Route>
            <Route path="/ToDoList">
              <ToDoList />
            </Route>
            <Route path="/CharDetails">
              <CharDetails />
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

export default App;
