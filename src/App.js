import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import Store from "./components/store";
import Cart from "./components/cart";
import about from "./components/about";
import contact from "./components/contact";

export default function App() {
  const [products] = useState([
    {
      name: "Item 1",
      price: (80.0).toFixed(2),
      image: require("./images/k6.png"),
    },
    {
      name: "Item 2",
      price: (70.0).toFixed(2),
      image: require("./images/k7.png"),
    },
  ]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
    /* console.log("added to cart", itemInCart.quantity, newCart); */
    /* setCart([...cart, { ...product }]); */
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const quantityIncrease = (stuff, amount) => {
    const newCart = [...cart];
    amount = newCart.find((item) => stuff.name === item.name);
    amount.quantity++;
    setCart(newCart);
    /* console.log("quantity increased", amount.quantity); */
  };

  const quantityDecrease = (stuff, amount) => {
    const newCart = [...cart];
    amount = newCart.find((item) => stuff.name === item.name);
    amount.quantity--;
    setCart(newCart);
    /* console.log("quantity increased", amount.quantity); */
  };

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
  return (
    <>
      <Router>
        <NavBar
          cart={cart}
          removeFromCart={removeFromCart}
          setCart={setCart}
          quantityIncrease={quantityIncrease}
          quantityDecrease={quantityDecrease}
          /* quantityIncrement={quantityIncrement} */
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={about} />
          <Route
            path="/store"
            /* component={Store} */ render={(props) => (
              <Store {...props} products={products} addToCart={addToCart} />
            )}
          />
          <Route
            path="/cart"
            /* component={Cart} */ render={(props) => (
              <Cart {...props} cart={cart} removeFromCart={removeFromCart} />
            )}
          />
          <Route path="/contact" component={contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
