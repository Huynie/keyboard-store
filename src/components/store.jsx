import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";

export default function Store() {
  const { products, addToCart } = useContext(productContext);

  return (
    <>
      <div className="product">
        <h1>Products</h1>
        {products.map((product, idx) => {
          return (
            <div className="product__list" key={idx}>
              <Link
                to={{
                  pathname: "/items",
                  item: product,
                }}
              >
                <img src={product.image} alt={product.name} />
                <h2 className="product__name">{product.name}</h2>
                <h3 className="product__price">${product.price}</h3>
              </Link>
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
