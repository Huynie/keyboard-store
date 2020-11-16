import React, { useContext } from "react";
import { productContext } from "./product_list";

export default function Checkout() {
  const { cart, totalPrice, shipping, tax, grandTotal, purchased } = useContext(
    productContext
  );

  if (totalPrice > 0) {
    return (
      <div className="checkout">
        <h1 className="checkout__title">Order Summary</h1>
        <hr />
        {cart.map((item, idx) => {
          return (
            <ul className="checkout__itemsList" key={idx}>
              <li key={idx}>
                <div className="checkout__itemsList--name">
                  <img src={item.image[0]} alt={item.name} />
                  {item.name}
                </div>
                <div className="checkout__itemsList--quantity">
                  {item.quantity}
                </div>
                <div className="checkout__itemsList--price">
                  ${item.price.toFixed(2)}
                </div>
              </li>
              <hr />
            </ul>
          );
        })}

        <ul className="checkout__cost">
          <li className="checkout__cost--total">
            <div>Total</div>
            <p>${totalPrice.toFixed(2)}</p>
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
        <button className="checkout__order" onClick={() => purchased()}>
          Place Order
        </button>
      </div>
    );
  } else {
    return (
      <div className="checkout">
        <div className="checkout__empty">nothing here</div>
      </div>
    );
  }
}
