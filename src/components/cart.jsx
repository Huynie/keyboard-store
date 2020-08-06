import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, removeFromCart }) {
  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        <button>
          <Link to="/store">go to store</Link>
        </button>
        {cart.map((product, idx) => {
          return (
            <div className="cart__list" key={idx}>
              <img src={product.image} alt={product.name} />
              <h2 className="cart__name">{product.name}</h2>
              <h3 className="cart__price">{product.price}</h3>
              <button
                onClick={() => removeFromCart(product)}
                className="cart__btn"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
