// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ToDoList from "./ToDoList/ToDoList";
import Characters from "./Characters/Characters";
import CharDetails from "./Characters/components/CharDetails";
import Login from "./Login/Login";
import SaasLand from "./SaasLand/SaasLand";
import UseParamApp from "./useParams/UseParamApp";
import Requests from "./JisrRequests/Requests"

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Link
            className="App-link"
            to="/Home"
            style={{ position: "absolute", left: "0", top: "0" }}
          >
            Home
          </Link>
          <Link className="App-link" to="/Requests">
            Requests
          </Link>
          <Link className="App-link" to="/SaasLand">
            SaasLand
          </Link>
          <Link className="App-link" to="/PeopleList">
            People List
          </Link>
          <Link className="App-link" to="/ToDoList">
            To Do List
          </Link>
          {/* <Link className="App-link" to="/UseParamApp">
            Heros
          </Link> */}
          <Link className="App-link" to="/Login">
            Login
          </Link>
        </header>
        <main style={{ display: "flex", justifyContent: "center" }}>
          {/* <img src="./SaasLand/logo192.png" alt="h" /> */}
          <Switch>
            <Route path="/Requests">
              <Requests />
            </Route>
            <Route path="/SaasLand">
              <SaasLand />
            </Route>
            <Route exact path="/PeopleList">
              <Characters />
            </Route>
            <Route path="/ToDoList">
              <ToDoList />
            </Route>
            <Route path="/PeopleList/:CharId?">
              <CharDetails />
            </Route>
            <Route path="/UseParamApp">
              <UseParamApp />
            </Route>
            <Route path="/Login">
              <Login />
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
  return <h2 style={{ marginTop: "5rem" }}>Home</h2>;
}

export default App;
