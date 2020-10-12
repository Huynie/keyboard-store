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
        require("../images/k1_1x.png"),
        require("../images/k1-2_1x.png"),
        require("../images/k1-3_1x.png"),
        require("../images/k1-4_1x.png"),
      ],
    },
    {
      name: "Salmon Peach 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [
        require("../images/k2_1x.png"),
        require("../images/k2-2_1x.png"),
        require("../images/k2-3_1x.png"),
        require("../images/k1-4_1x.png"),
      ],
      category: "full kit",
    },
    {
      name: "KIWI 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [
        require("../images/k3_1x.png"),
        require("../images/k3-2_1x.png"),
        require("../images/k2-3_1x.png"),
        require("../images/k3-4_1x.png"),
      ],
      category: "full kit",
    },
    {
      name: "Sandstone 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [
        require("../images/k4_1x.png"),
        require("../images/k4-2_1x.png"),
        require("../images/k2-3_1x.png"),
        require("../images/k4-4_1x.png"),
      ],
      category: "full kit",
    },
    {
      name: "Pomegranate 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [
        require("../images/k7_1x.png"),
        require("../images/k7-2_1x.png"),
        require("../images/k2-3_1x.png"),
        require("../images/k3-4_1x.png"),
      ],
      category: "full kit",
    },
    {
      name: "Pastel 60",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [
        require("../images/k8_1x.png"),
        require("../images/k8-2_1x.png"),
        require("../images/k8-3_1x.png"),
        require("../images/k8-4_1x.png"),
      ],
      category: "full kit",
    },
    {
      name: "Hubba Bubba Powder",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [
        require("../images/k9_1x.png"),
        require("../images/k9-2_1x.png"),
        require("../images/k9-3_1x.png"),
        require("../images/k9-4_1x.png"),
      ],
      category: "full kit",
      featured: true,
    },
    {
      name: "Teal Grape",
      price: 70,
      description:
        "ansi 60% layout, pbt keycaps, hotswapable switches, full RGB LED, bluetooth 5.1, usb-C",
      image: [
        require("../images/k10_1x.png"),
        require("../images/k10-2_1x.png"),
        require("../images/k10-3_1x.png"),
        require("../images/k10-4_1x.png"),
      ],
      featured: true,
      category: "full kit",
    },
    {
      name: "Soy",
      price: 20,
      description: "PBT Double shot keycaps",
      image: [
        require("../images/k11_1x.png"),
        require("../images/k11-2_1x.png"),
        require("../images/k11-3_1x.png"),
      ],
      category: "keycaps",
    },
    {
      name: "Soot",
      price: 20,
      description: "PBT Double shot keycaps",
      image: [
        require("../images/k12_1x.png"),
        require("../images/k12-2_1x.png"),
        require("../images/k12-3_1x.png"),
      ],
      category: "keycaps",
    },
    {
      name: "Chili",
      price: 20,
      description: "PBT Double shot keycaps",
      image: [
        require("../images/k13_1x.png"),
        require("../images/k13-2_1x.png"),
        require("../images/k13-3_1x.png"),
      ],
      category: "keycaps",
    },
    {
      name: "Bellpepper",
      price: 20,
      description: "PBT Double shot keycaps",
      image: [
        require("../images/k14_1x.png"),
        require("../images/k14-2_1x.png"),
        require("../images/k14-3_1x.png"),
      ],
      category: "keycaps",
    },
  ]);
  const [category, setCategory] = useState("full kit");

  //when clicking on a product from the store to view individually
  const [itemPicked, setItemPicked] = React.useState({});

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
