import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./Navbar.css";

export const Navbar = () => {
  const history = useHistory();
  const { logout } = useContext(AuthContext);

  const logoutHandler = (event) => {
    event.preventDefault();
    logout();
    history.push("/");
  };

  return (
    <nav className="nav-container">
        <NavLink to="/" className="nav-logo">_Profiler</NavLink>
        <ul className="nav-list">
          <li className="nav-el">
            <NavLink className="nav-link" to="/create">Create</NavLink>
          </li>
          <li className="nav-el">
            <NavLink className="nav-link" to="/profiles">Profiles</NavLink>
          </li>
          <li className="nav-el">
            <button className="nav-button" onClick={logoutHandler}>
              LogOut
            </button>
          </li>
        </ul>
    </nav>
  );
};
