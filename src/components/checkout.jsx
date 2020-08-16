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
          <h1 className="checkout__title">Order Summary</h1>
          <hr />

          {cart.map((item, idx) => {
            return (
              <ul className="checkout__itemsList">
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
                <hr />
              </ul>
            );
          })}

          <ul className="checkout__cost">
            <li className="checkout__cost--total">
              <div>Total</div>
              <p>${total.toFixed(2)}</p>
            </li>
            <li className="checkout__cost--shipping">
              <div>Tax</div>
              <p>${tax.toFixed(2)}</p>
            </li>
            <li className="checkout__cost--tax">
              <div>Shipping</div>
              <p>${shipping.toFixed(2)}</p>
            </li>
            <hr />
            <li className="checkout__cost--grandTotal">
              <div>Grand Total</div>
              <p>${grandTotal.toFixed(2)}</p>
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
