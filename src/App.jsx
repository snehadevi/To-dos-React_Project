import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import TodoForm from "./components/TodoForm";
import NotFound from "./components/NotFound";
import { Context } from "./context/Context";
import { Users } from "./FakeUsersDatabase";
import { useState } from "react";
function App() {
  const [users, setusers] = useState(Users);
  return (
    <div className="App">
      <Context.Provider value={{ users, setusers }}>
        <div>
          <Switch>
            <Route path="/dashboard/:id" component={TodoForm} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/not_found" component={NotFound} />
            <Redirect from="/" exact to="/dashboard" />
            <Redirect to="/not_found" />
          </Switch>
        </div>
      </Context.Provider>
    </div>
  );
}

export default App;
