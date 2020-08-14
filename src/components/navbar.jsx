import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";
import Cart from "./cart";

export default function NavBar() {
  const { cart } = useContext(productContext);

  //CLICKING TRANSPARENCY CLOSES WHICH EVER MENU IS UP
  const closeNav = () => {
    const navMenu = document.querySelector(".toggle");
    const cartMenu = document.querySelector(".toggle__cart");
    navMenu.checked = false;
    cartMenu.checked = false;
  };
  //TOTAL ITEMS IN CART
  const totalItemsInCart = cart.reduce(
    (total, { quantity }) => total + quantity,
    0
  );
  return (
    <header>
      <nav className="nav">
        <input type="checkbox" className="toggle" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="brand">
          <Link to="/">KEYBZ</Link>
        </div>
        <div className="cart__icon">{totalItemsInCart}</div>
        <input type="checkbox" className="toggle__cart" />
        <div className="cart__menu">
          <Cart />
        </div>
        <ul className="menu">
          <li className="menu--items">
            <Link to="/">HOME</Link>
          </li>
          <li className="menu--items">
            <Link to="/Store">STORE</Link>
          </li>
          <li className="menu--items">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="menu--items">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="menu--items">
            <Link to="/cart">CART</Link>
          </li>
        </ul>
        <div onClick={() => closeNav()} className="menu--transparency"></div>
      </nav>
      <div className="announcement">
        <p>Due to COVID-19 shipping will be delayed click here to learn more</p>
      </div>
    </header>
  );
}
