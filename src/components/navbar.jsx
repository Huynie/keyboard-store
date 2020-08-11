import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";
import Cart from "./cart";

function NavBar() {
  const { cart } = useContext(productContext);

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
  /*   const quantityIncrement = (product, amount) => {
    quantity = isNaN(quantity) ? 0 : quantity;
    const newCart = [...cart];
    amount = newCart.find((item) => product.name === item.name);
    if (
      document.getElementById("increase").clicked === true &&
      document.getElementById("decrease").value === "+"
    ) {
      console.log("increased", document.getElementById("increase").clicked);
      amount.quantity++;
      console.log("incremented");
    } else {
      if (document.getElementById("decrease").value === "-") {
        console.log("decreased", document.getElementById("decrease").clicked);
        amount.quantity--;
        console.log("decremented");
      }
    }
    setCart(newCart);

    console.log("quantity is", amount.quantity);
  }; */

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
        <div className="cart--icon">{totalItemsInCart}</div>
        <input type="checkbox" className="toggle__cart" />
        {/* CART MENU */}
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
        <div
          /* onClick={closeNav()} */
          className="menu--transparency"
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
