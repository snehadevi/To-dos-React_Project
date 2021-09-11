import React, { useState } from "react";
import { Link, Route } from "react-router-dom";

function DashBoard() {
  return (
    <React.Fragment>
      <div>
        <Link to="/new_form">Create New User</Link>
        <table>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>To-dos</th>
            <th></th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              <button type="button">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
            <td>
              <button type="button">Delete</button>
            </td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  );
}

export default DashBoard;
