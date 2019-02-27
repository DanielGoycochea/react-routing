import React from "react";
import { Link, NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink
            to="/about"
            activeStyle={{ fontWeight: "bold", color: "red" }}
          >
            About
          </NavLink>
        </li>
        <li>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Proyectos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
