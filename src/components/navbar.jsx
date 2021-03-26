import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";
import Cart from "./cart";
import logo from '../images/logo02.svg';

export default function NavBar() {
  const { cart, closeNav } = useContext(productContext);

  //CLICKING TRANSPARENCY CLOSES WHICH EVER MENU IS UP

  //TOTAL ITEMS IN CART
  const totalItemsInCart = cart.reduce(
    (total, { quantity }) => total + quantity,
    0
  );
  return (
    <header>
      <nav className="mobile">
        <input type="checkbox" className="toggle" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <ul>
            <li className="menu--items">
              <Link to="/" onClick={() => closeNav()}>
                HOME
              </Link>
            </li>
            <li className="menu--items">
              <Link to="/Store" onClick={() => closeNav()}>
                SHOP
              </Link>
            </li>
            <li className="menu--items">
              {/* <a href="./#about" onClick={() => closeNav()}>
                ABOUT
              </a> */}
              <Link to="/about" onClick={() => closeNav()}>
                ABOUT
              </Link>
            </li>
            <li className="menu--items">
              {/* <a href="./#contact" onClick={() => closeNav()}>
                CONTACT
              </a> */}

              <Link to="/contact" onClick={() => closeNav()}>
                CONTACT
              </Link>
            </li>
            {/* <li className="menu--items">
              <Link to="/cart" onClick={() => closeNav()}>
                CART
              </Link>
            </li> */}
          </ul>
          <div className="menu--social">
            <img src={"/images/FB_White.png"} alt="" />
            <img src={"/images/IG_White.png"} alt="" />
            <img src={"/images/TW_White.png"} alt="" />
          </div>
        </div>
        <div className="brand">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <input type="checkbox" className="toggle__cart" />
        <div className="cart__icon">{totalItemsInCart}</div>
        <div className="cart__menu">
          <Cart />
        </div>
        <div onClick={() => closeNav()} className="menu--transparency"></div>
      </nav>
      <div className="desktop">
        <ul className="desktop__nav--left">
          <li className="menu--items">
            <Link to="/" onClick={() => closeNav()}>
              HOME
            </Link>
          </li>
          <li className="menu--items">
            <Link to="/about">ABOUT</Link>
          </li>
          {/* <li className="menu--items">
            <Link to="/contact">CONTACT</Link>
          </li> */}
        </ul>
        <div className="desktop__brand">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="desktop__nav--right">
          <li className="menu--items">
            <Link to="/Store" onClick={() => closeNav()}>
              SHOP
            </Link>
          </li>
          <li className="menu--items">
            <Link to="/cart" onClick={() => closeNav()}>
              CART ({totalItemsInCart})
            </Link>
          </li>
        </ul>
      </div>
      <div className="announcement">
        <p>Due to COVID-19 shipping will be delayed</p>
      </div>
    </header>
  );
}
