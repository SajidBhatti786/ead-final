import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>
        No such Route Exist! Go back to <Link to="/">Home</Link>
      </h1>
    </div>
  );
}

export default NotFound;
