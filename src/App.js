import logo from "./logo.svg";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import TodoForm from "./components/TodoForm";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/dashboard/:id" component={TodoForm} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/not_found" component={NotFound} />
          <Redirect from="/" exact to="/dashboard" />
          <Redirect to="/not_found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
