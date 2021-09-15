import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../FakeUsersDatabase";
import "../css/dashboard.css";
import { FaEdit } from "react-icons/fa";
import { Context } from "../context/Context";

function DashBoard() {
  //const [users, setusers] = useState(getUsers());
  const { users, setusers } = useContext(Context);

  const handleDelete = (user) => {
    //console.log("delete clicked", user);
    const new_users = users.filter((u) => u._id !== user._id);
    setusers(new_users);
  };

  return (
    <div className="dashboard">
      <div>
        <div className="create">
          <Link to="/dashboard/new_form">Create New To-Do</Link>
        </div>
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
                  {
                    <Link to={`/dashboard/${user._id}`}>
                      {user.name} <FaEdit />{" "}
                    </Link>
                  }
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
    </div>
  );
}

export default DashBoard;
