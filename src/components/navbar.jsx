import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <header>
        <nav className="nav">
          <div className="nav__brand">Brand</div>
          <button className="nav__menu">
            <Link to="/Home">Home</Link>
          </button>
          <button className="nav__menu">About</button>
          <button className="nav__menu">
            <Link to="/Store">Store</Link>
          </button>
          <button className="nav__menu">Contact</button>
        </nav>
      </header>
    </Router>
  );
};

export default NavBar;
