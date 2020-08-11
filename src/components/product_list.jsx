import React, { useState, createContext } from "react";

export const productContext = createContext();

export const ProductList = (props) => {
  const [products] = useState([
    {
      name: "Item 1",
      price: (80.0).toFixed(2),
      image: require("../images/k6.png"),
    },
    {
      name: "Item 2",
      price: (70.0).toFixed(2),
      image: require("../images/k7.png"),
    },
  ]);
  const [cart, setCart] = useState([]);
  //INCREMENT
  const quantityIncrease = (product, amount) => {
    const newCart = [...cart];
    amount = newCart.find((item) => product.name === item.name);
    amount.quantity++;
    setCart(newCart);
    console.log("quantity increased", amount.quantity);
  };
  return (
    <productContext.Provider
      value={{
        products,
        cart,
        setCart,
        quantityIncrease,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};
