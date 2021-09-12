import React, { useState, useEffect } from "react";
import { getUser, saveUser } from "../FakeUsersDatabase";
import "../css/form.css";

function TodoForm({ match, history }) {
  //console.log(match);
  //console.log(history);
  const [state, setState] = useState({
    name: "",
    email: "",
    todo: "",
  });

  const handleChange = (e) => {
    //console.log(e);
    const inputValue = e.target.value;
    //console.log(inputValue);
    const key = e.target.name;
    //console.log(key);
    setState({ ...state, [key]: inputValue });
    //console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUser(state);
    console.log("Submitted");
    history.push("/dashboard");
  };

  useEffect(() => {
    const userId = match.params.id;
    //console.log(userId);

    if (userId === "new_form") return;

    const user = getUser(userId);
    if (!user) return history.replace("/not_found");

    setState(user);
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="uname">User name:</label>
          </div>
          <div className="col-75">
            <input
              placeholder="Enter Name"
              autoFocus
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email:</label>
          </div>
          <div className="col-75">
            <input
              placeholder="Enter Email"
              autoFocus
              type="text"
              id="email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="to-dos">To-dos:</label>
          </div>
          <div className="col-75">
            <textarea
              placeholder="Write To-do...."
              style={{ height: 200 }}
              autoFocus
              type="text"
              id="todo"
              name="todo"
              value={state.todo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
