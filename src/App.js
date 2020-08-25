import React from "react";
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
import Items from "./components/items";
import Checkout from "./components/checkout";

//CONTEXT
import { ProductList } from "./components/product_list";

export default function App() {
  return (
    <>
      <Router>
        <ProductList>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={about} />
            <Route path="/items" render={(props) => <Items {...props} />} />
            <Route
              path="/checkout"
              render={(props) => <Checkout {...props} />}
            />
            <Route
              path="/store"
              /* component={Store} */ render={(props) => (
                <Store {...props} /* cart={cart} setCart={setCart} */ />
              )}
            />

            <Route
              path="/cart"
              /* component={Cart} */
              render={(props) => (
                <Cart
                  {...props}
                  /*  cart={cart}
                setCart={setCart}
                removeFromCart={removeFromCart} */
                />
              )}
            />
            <Route path="/contact" component={contact} />
          </Switch>
          <Footer />
        </ProductList>
      </Router>
    </>
  );
}
