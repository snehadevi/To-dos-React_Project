import React, { useState, useEffect } from "react";
import { getUser, saveUser } from "../FakeUsersDatabase";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="uname">User name:</label>
        <br />
        <input
          autoFocus
          type="text"
          id="name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input
          autoFocus
          type="text"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="to-dos">To-dos:</label>
        <br />
        <input
          autoFocus
          type="text"
          id="todo"
          name="todo"
          value={state.todo}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default TodoForm;
