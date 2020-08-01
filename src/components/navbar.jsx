import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <header>
        <nav className="nav">
          <input type="checkbox" className="toggle" />
          <div className="hamburger">
            <div></div>
          </div>
          <div className="nav__brand">Brand</div>
          <ul className="nav__menu">
            <li className="nav__menu--items">
              <Link to="/Store">Store</Link>
            </li>
            <li className="nav__menu--items">
              <Link to="/About">About</Link>
            </li>
            <li className="nav__menu--items">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className="nav__menu--items"></li>
          </ul>
        </nav>
      </header>
    </Router>
  );
};

export default NavBar;
