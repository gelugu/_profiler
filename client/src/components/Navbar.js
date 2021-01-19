import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./navbar.css";

export const Navbar = () => {
  const history = useHistory();
  const { logout } = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <nav>
      <div className="nav-container">
        <h1><NavLink to="/" className="nav-logo">_Profiler</NavLink></h1>
        <ul className="nav-list">
          <li className="nav-el">
            <NavLink to="/create">Create</NavLink>
          </li>
          <li className="nav-el">
            <NavLink to="/profiles">Profiles</NavLink>
          </li>
          <li className="nav-el">
            <button className="nav-button" onClick={logoutHandler}>
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
