import React, { useContext} from "react";
import { productContext } from "./product_list";
import Checkout from "./checkout";

export default function Cart() {
  const {
    cart,
    setQuantity,
    quantityIncrease,
    quantityDecrease,
    removeFromCart,
    checkOutBtn,
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
        <Checkout />
      </div>
    </>
  );
}
