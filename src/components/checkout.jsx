import React from "react";
import Cart from "./cart";

export default function Checkout(props) {
  const total = props.location.total;
  const cart = props.location.cart;
  const shipping = total / 2;
  const tax = total / 3;
  const grandTotal = total + tax + shipping;
  const totalRendered = () => {
    if (total > 0) {
      return (
        <div className="checkout">
          <h1 className="checkout__title">CHECKOUT</h1>
          <ul className="checkout__itemsList">
            {cart.map((item, idx) => {
              return (
                <li key={idx}>
                  <div className="checkout__itemsList--name">
                    <img src={item.image} alt="" />
                    {item.name}
                  </div>
                  <div className="checkout__itemsList--quantity">
                    {item.quantity}
                  </div>
                  <div className="checkout__itemsList--price">
                    ${item.price}
                  </div>
                </li>
              );
            })}
          </ul>
          <ul className="checkout__cost">
            <li className="checkout__total">
              <div>Total</div>
              <p>${total}</p>
            </li>
            <li className="checkout__shipping">
              <div>Tax</div>
              <p>${tax}</p>
            </li>
            <li className="checkout__tax">
              <div>Shipping</div>
              <p>${shipping}</p>
            </li>
            <li className="checkout__grandTotal">
              <div>Grand Total</div>
              <p>${grandTotal}</p>
            </li>
          </ul>
          <button className="checkout__order">Place Order</button>
        </div>
      );
    } else {
      return <div className="checkout">nothing here</div>;
    }
  };
  return <>{totalRendered()}</>;
}
