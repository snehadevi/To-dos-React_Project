import logo from "./logo.svg";
import "./App.css";
import { Link, Route } from "react-router-dom";
import DashBoard from "./components/dashboard";
import TodoForm from "./components/form";

function App() {
  return (
    <div className="App">
      <div>
        <Route path="/" exact component={DashBoard} />
        <Route path="/new_form" component={TodoForm} />
      </div>
    </div>
  );
}

export default App;
