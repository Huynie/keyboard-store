import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cart }) {
  const nav = document.querySelector(".nav__menu");
  const checkBox = document.querySelector(".toggle");
  const trans = document.querySelector(".nav__menu--transparency");
  //if clicking on outside of nav menu, close nav menu
  if (nav) {
    trans.addEventListener("click", (e) => {
      if (e.target === trans) {
        checkBox.checked = false;
      }
    });
  }
  return (
    <header>
      <nav className="nav">
        <input type="checkbox" className="toggle" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="nav__brand">
          <Link to="/">KEYBZ</Link>
        </div>
        <button className="cart__icon">
          <Link to="/cart">{cart.length}</Link>
        </button>
        <ul className="nav__menu">
          <li className="nav__menu--items">
            <Link to="/">HOME</Link>
          </li>
          <li className="nav__menu--items">
            <Link to="/Store">STORE</Link>
          </li>
          <li className="nav__menu--items">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="nav__menu--items">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="nav__menu--items">
            <Link to="/cart">CART</Link>
          </li>
        </ul>
        <div
          /* onClick={closeNav()} */
          className="nav__menu--transparency"
        ></div>
        <div className="announcement">
          <p>
            Due to COVID-19 shipping will be delayed click here to learn more
          </p>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
