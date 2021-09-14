import { Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import NotFound from "./NotFound";
import { Link, Switch } from "react-router-dom";

function Roouting() {
  return (
    <div>
      <Switch>
        <Route path="/dashboard/:id" component={TodoForm} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/not_found" component={NotFound} />
        <Redirect from="/" exact to="/dashboard" />
        <Redirect to="/not_found" />
      </Switch>
    </div>
  );
}
export default Roouting;
