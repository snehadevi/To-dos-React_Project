import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import TodoForm from "./components/TodoForm";
import NotFound from "./components/NotFound";
import { Context } from "./context/Context";
import { Users } from "./FakeUsersDatabase";
import { useState } from "react";
import Routing from "./components/Routing";
function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
