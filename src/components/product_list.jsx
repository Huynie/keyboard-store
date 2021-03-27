import React, { useState, createContext, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export const productContext = createContext();

export const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  // Get items from database
  useEffect(() => {
    const getKeyboards = async (req, res) => {
      try {
        const keyboards = await axios.get('https://keybz.herokuapp.com/api/items');
        setProducts(keyboards.data);
      } catch (e) {
        console.log('something went wrong while getting data.');
        // return res.status(500).json({ message: e.message });
      }
    };
    getKeyboards();
  }, []);
  
  const [category, setCategory] = useState("full kit");

  //set selected item in local storage and set state
  const setToLocal = (localName, item) => {
    localStorage.setItem(localName, JSON.stringify(item));
  }
  // grab from local storage
  const getFromLocal = (item) => {
   return JSON.parse(localStorage.getItem(item));
  }
  
  const getProductsInCategory = () => {
    return products.filter((product) => product.category === category);
  };

  //CART
  const [cart, setCart] = useState([]);
  //PULL CART FROM LOCAL STORAGE THEN SET IN STATE ON MOUNT
  useEffect(()=>{
    setCart(getFromLocal('cart'));
  }, []);

  //SET CART IN LOCAL STORAGE EVERYTIME IT CHANGES
  useEffect(()=>{
    setToLocal('cart', cart);
  }, [cart,category]);
  
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
    const newCart = cart.filter((product) => product !== productToRemove);
    setCart(newCart);
  };
  //TOTAL PRICE BUTTON
  const totalPrice = cart.reduce(
    (total, { price, quantity }) => total + price * quantity,
    0
  );
  //CHECKOUT
  const closeNav = () => {
    document.querySelector(".toggle").checked = false;
    document.querySelector(".toggle__cart").checked = false;
  };
  const checkOutBtn = () => {
    if (totalPrice > 0) {
      return (
        <div className="cart__checkout">
          <hr />
          <button onClick={() => closeNav()}>
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
    return(
      <Link to="/cart"></Link>
    );
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
        category,
        setCategory,
        shipping,
        tax,
        grandTotal,
        purchased,
        setToLocal,
        getFromLocal,
        closeNav
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};
