import React, { useContext } from "react";
import { productContext } from "./product_list";

export default function Store(/* { cart, setCart } */) {
  const { products, cart, setCart } = useContext(productContext);

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
    <>
      <div className="product">
        <h1>Products</h1>
        {products.map((product, idx) => {
          return (
            <div className="product__list" key={idx}>
              <img src={product.image} alt={product.name} />
              <h2 className="product__name">${product.name}</h2>
              <h3 className="product__price">${product.price}</h3>
              <button
                className="product__btn"
                onClick={() => addToCart(product)}
              >
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
