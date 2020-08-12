import React, { useContext } from "react";
import { productContext } from "./product_list";

export default function Home() {
  const { products, addToCart } = useContext(productContext);

  return (
    <>
      <div className="homePage">
        <h1>Featured</h1>
        {products.map((featured, idx) => {
          if (featured.featured === true) {
            return (
              <div className="popular" key={idx}>
                <img src={featured.image} alt={featured.name} />
                <h2 className="product__name">{featured.name}</h2>
                <h3 className="product__price">${featured.price}</h3>
                <button
                  className="product__btn"
                  onClick={() => addToCart(featured)}
                >
                  add to cart
                </button>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
