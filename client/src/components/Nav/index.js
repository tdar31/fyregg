import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/">
            <a className="navbar-item" href="">
              Home
            </a>
          </Link>
          <Link to="/champion">
            <a className="navbar-item champItem">Champions</a>
          </Link>
          <Link to="/items">
            <a className="navbar-item itemItem">Items</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
