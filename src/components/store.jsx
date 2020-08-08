import React from "react";

export default function Store({ products, addToCart }) {
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
