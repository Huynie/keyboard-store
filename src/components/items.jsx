import React, { useContext } from "react";
import { productContext } from "./product_list";

export default function Items(props) {
  const { addToCart } = useContext(productContext);
  const item = props.location.item;
  return (
    <>
      <div className="product">
        <h1>ITEMS</h1>
        <img src={item.image} alt={item.name} />
        <p>description goes here</p>
        <h2 className="product__name">{item.name}</h2>
        <h3 className="product__price">${item.price}</h3>
        <button className="product__btn" onClick={() => addToCart(item)}>
          add to cart
        </button>
      </div>
    </>
  );
}
