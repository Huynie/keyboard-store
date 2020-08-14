import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";

export default function Home() {
  const { products, addToCart } = useContext(productContext);

  return (
    <>
      <div className="homePage">
        <h1>Featured</h1>
        {products.map((featured, idx) => {
          if (featured.featured === true) {
            console.log(featured[idx]);
            return (
              <div className="popular" key={idx}>
                <Link
                  to={{
                    pathname: "/items",
                    item: featured,
                  }}
                >
                  {" "}
                  <img src={featured.image} alt={featured.name} />
                  <h2 className="product__name">{featured.name}</h2>
                  <h3 className="product__price">${featured.price}</h3>
                </Link>
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
