import React from "react";
import { Link } from "react-router-dom";

function NavBar({ cart, removeFromCart }) {
  /*   const nav = document.querySelector(".nav__menu");
  const checkBox = document.querySelector(".toggle");
  const trans = document.querySelector(".nav__menu--transparency");
  //if clicking on outside of nav menu, close nav menu
  if (nav) {
    trans.addEventListener("click", (e) => {
      if (e.target === trans) {
        checkBox.checked = false;
      }
    });
  } */
  //TOTAL PRICE IN CART
  const costShow = () => {
    const totalPrice = cart.reduce(
      (total, product) => total + product.price,
      0
    );
    if (totalPrice > 0) {
      return (
        <div className="nav__cart--checkout">
          <hr />
          <button>Checkout - ${totalPrice}</button>
        </div>
      );
    } else {
      return <div className="nav__cart--checkout">Nothing Here</div>;
    }
  };

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
        <div className="nav__cart--icon">{cart.length}</div>
        <input type="checkbox" className="toggle__cart" />
        {/* CART MENU */}
        <>
          <div className="nav__cart">
            <h1>Cart</h1>
            <hr />
            {cart.map((product, idx) => {
              return (
                <div className="nav__cart--items" key={idx}>
                  <img src={product.image} alt={product.name} />
                  <h2 className="nav__cart--name">${product.name}</h2>
                  <p className="nav__cart--price">${product.price}</p>
                  <div className="nav__cart--buttons">
                    <div className="nav__cart--quantity">
                      <button>+</button>
                      <input type="text" />
                      <button>-</button>
                    </div>
                    <button
                      className="nav__cart--remove"
                      onClick={() => removeFromCart(product)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            {costShow()}
          </div>
        </>
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
