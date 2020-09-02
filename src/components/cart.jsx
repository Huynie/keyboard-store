import React, { useContext } from "react";
import { productContext } from "./product_list";
import Checkout from "./checkout";

function Cart() {
  const {
    cart,
    setQuantity,
    quantityIncrease,
    quantityDecrease,
    removeFromCart,
    checkOutBtn,
    /*     totalPrice,
    shipping,
    tax,
    grandTotal,
    purchased, */
  } = useContext(productContext);

  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        <hr />
        <div className="cart__list">
          {cart.map((product, idx) => {
            return (
              <div className="cart__items" key={idx}>
                <img src={product.image[0]} alt={product.name} />
                <h2 className="cart__name">{product.name}</h2>
                <h3 className="cart__price">${product.price.toFixed(2)}</h3>
                <div className="cart__buttons" key={idx}>
                  <div className="cart__quantity">
                    <input
                      className="cart__quantity--decrement"
                      type="button"
                      value="-"
                      id="decrease"
                      onClick={() => quantityDecrease(product)}
                    />

                    <input
                      className="cart__quantity--count"
                      type="number"
                      value={product.quantity}
                      onChange={(e) =>
                        setQuantity(product, parseInt(e.target.value))
                      }
                    />
                    <input
                      className="cart__quantity--increment"
                      type="button"
                      value="+"
                      id="increase"
                      onClick={() => quantityIncrease(product)}
                    />
                  </div>
                  <input
                    type="button"
                    className="cart__remove"
                    value="Remove"
                    onClick={() => removeFromCart(product)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        {checkOutBtn()}
        {/* DESKTOP CART */}
        {/* <div className="cart__desktop">
          <h2 className="checkout__title">Order Summary</h2>

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
            <button className="checkout__order" onClick={() => purchased()}>
              Place Order
            </button>
          </ul>
        </div> */}
        <Checkout />
      </div>
    </>
  );
}
export default Cart;

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
