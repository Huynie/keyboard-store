import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";

export const productContext = createContext();

export const ProductList = (props) => {
  const [products] = useState([
    {
      name: "Ceramik White 60",
      price: 80,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      category: "full kit",
      image: [
        require("../images/k1.png"),
        require("../images/k5.png"),
        require("../images/k6.png"),
        require("../images/k1.png"),
        require("../images/k5.png"),
        require("../images/k6.png"),
      ],
    },
    {
      name: "Salmon Peach 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [require("../images/k2.png")],
      category: "full kit",
    },
    {
      name: "KIWI 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [require("../images/k3.png")],
      category: "full kit",
    },
    {
      name: "Sandstone 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [require("../images/k4.png")],
      category: "full kit",
    },
    {
      name: "Pomegranate 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [require("../images/k10.png")],
      category: "full kit",
    },
    {
      name: "Pastel 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [require("../images/k11.png")],
      category: "full kit",
    },
    {
      name: "Hubba Bubba Powder",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [require("../images/k12.png")],
      category: "full kit",
      featured: true,
    },
    {
      name: "Teal Grape",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [require("../images/k13.png")],
      featured: true,
      category: "full kit",
    },
    {
      name: "Lapis Lazuli",
      price: 20,
      description: "PBT Double shot keycaps",
      image: [require("../images/k14.png")],
      category: "keycaps",
    },
    {
      name: "Jade",
      price: 20,
      description: "PBT Double shot keycaps",
      image: [require("../images/k17.png")],
      category: "keycaps",
    },
    {
      name: "Bronze Knee-Cap",
      price: 20,
      description: "PBT Double shot keycaps",
      image: [require("../images/k16.png")],
      category: "keycaps",
    },
    {
      name: "Bubble Gum",
      price: 20,
      description: "PBT Double shot keycaps",
      image: [require("../images/k15.png")],
      category: "keycaps",
    },
  ]);
  const [category, setCategory] = useState("full kit");

  //when clicking on a product from the store to view individually
  const [itemPicked, setItemPicked] = useState([]);

  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };
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
    // adds entire individual product everytime button clicked
    /* setCart([...cart, { ...product }]);*/

    //changes cart icon when added to cart
    const icon = document.querySelector("nav .cart__icon");
    icon.style.background = `url(' ${require("../images/clicked.svg")}')`;
    icon.style.backgroundSize = "contain";
    icon.style.color = "#ee6b61";
    setTimeout(() => {
      icon.removeAttribute("style");
    }, 200);
  };
  const quantityIncrease = (product, amount) => {
    const newCart = [...cart];
    amount = newCart.find((item) => product.name === item.name);
    amount.quantity++;
    setCart(newCart);
  };
  const quantityDecrease = (product, amount) => {
    const newCart = [...cart];
    amount = newCart.find((item) => product.name === item.name);
    if (amount.quantity < 2) {
      const decrease = document.getElementById("decrease");
      decrease.attributes.disabled = true;
    } else {
      amount.quantity--;
    }
    setCart(newCart);
  };
  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity = amount;
    setCart(newCart);
  };
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  //TOTAL PRICE BUTTON
  const totalPrice = cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
  const checkOutBtn = () => {
    const closeSideCart = () => {
      document.querySelector(".toggle__cart").checked = false;
    };
    if (totalPrice > 0) {
      return (
        <div className="cart__checkout">
          <hr />
          <button onClick={() => closeSideCart()}>
            <Link to="/checkout">CHECKOUT - ${totalPrice}</Link>
          </button>
        </div>
      );
    } else {
      return <div className="cart__checkout--empty">Cart Empty</div>;
    }
  };
  const shipping = totalPrice / 2;
  const tax = totalPrice / 3;
  const grandTotal = totalPrice + tax + shipping;
  const purchased = () => {
    const checkOutTitle = document.querySelectorAll("h1.checkout__title");
    checkOutTitle.forEach((title) => {
      title.innerHTML = "Thank you!";
    });
    setTimeout(() => {
      setCart([]);
    }, 1000);
  };
  return (
    <productContext.Provider
      value={{
        products,
        cart,
        setCart,
        addToCart,
        quantityIncrease,
        quantityDecrease,
        setQuantity,
        removeFromCart,
        checkOutBtn,
        totalPrice,
        getProductsInCategory,
        setCategory,
        itemPicked,
        setItemPicked,
        shipping,
        tax,
        grandTotal,
        purchased,
        /* getPickedItem, */
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};
