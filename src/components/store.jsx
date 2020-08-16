import React, { useContext } from "react";
import { productContext } from "./product_list";
import { Link } from "react-router-dom";

export default function Store() {
  const { products } = useContext(productContext);

  return (
    <>
      <div className="product">
        {products.map((product, idx) => {
          return (
            <div className="product__item" key={idx}>
              <Link
                to={{
                  pathname: `/items/${product.name}`,
                  item: product,
                }}
              >
                <img src={product.image} alt={product.name} />
                <div>
                  <h2 className="product__name">{product.name}</h2>
                  <h3 className="product__price">${product.price}</h3>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
