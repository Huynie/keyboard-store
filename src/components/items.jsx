import React, { useContext } from "react";
import { productContext } from "./product_list";

import Store from "./store";

export default function Items(props) {
  const {
    addToCart,
    /* setQuantity,
    quantityIncrease,
    quantityDecrease, */
  } = useContext(productContext);
  const item = props.location.item;
  if (item) {
    return (
      <>
        <div className="items">
          <img src={item.image} alt={item.name} />
          {/* <img src={item.image.first} alt={item.name} />
          <img src={item.image.second} alt={item.name} /> */}
          <h1 className="items__name">{item.name}</h1>
          <h3 className="items__price">${item.price}</h3>
          {/* <div className="items__quantity">
            <input
              className="items__quantity--increment"
              type="button"
              value="+"
              id="increase"
              onClick={() => quantityIncrease(item)}
            />
            <input
              className="items__quantity--count"
              type="number"
              value={item.quantity}
              onChange={(e) => setQuantity(item, parseInt(e.target.value))}
            />
            <input
              className="items__quantity--increment"
              type="button"
              value="-"
              id="decrease"
              onClick={() => quantityDecrease(item)}
            />
          </div> */}
          <button className="items__btn" onClick={() => addToCart(item)}>
            add to cart
          </button>
          <p className="items__description">{item.description}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        {/* <div>nothing here</div> */}
        <Store />
      </>
    );
  }
}
