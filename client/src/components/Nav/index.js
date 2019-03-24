import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <Link to="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link to="/champions">
            <a className="navbar-item champItem">Champions</a>
          </Link>
          <Link to="/items">
            <a className="navbar-item itemItem">Items</a>
          </Link>
          <Link to="/spells">
            <a className="navbar-item spellItem">Spells</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
