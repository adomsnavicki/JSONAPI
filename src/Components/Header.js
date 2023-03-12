import React from "react";
import { NavLink } from "react-router-dom";
import "../Scss/header.scss";

const Header = () => {
  return (
    <nav className="main-navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/home/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/users/">Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/posts/">Posts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/albums/">Albums</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
