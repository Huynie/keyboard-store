import React, { useState, createContext } from "react";

export const productContext = createContext();

export const ProductList = (props) => {
  const [products] = useState([
    {
      name: "Item 1",
      price: (80.0).toFixed(2),
      image: require("../images/k1.png"),
    },
    {
      name: "Item 2",
      price: (70.0).toFixed(2),
      image: require("../images/k2.png"),
    },
    {
      name: "Item 3",
      price: (70.0).toFixed(2),
      image: require("../images/k3.png"),
    },
    {
      name: "Item 4",
      price: (70.0).toFixed(2),
      image: require("../images/k4.png"),
    },
    {
      name: "Item 5",
      price: (70.0).toFixed(2),
      image: require("../images/k10.png"),
    },
    {
      name: "Item 6",
      price: (70.0).toFixed(2),
      image: require("../images/k11.png"),
    },
    {
      name: "Item 7",
      price: (70.0).toFixed(2),
      image: require("../images/k12.png"),
      featured: true,
    },
    {
      name: "Item 8",
      price: (70.0).toFixed(2),
      image: require("../images/k13.png"),
      featured: true,
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
    /* setCart([...cart, { ...product }]); */
  };

  return (
    <productContext.Provider
      value={{
        products,
        cart,
        setCart,
        addToCart,
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};
