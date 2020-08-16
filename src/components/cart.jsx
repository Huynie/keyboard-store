import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    setCart,
    setQuantity,
    quantityIncrease,
    quantityDecrease,
  } = useContext(productContext);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  //TOTAL PRICE BUTTON
  const costShow = () => {
    const totalPrice = cart.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    );
    const checkOut = () => {
      document.querySelector(".toggle__cart").checked = false;
    };
    if (totalPrice > 0) {
      return (
        <div className="cart__checkout">
          <hr />
          <button onClick={() => checkOut()}>
            <Link
              to={{
                pathname: "/checkout",
                total: totalPrice,
                cart: cart,
              }}
            >
              Checkout - ${totalPrice.toFixed(2)}
            </Link>
          </button>
        </div>
      );
    } else {
      return <div className="cart__checkout">Nothing Here</div>;
    }
  };
  return (
    <>
      <div className="cart">
        <h1>Cart</h1>
        <hr />
        <div className="cart__list">
          {cart.map((product, idx) => {
            return (
              <div className="cart__items" key={idx}>
                <img src={product.image} alt={product.name} />
                <h2 className="cart__name">{product.name}</h2>
                <h3 className="cart__price">${product.price}</h3>
                <div className="cart__buttons" key={idx}>
                  <div className="cart__quantity">
                    <input
                      className="cart__quantity--increment"
                      type="button"
                      value="+"
                      id="increase"
                      onClick={() => quantityIncrease(product)}
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
                      value="-"
                      id="decrease"
                      onClick={() => quantityDecrease(product)}
                    />
                  </div>
                  <button
                    className="cart__remove"
                    onClick={() => removeFromCart(product)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {costShow()}
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
