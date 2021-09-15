import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 style={{ marginTop: "10%" }}>Not Found</h1>
      <Link to="/dashboard">
        <h5> get back to dashboard!</h5>
      </Link>
    </div>
  );
};

export default NotFound;
