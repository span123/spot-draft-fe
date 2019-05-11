import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm sticky-top navbar-dark"
        style={{ background: "#404b69" }}
      >
        <div className="navbar-brand">May the force be with you</div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/planets">
              Planets
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/films">
              Films
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
