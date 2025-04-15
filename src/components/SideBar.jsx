import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/users"
      >
        Users
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "")}
        to="/posts"
      >
        Posts
      </NavLink>
    </div>
  );
}

export default Sidebar;