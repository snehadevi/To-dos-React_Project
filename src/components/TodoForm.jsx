import React, { useState, useEffect, useContext } from "react";
import { getUser, saveUser } from "../FakeUsersDatabase";
import "../css/form.css";
import { Context } from "../context/Context";

function TodoForm({ match, history }) {
  //console.log(match);
  //console.log(history);
  const { users } = useContext(Context);
  const [state, setState] = useState({
    name: "",
    email: "",
    todo: "",
  });

  const getUser = (id) => {
    return users.find((u) => u._id === id);
  };

  const saveUser = (user) => {
    //console.log(user._id);
    let userinfo = users.find((u) => u._id === user._id) || {};
    userinfo.name = user.name;
    userinfo.email = user.email;
    userinfo.todo = user.todo;
    //console.log(userinfo._id, "userinfo");

    if (!userinfo._id) {
      //console.log("hello world!");
      userinfo._id = Date.now().toString();
      users.push(userinfo);
    }

    return userinfo;
  };

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
              required
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
              required
              placeholder="Enter Email"
              autoFocus
              type="email"
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
              required
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
