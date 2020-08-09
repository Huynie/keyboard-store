import React from "react";
import { Link } from "react-router-dom";

function NavBar({
  cart,
  setCart,
  removeFromCart,
  quantityIncrease,
  quantityDecrease,
  /* quantityIncrement, */
}) {
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
  //TOTAL ITEMS IN CART
  const totalItemsInCart = cart.reduce(
    (total, { quantity }) => total + quantity,
    0
  );
  //TOTAL PRICE IN CART
  const costShow = () => {
    const totalPrice = cart.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    );
    if (totalPrice > 0) {
      return (
        <div className="nav__cart--checkout">
          <hr />
          <button>Checkout - ${totalPrice.toFixed(2)}</button>
        </div>
      );
    } else {
      return <div className="nav__cart--checkout">Nothing Here</div>;
    }
  };
  //SET QUANTITY
  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
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
        <div className="nav__cart--icon">{totalItemsInCart}</div>
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
                    <div className="nav__cart__quantity">
                      <input
                        className="nav__cart__quantity--increment"
                        type="button"
                        value="+"
                        id="increase"
                        onClick={() => quantityIncrease(product)}
                      />
                      <input
                        className="nav__cart__quantity--count"
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          setQuantity(product, parseInt(e.target.value))
                        }
                      />
                      <input
                        className="nav__cart__quantity--increment"
                        type="button"
                        value="-"
                        id="decrease"
                        onClick={() => quantityDecrease(product)}
                      />
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
