import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import DashBoard from "./DashBoard";
import TodoForm from "./TodoForm";
import NotFound from "./NotFound";
import { Users } from "../FakeUsersDatabase";
import { useState } from "react";
import { Context } from "../context/Context";

function Routing() {
  const [users, setusers] = useState(Users);
  return (
    <div>
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

export default Routing;
