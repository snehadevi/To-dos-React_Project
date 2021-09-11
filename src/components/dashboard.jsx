import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../FakeUsersDatabase";
import "../css/dashboard.css";

function DashBoard() {
  //const users_list = getUsers();
  const [users, setusers] = useState(getUsers());

  const handleDelete = (user) => {
    //console.log("delete clicked", user);
    const new_users = users.filter((u) => u._id !== user._id);
    setusers(new_users);
  };

  return (
    <React.Fragment>
      <div>
        <Link to="/dashboard/new_form">Create New User</Link>
        <table>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>To-dos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  {<Link to={`/dashboard/${user._id}`}>{user.name}</Link>}
                </td>
                <td>{user.email}</td>
                <td>{user.todo}</td>
                <td>
                  <button type="button" onClick={() => handleDelete(user)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default DashBoard;
