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
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log("added to cart");
    setCart([...cart, { ...product }]);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const [products] = useState([
    {
      name: "Item 1",
      price: 90.0,
      image: require("./images/k6.png"),
    },
    {
      name: "Item 2",
      price: 80.0,
      image: require("./images/k7.png"),
    },
  ]);
  return (
    <>
      <Router>
        <NavBar cart={cart} removeFromCart={removeFromCart} />
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
