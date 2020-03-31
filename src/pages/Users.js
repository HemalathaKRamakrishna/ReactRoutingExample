import React from "react";
import { Link } from "react-router-dom";

export const Users = () => {
  return (
    <>
      <h1>Users Page</h1>
      <ul>
        <li>
          <Link to="/users/1?name=Michael">Michael</Link>
        </li>
        <li>
          <Link to="/users/2?name=Kevin">Kevin</Link>
        </li>
        <li>
          <Link to="/users/3?name=Susan">Susan</Link>
        </li>
      </ul>
    </>
  );
};
